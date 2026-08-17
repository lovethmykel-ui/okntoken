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

  const size = 360;
  const center = size / 2;
  const outerRadius = 140;
  const innerRadius = 90;
  const activeOuterRadius = 152;
  const activeInnerRadius = 82;

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
    // Avoid full 360 glitch
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
    <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center select-none">
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
        className="w-full h-full transform drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
      >
        <defs>
          {allocations.map((item, idx) => (
            <filter key={`glow-${idx}`} id={`glow-${idx}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor={item.color} floodOpacity="0.45" />
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: isActive ? `url(#glow-${slice.index})` : "none",
              }}
              transition={{
                duration: 0.4,
                delay: slice.index * 0.04,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="cursor-pointer transition-all duration-300 stroke-white/80 dark:stroke-slate-900 stroke-[2px] hover:brightness-110"
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
          className="fill-white/95 dark:fill-[#0A0C14] transition-colors duration-300 shadow-inner"
        />
      </svg>

      {/* Interactive Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDisplay.name}
            initial={{ opacity: 0, scale: 0.9, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -5 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center"
          >
            <span
              className="w-2.5 h-2.5 rounded-full mb-1.5 shadow-xs"
              style={{ backgroundColor: currentDisplay.color }}
            />
            <span className="text-3xl sm:text-4xl font-mono font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
              {currentDisplay.percentage}%
            </span>
            <span className="text-xs sm:text-sm font-heading font-bold text-slate-800 dark:text-slate-200 mt-1 line-clamp-1">
              {currentDisplay.name}
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-400 font-mono mt-0.5">
              {(currentDisplay.percentage * 50_000_000).toLocaleString()} OKN
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
