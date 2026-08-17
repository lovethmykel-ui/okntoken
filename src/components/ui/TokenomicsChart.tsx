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

  // Large, prominent chart dimensions with expansive inner hole to prevent text overlap
  const size = 560;
  const center = size / 2;
  const outerRadius = 235;
  const innerRadius = 158;
  const activeOuterRadius = 255;
  const activeInnerRadius = 150;

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
    <div className="relative w-full max-w-[540px] sm:max-w-[580px] lg:max-w-[620px] aspect-square flex items-center justify-center select-none">
      {/* Background Ambient Glow */}
      <div
        className="absolute inset-4 rounded-full blur-3xl opacity-40 dark:opacity-50 transition-colors duration-500 pointer-events-none"
        style={{
          backgroundColor: currentDisplay.color,
        }}
      />

      {/* SVG Chart */}
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
              className="cursor-pointer transition-all duration-300 stroke-white/90 dark:stroke-[#090C16] stroke-[3px] hover:brightness-115"
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
          r={innerRadius - 8}
          className="fill-white/95 dark:fill-[#0A0C16] transition-colors duration-300 shadow-inner"
        />
      </svg>

      {/* Interactive Center Content with Guaranteed No Overlap */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center p-6 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDisplay.name}
            initial={{ opacity: 0, scale: 0.9, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center justify-center max-w-[260px] sm:max-w-[290px] w-full"
          >
            {/* Active Color Pill Indicator */}
            <div className="flex items-center gap-1.5 mb-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full shadow-xs"
                style={{ backgroundColor: currentDisplay.color }}
              />
              <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-slate-500 dark:text-slate-400">
                Allocation
              </span>
            </div>

            {/* Large Percentage */}
            <span className="text-5xl sm:text-6xl font-mono font-black text-slate-950 dark:text-white tracking-tight leading-none my-1">
              {currentDisplay.percentage}%
            </span>

            {/* Title with wrapping and no overflow */}
            <span className="text-base sm:text-lg font-heading font-black text-slate-900 dark:text-slate-100 leading-snug px-1 line-clamp-2 mt-1">
              {currentDisplay.name}
            </span>

            {/* Token Counter */}
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1 font-bold">
              {(currentDisplay.percentage * 50_000_000).toLocaleString()} OKN
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
