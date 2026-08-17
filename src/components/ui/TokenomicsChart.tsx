"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TokenAllocation } from "@/data/siteContent";

interface TokenomicsChartProps {
  allocations: TokenAllocation[];
  activeAllocation: TokenAllocation | null;
  onSelectAllocation: (item: TokenAllocation) => void;
}

export function TokenomicsChart({
  allocations,
  activeAllocation,
  onSelectAllocation,
}: TokenomicsChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Enlarged chart dimensions to fill empty spaces
  const size = 460;
  const center = size / 2;
  const outerRadius = 185;
  const innerRadius = 120;
  const activeOuterRadius = 202;
  const activeInnerRadius = 112;

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

  return (
    <div className="relative w-full max-w-[460px] sm:max-w-[490px] aspect-square flex items-center justify-center select-none">
      {/* Background Ambient Glow */}
      <div
        className="absolute inset-2 rounded-full blur-3xl opacity-45 dark:opacity-55 transition-colors duration-500 pointer-events-none"
        style={{
          backgroundColor: currentDisplay.color,
        }}
      />

      {/* SVG Chart */}
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full transform drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
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
              className="cursor-pointer transition-all duration-300 stroke-white/90 dark:stroke-[#090C16] stroke-[2.5px] hover:brightness-115"
              onMouseEnter={() => {
                setHoveredIndex(slice.index);
                onSelectAllocation(slice);
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onSelectAllocation(slice)}
            />
          );
        })}

        {/* Inner Circle Backdrop */}
        <circle
          cx={center}
          cy={center}
          r={innerRadius - 10}
          className="fill-white/95 dark:fill-[#0A0C16] transition-colors duration-300 shadow-inner"
        />
      </svg>

      {/* Interactive Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDisplay.name}
            initial={{ opacity: 0, scale: 0.9, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center max-w-[200px]"
          >
            <span
              className="w-3 h-3 rounded-full mb-2 shadow-xs"
              style={{ backgroundColor: currentDisplay.color }}
            />
            <span className="text-4xl sm:text-5xl font-mono font-black text-slate-950 dark:text-white tracking-tight leading-none">
              {currentDisplay.percentage}%
            </span>
            <span className="text-sm sm:text-base font-heading font-extrabold text-slate-900 dark:text-slate-100 mt-1.5 line-clamp-1">
              {currentDisplay.name}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-1 font-semibold">
              {(currentDisplay.percentage * 50_000_000).toLocaleString()} OKN
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
