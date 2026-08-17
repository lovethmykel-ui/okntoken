"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TokenAllocation } from "@/data/siteContent";

interface TokenomicsChartProps {
  allocations: TokenAllocation[];
  activeAllocation: TokenAllocation | null;
  onSelectAllocation: (item: TokenAllocation) => void;
}

function splitTitle(title: string): string[] {
  if (title.length <= 16) return [title];
  if (title.includes(" (")) {
    const parts = title.split(" (");
    return [parts[0], `(${parts[1]}`];
  }
  if (title.includes(" & ")) {
    const parts = title.split(" & ");
    return [`${parts[0]} &`, parts[1]];
  }
  const words = title.split(" ");
  if (words.length >= 2) {
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
  }
  return [title];
}

export function TokenomicsChart({
  allocations,
  activeAllocation,
  onSelectAllocation,
}: TokenomicsChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Large SVG coordinate canvas (560x560) with spacious inner hole (340px diameter)
  const size = 560;
  const center = size / 2;
  const outerRadius = 240;
  const innerRadius = 168;
  const activeOuterRadius = 258;
  const activeInnerRadius = 160;

  // Compute slice angles
  let currentAngle = -90; // Start at top
  const slices = allocations.map((item, index) => {
    const angle = (item.percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle += angle;

    return {
      ...item,
      index,
      startAngle,
      endAngle,
    };
  });

  const getCoordinatesForAngle = (angleInDegrees: number, radius: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: center + radius * Math.cos(angleInRadians),
      y: center + radius * Math.sin(angleInRadians),
    };
  };

  const createArcPath = (
    startAngle: number,
    endAngle: number,
    iRadius: number,
    oRadius: number
  ) => {
    const adjustedEnd = endAngle - startAngle >= 360 ? startAngle + 359.99 : endAngle;
    const largeArcFlag = adjustedEnd - startAngle <= 180 ? "0" : "1";

    const outerStart = getCoordinatesForAngle(startAngle, oRadius);
    const outerEnd = getCoordinatesForAngle(adjustedEnd, oRadius);
    const innerStart = getCoordinatesForAngle(adjustedEnd, iRadius);
    const innerEnd = getCoordinatesForAngle(startAngle, iRadius);

    return [
      `M ${outerStart.x} ${outerStart.y}`,
      `A ${oRadius} ${oRadius} 0 ${largeArcFlag} 1 ${outerEnd.x} ${outerEnd.y}`,
      `L ${innerStart.x} ${innerStart.y}`,
      `A ${iRadius} ${iRadius} 0 ${largeArcFlag} 0 ${innerEnd.x} ${innerEnd.y}`,
      "Z",
    ].join(" ");
  };

  const currentDisplay = activeAllocation || allocations[0];
  const nameLines = splitTitle(currentDisplay.name);

  return (
    <div className="relative w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[600px] aspect-square flex items-center justify-center select-none">
      {/* Background Ambient Glow */}
      <div
        className="absolute inset-6 rounded-full blur-3xl opacity-40 dark:opacity-50 transition-colors duration-500 pointer-events-none"
        style={{
          backgroundColor: currentDisplay.color,
        }}
      />

      {/* SVG Chart with Native Vector Slices AND Native Vector Typography */}
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full transform drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
      >
        <defs>
          {allocations.map((item, idx) => (
            <filter key={`glow-${idx}`} id={`glow-${idx}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor={item.color} floodOpacity="0.5" />
            </filter>
          ))}
        </defs>

        {/* Donut Slices */}
        {slices.map((slice) => {
          const isActive =
            hoveredIndex === slice.index ||
            (!hoveredIndex && activeAllocation?.name === slice.name);
          const oRad = isActive ? activeOuterRadius : outerRadius;
          const iRad = isActive ? activeInnerRadius : innerRadius;
          const path = createArcPath(slice.startAngle, slice.endAngle, iRad, oRad);

          return (
            <motion.path
              key={slice.name}
              d={path}
              fill={slice.color}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: isActive ? `url(#glow-${slice.index})` : "none",
              }}
              transition={{
                duration: 0.4,
                delay: slice.index * 0.03,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="cursor-pointer transition-all duration-300 stroke-white/95 dark:stroke-[#090C16] stroke-[3px] hover:brightness-115"
              onMouseEnter={() => {
                setHoveredIndex(slice.index);
                onSelectAllocation(slice);
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onSelectAllocation(slice)}
            />
          );
        })}

        {/* Inner Circle Backdrop Vessel */}
        <circle
          cx={center}
          cy={center}
          r={innerRadius - 6}
          className="fill-white/98 dark:fill-[#080A12] stroke-purple-200/40 dark:stroke-white/10 stroke-[2px] transition-colors duration-300 shadow-inner"
        />

        {/* Native Vector Typography - Scales 1:1 with SVG without any possibility of text overflow */}
        <g className="transition-all duration-300">
          {/* Top Tag: Pill Dot + Allocation Label */}
          <circle
            cx={center - 48}
            cy={center - 68}
            r={5}
            fill={currentDisplay.color}
          />
          <text
            x={center - 36}
            y={center - 64}
            textAnchor="start"
            className="fill-slate-500 dark:fill-slate-400 font-mono text-[13px] font-bold uppercase tracking-wider"
          >
            ALLOCATION
          </text>

          {/* Big Center Percentage */}
          <text
            x={center}
            y={center - 4}
            textAnchor="middle"
            className="fill-slate-950 dark:fill-white font-mono text-[62px] font-black tracking-tight"
          >
            {currentDisplay.percentage}%
          </text>

          {/* Allocation Title (1 or 2 lines centered within the 336px hole) */}
          {nameLines.length === 1 ? (
            <text
              x={center}
              y={center + 38}
              textAnchor="middle"
              className="fill-slate-900 dark:fill-slate-100 font-sans text-[21px] font-bold tracking-tight"
            >
              {nameLines[0]}
            </text>
          ) : (
            <>
              <text
                x={center}
                y={center + 30}
                textAnchor="middle"
                className="fill-slate-900 dark:fill-slate-100 font-sans text-[19px] font-bold tracking-tight"
              >
                {nameLines[0]}
              </text>
              <text
                x={center}
                y={center + 54}
                textAnchor="middle"
                className="fill-slate-900 dark:fill-slate-100 font-sans text-[19px] font-bold tracking-tight"
              >
                {nameLines[1]}
              </text>
            </>
          )}

          {/* Token Counter */}
          <text
            x={center}
            y={nameLines.length === 1 ? center + 68 : center + 82}
            textAnchor="middle"
            className="fill-slate-500 dark:fill-slate-400 font-mono text-[14px] font-semibold"
          >
            {(currentDisplay.percentage * 50_000_000).toLocaleString()} OKN
          </text>
        </g>
      </svg>
    </div>
  );
}
