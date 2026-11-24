"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import { TokenAllocation } from "@/data/siteContent";
import {
  clampTooltipPosition,
  computeDonutSlices,
  createArcPath,
  getCoordinatesForAngle,
  splitSliceTitle,
} from "@/lib/tokenomicsMath";

interface TokenomicsChartProps {
  allocations: TokenAllocation[];
  activeAllocation: TokenAllocation | null;
  onSelectAllocation: (item: TokenAllocation) => void;
}

const TGE_SHARES: Record<string, string> = {
  "Community Rewards": "On-chain emissions",
  "Public Sale": "15% at TGE",
  "DEX Liquidity": "100% locked",
  "Team & Advisors": "0% at TGE",
  Ecosystem: "0% at TGE",
  Treasury: "0% at TGE",
};

export function TokenomicsChart({
  allocations,
  activeAllocation,
  onSelectAllocation,
}: TokenomicsChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const springX = useSpring(0, { stiffness: 360, damping: 28, mass: 0.4 });
  const springY = useSpring(0, { stiffness: 360, damping: 28, mass: 0.4 });

  const size = 440;
  const center = size / 2;
  const outerRadius = 196;
  const innerRadius = 120;
  const activeOuterRadius = 208;
  const activeInnerRadius = 115;

  const slices = computeDonutSlices(allocations).map((s) => ({
    ...s.item,
    index: s.index,
    startAngle: s.startAngle,
    endAngle: s.endAngle,
  }));

  const updateTooltipFromCoords = (clientX: number, clientY: number, immediate = false) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pos = clampTooltipPosition(
      clientX - rect.left,
      clientY - rect.top,
      rect.width,
      rect.height,
      256,
      186
    );
    if (immediate) {
      springX.jump(pos.x);
      springY.jump(pos.y);
    } else {
      springX.set(pos.x);
      springY.set(pos.y);
    }
  };

  const anchorTooltipToSlice = (slice: (typeof slices)[number]) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const midAngle = (slice.startAngle + slice.endAngle) / 2;
    const midCoord = getCoordinatesForAngle(center, midAngle, (outerRadius + innerRadius) / 2);
    const pos = clampTooltipPosition(
      (midCoord.x / size) * rect.width,
      (midCoord.y / size) * rect.height,
      rect.width,
      rect.height,
      256,
      186
    );
    springX.jump(pos.x);
    springY.jump(pos.y);
  };

  const hoveredSlice = hoveredIndex !== null ? slices[hoveredIndex] : null;
  const currentDisplay = hoveredSlice || activeAllocation || allocations[0];
  const nameLines = splitSliceTitle(currentDisplay.name);

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => {
        if (hoveredIndex !== null) {
          updateTooltipFromCoords(e.clientX, e.clientY);
        }
      }}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative w-full max-w-[380px] sm:max-w-[400px] aspect-square flex items-center justify-center select-none"
    >
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
        {slices.map((slice) => {
          const isActive =
            hoveredIndex === slice.index ||
            (hoveredIndex === null && activeAllocation?.name === slice.name);
          const oRad = isActive ? activeOuterRadius : outerRadius;
          const iRad = isActive ? activeInnerRadius : innerRadius;
          const path = createArcPath(center, slice.startAngle, slice.endAngle, iRad, oRad);

          return (
            <motion.path
              key={slice.name}
              d={path}
              fill={slice.color}
              tabIndex={0}
              role="button"
              aria-label={`${slice.name}: ${slice.percentage}% (${slice.tokens})`}
              initial={{ opacity: 0.9 }}
              animate={{
                opacity: hoveredIndex === null || isActive ? 1 : 0.45,
              }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="cursor-pointer stroke-[#FAF9FF] dark:stroke-[#0B0E17] stroke-[3px] focus:outline-none"
              onMouseEnter={(e) => {
                const isFirstHover = hoveredIndex === null;
                setHoveredIndex(slice.index);
                onSelectAllocation(slice);
                updateTooltipFromCoords(e.clientX, e.clientY, isFirstHover);
              }}
              onFocus={() => {
                setHoveredIndex(slice.index);
                onSelectAllocation(slice);
                anchorTooltipToSlice(slice);
              }}
              onBlur={() => setHoveredIndex(null)}
              onClick={() => onSelectAllocation(slice)}
            />
          );
        })}

        {/* Clean Inner Hole Matching Surface */}
        <circle
          cx={center}
          cy={center}
          r={innerRadius - 4}
          className="fill-[#FAF9FF] dark:fill-[#0B0E17] transition-colors duration-300 pointer-events-none"
        />

        <g className="pointer-events-none">
          <text
            x={center}
            y={center - 16}
            textAnchor="middle"
            className="fill-[#0F172A] dark:fill-white font-mono tabular-nums text-[42px] font-semibold tracking-tight"
          >
            {currentDisplay.percentage}%
          </text>

          {nameLines.length === 1 ? (
            <text
              x={center}
              y={center + 16}
              textAnchor="middle"
              className="fill-[#0F172A] dark:fill-slate-200 text-[15px] font-medium"
            >
              {nameLines[0]}
            </text>
          ) : (
            <>
              <text
                x={center}
                y={center + 12}
                textAnchor="middle"
                className="fill-[#0F172A] dark:fill-slate-200 text-[14px] font-medium"
              >
                {nameLines[0]}
              </text>
              <text
                x={center}
                y={center + 30}
                textAnchor="middle"
                className="fill-[#0F172A] dark:fill-slate-200 text-[14px] font-medium"
              >
                {nameLines[1]}
              </text>
            </>
          )}

          <text
            x={center}
            y={nameLines.length === 1 ? center + 40 : center + 52}
            textAnchor="middle"
            className="fill-[#64748B] dark:fill-slate-400 font-mono text-[11px]"
          >
            {(currentDisplay.percentage * 50_000_000).toLocaleString()} OKN
          </text>
        </g>
      </svg>

      {/* Custom Animated Floating Slice Tooltip */}
      <AnimatePresence>
        {hoveredSlice && (
          <motion.div
            key={hoveredSlice.name}
            style={{
              left: springX,
              top: springY,
            }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute z-30 w-[256px] p-4 rounded-xl border border-[#EAE7F4] dark:border-white/15 bg-white/96 dark:bg-[#111522]/96 backdrop-blur-md shadow-[0_18px_48px_rgba(15,23,42,0.12)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.65)] text-left"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-[#E8E8E8]/80 dark:border-white/10">
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: hoveredSlice.color }}
                />
                <span className="text-sm font-medium tracking-[-0.02em] text-[#0F172A] dark:text-white truncate">
                  {hoveredSlice.name}
                </span>
              </div>
              <span className="font-mono tabular-nums text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F4F0FF] dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 shrink-0">
                {hoveredSlice.percentage}%
              </span>
            </div>

            {/* Detailed Allocation Breakdown */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[#64748B] dark:text-slate-400">Allocation</span>
                <span className="font-mono tabular-nums font-medium text-[#0F172A] dark:text-white">
                  {hoveredSlice.tokens}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-[#64748B] dark:text-slate-400">TGE Release</span>
                <span className="font-mono tabular-nums font-medium text-[#0F172A] dark:text-slate-200">
                  {TGE_SHARES[hoveredSlice.name] ?? "Structured"}
                </span>
              </div>

              <div className="pt-1">
                <span className="block text-[11px] text-[#64748B] dark:text-slate-400 mb-0.5">
                  Unlock Schedule
                </span>
                <p className="text-[11.5px] leading-[1.4] text-[#334155] dark:text-slate-300">
                  {hoveredSlice.vesting}
                </p>
              </div>
            </div>

            {/* Visual Share Bar */}
            <div className="mt-3 w-full h-1 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${hoveredSlice.percentage}%` }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full"
                style={{ backgroundColor: hoveredSlice.color }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
