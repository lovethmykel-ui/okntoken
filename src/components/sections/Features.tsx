"use client";

import React from "react";
import Image from "next/image";
import { siteContent, FeatureItem } from "@/data/siteContent";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { CountdownTimer } from "@/components/ui/CountdownTimer";

function FeatureIllustration({ id }: { id: FeatureItem["id"] }) {
  switch (id) {
    case "feat-1":
      return (
        <svg viewBox="0 0 320 220" className="w-full h-full" fill="none" aria-hidden="true">
          <circle cx="160" cy="100" r="72" className="stroke-slate-200 dark:stroke-white/10" strokeDasharray="3 4" strokeWidth="1.2" />
          <circle cx="160" cy="100" r="46" className="stroke-purple-300/70 dark:stroke-purple-400/30" strokeDasharray="2 3" strokeWidth="1.2" />
          <path d="M160 28 V54 M94 64 L124 82 M226 64 L196 82 M94 132 L124 116 M226 132 L196 116 M160 146 V178" className="stroke-purple-400/70 dark:stroke-purple-400/50" strokeDasharray="3 3" strokeWidth="1.2" />

          {[80, 92, 104, 116].map((y) => (
            <g key={`hp-${y}`}>
              <line x1="126" y1={y} x2="134" y2={y} className="stroke-[#0F172A] dark:stroke-slate-300" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="186" y1={y} x2="194" y2={y} className="stroke-[#0F172A] dark:stroke-slate-300" strokeWidth="1.6" strokeLinecap="round" />
            </g>
          ))}
          {[142, 154, 166, 178].map((x) => (
            <g key={`vp-${x}`}>
              <line x1={x} y1="64" x2={x} y2="72" className="stroke-[#0F172A] dark:stroke-slate-300" strokeWidth="1.6" strokeLinecap="round" />
              <line x1={x} y1="128" x2={x} y2="136" className="stroke-[#0F172A] dark:stroke-slate-300" strokeWidth="1.6" strokeLinecap="round" />
            </g>
          ))}
          <rect x="134" y="72" width="52" height="56" rx="10" className="fill-[#F4F0FF] dark:fill-purple-950/60 stroke-[#0F172A] dark:stroke-purple-300" strokeWidth="1.6" />
          <rect x="142" y="80" width="36" height="40" rx="6" className="fill-purple-600 dark:fill-purple-500" />
          <text x="160" y="105" textAnchor="middle" className="fill-white text-[14px] font-bold tracking-tight">
            AI
          </text>
          <path d="M170 86 L172 90 L176 92 L172 94 L170 98 L168 94 L164 92 L168 90 Z" className="fill-cyan-300" />

          <path d="M160 12 L173 17 V25 C173 32 167 37 160 40 C153 37 147 32 147 25 V17 Z" className="fill-[#F4F0FF] dark:fill-purple-950/80 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.3" />
          <path d="M155.5 25.5 L158.5 28.5 L165 22" className="stroke-purple-600 dark:stroke-purple-300" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

          <g transform="translate(64, 42)">
            <rect x="0" y="14" width="6" height="10" rx="1.5" className="fill-purple-200 dark:fill-purple-500/30 stroke-[#0F172A] dark:stroke-slate-300" strokeWidth="1" />
            <rect x="9" y="9" width="6" height="15" rx="1.5" className="fill-purple-400 dark:fill-purple-400/60 stroke-[#0F172A] dark:stroke-slate-300" strokeWidth="1" />
            <rect x="18" y="4" width="6" height="20" rx="1.5" className="fill-purple-600 dark:fill-purple-400" />
            <path d="M1 10 L12 3 L23 0" className="stroke-cyan-500" strokeWidth="1.4" strokeLinecap="round" />
          </g>

          <g transform="translate(226, 40)">
            <rect x="2" y="11" width="20" height="16" rx="4" className="fill-[#F4F0FF] dark:fill-purple-950/80 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.3" />
            <path d="M7 11 V7.5 C7 4.8 9.2 3 12 3 C14.8 3 17 4.8 17 7.5 V11" className="stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.3" />
            <circle cx="12" cy="19" r="2" className="fill-purple-600 dark:fill-purple-300" />
          </g>

          <g transform="translate(62, 122)">
            <path d="M4 18 A14 14 0 0 1 32 18" className="stroke-purple-500" strokeWidth="3" strokeLinecap="round" />
            <line x1="18" y1="18" x2="25" y2="10" className="stroke-[#0F172A] dark:stroke-white" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="18" cy="18" r="2.2" className="fill-[#0F172A] dark:fill-white" />
          </g>

          <g transform="translate(226, 118)">
            <polygon points="14,2 25,8 14,14 3,8" className="fill-purple-200 dark:fill-purple-500/40 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.2" />
            <polygon points="3,8 14,14 14,26 3,20" className="fill-purple-500 dark:fill-purple-600 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.2" />
            <polygon points="25,8 25,20 14,26 14,14" className="fill-[#F4F0FF] dark:fill-purple-950/80 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.2" />
          </g>

          <line x1="76" y1="188" x2="244" y2="188" className="stroke-purple-400/70" strokeDasharray="3 3" strokeWidth="1.3" />
          {[88, 124, 160, 196, 232].map((cx) => (
            <g key={`blk-${cx}`} transform={`translate(${cx - 9}, 179)`}>
              <rect width="18" height="18" rx="4" className="fill-white dark:fill-[#0B0E17] stroke-[#0F172A] dark:stroke-slate-300" strokeWidth="1.2" />
              <rect x="5" y="5" width="8" height="8" rx="1.5" className="fill-purple-600 dark:fill-purple-400" />
            </g>
          ))}
        </svg>
      );

    case "feat-2":
      return (
        <svg viewBox="0 0 320 220" className="w-full h-full" fill="none" aria-hidden="true">
          <g transform="translate(160, 108)">
            <path d="M-74 16 A76 76 0 0 1 -68 -34 L-40 -19 A45 45 0 0 0 -44 10 Z" className="fill-[#F4F0FF] dark:fill-purple-500/15 stroke-purple-300 dark:stroke-purple-500/40" strokeWidth="1.2" />
            <path d="M-63 -42 A76 76 0 0 1 -14 -75 L-8 -44 A45 45 0 0 0 -37 -25 Z" className="fill-purple-100 dark:fill-purple-500/25 stroke-purple-400/70 dark:stroke-purple-400/40" strokeWidth="1.2" />
            <path d="M14 -75 A76 76 0 0 1 63 -42 L37 -25 A45 45 0 0 0 8 -44 Z" className="fill-purple-300 dark:fill-purple-500/50 stroke-purple-500/70" strokeWidth="1.2" />
            <path d="M68 -34 A76 76 0 0 1 74 16 L44 10 A45 45 0 0 0 40 -19 Z" className="fill-purple-600 dark:fill-purple-400 stroke-[#0F172A] dark:stroke-white" strokeWidth="1.4" />

            <path d="M-8 -4 L44 18 L-3 8 Z" className="fill-[#0F172A] dark:fill-white" />
            <circle cx="0" cy="2" r="9" className="fill-[#0F172A] dark:fill-white" />
            <circle cx="0" cy="2" r="3.5" className="fill-purple-400" />
          </g>

          <g transform="translate(86, 156)">
            <line x1="20" y1="6" x2="128" y2="6" className="stroke-purple-400/50" strokeDasharray="3 3" strokeWidth="1.2" />
            <line x1="42" y1="12" x2="124" y2="12" className="stroke-[#0F172A] dark:stroke-white" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M114 4 L126 12 L114 20" className="stroke-[#0F172A] dark:stroke-white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="46" cy="12" r="8" className="fill-purple-600 dark:fill-purple-400 stroke-[#0F172A] dark:stroke-white" strokeWidth="1.5" />

            <line x1="22" y1="34" x2="104" y2="34" className="stroke-[#0F172A] dark:stroke-white" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M32 26 L20 34 L32 42" className="stroke-[#0F172A] dark:stroke-white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="100" cy="34" r="8" className="fill-cyan-500 stroke-[#0F172A] dark:stroke-white" strokeWidth="1.5" />
          </g>
        </svg>
      );

    case "feat-3":
      return (
        <svg viewBox="0 0 320 220" className="w-full h-full" fill="none" aria-hidden="true">
          <circle cx="160" cy="120" r="64" className="stroke-slate-300 dark:stroke-white/20" strokeWidth="1.2" />
          <line x1="160" y1="54" x2="160" y2="76" className="stroke-purple-500" strokeDasharray="3 3" strokeWidth="1.5" />
          <line x1="104" y1="152" x2="128" y2="138" className="stroke-purple-500" strokeDasharray="3 3" strokeWidth="1.5" />
          <line x1="216" y1="152" x2="192" y2="138" className="stroke-cyan-500" strokeDasharray="3 3" strokeWidth="1.5" />

          {[104, 114, 124, 134].map((y) => (
            <g key={`bh-${y}`}>
              <line x1="118" y1={y} x2="128" y2={y} className="stroke-[#0F172A] dark:stroke-slate-300" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="192" y1={y} x2="202" y2={y} className="stroke-[#0F172A] dark:stroke-slate-300" strokeWidth="1.6" strokeLinecap="round" />
            </g>
          ))}
          {[142, 154, 166, 178].map((x) => (
            <g key={`bv-${x}`}>
              <line x1={x} y1="78" x2={x} y2="88" className="stroke-[#0F172A] dark:stroke-slate-300" strokeWidth="1.6" strokeLinecap="round" />
              <line x1={x} y1="152" x2={x} y2="162" className="stroke-[#0F172A] dark:stroke-slate-300" strokeWidth="1.6" strokeLinecap="round" />
            </g>
          ))}
          <rect x="128" y="88" width="64" height="64" rx="14" className="fill-[#F4F0FF] dark:fill-purple-950/60 stroke-[#0F172A] dark:stroke-purple-300" strokeWidth="1.6" />
          <rect x="142" y="102" width="36" height="36" rx="8" className="fill-[#1E1B4B] dark:fill-purple-600" />
          <path d="M160 110 L163 117 L170 120 L163 123 L160 130 L157 123 L150 120 L157 117 Z" className="fill-purple-300 dark:fill-cyan-200" />

          <rect x="140" y="20" width="40" height="36" rx="9" className="fill-[#F4F0FF] dark:fill-[#111522] stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.4" />
          <text x="160" y="43" textAnchor="middle" className="fill-[#0F172A] dark:fill-white text-[13px] font-mono font-semibold">
            &lt;/&gt;
          </text>

          <g transform="translate(76, 144)">
            <rect width="36" height="40" rx="8" className="fill-[#F4F0FF] dark:fill-[#111522] stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.4" />
            <line x1="9" y1="13" x2="27" y2="13" className="stroke-purple-600 dark:stroke-purple-300" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="9" y1="20" x2="27" y2="20" className="stroke-[#0F172A] dark:stroke-slate-300" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="9" y1="27" x2="20" y2="27" className="stroke-[#0F172A] dark:stroke-slate-300" strokeWidth="1.6" strokeLinecap="round" />
          </g>

          <g transform="translate(208, 144)">
            <rect width="36" height="40" rx="8" className="fill-[#F4F0FF] dark:fill-[#111522] stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.4" />
            <polygon points="18,9 27,14 18,19 9,14" className="fill-purple-200 dark:fill-purple-400/50 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.1" />
            <polygon points="9,14 18,19 18,30 9,25" className="fill-purple-500 dark:fill-purple-600 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.1" />
            <polygon points="27,14 27,25 18,30 18,19" className="fill-cyan-200 dark:fill-cyan-500/40 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.1" />
          </g>
        </svg>
      );

    case "feat-4":
      return (
        <svg viewBox="0 0 320 220" className="w-full h-full" fill="none" aria-hidden="true">
          <line x1="126" y1="150" x2="220" y2="90" className="stroke-purple-400" strokeDasharray="3 3" strokeWidth="1.4" />

          <g transform="translate(64, 114)">
            <polygon points="34,0 68,18 34,36 0,18" className="fill-[#EDE9FE] dark:fill-purple-400/40 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.2" />
            <polygon points="0,18 34,36 34,74 0,56" className="fill-purple-500 dark:fill-purple-600 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.2" />
            <polygon points="68,18 68,56 34,74 34,36" className="fill-purple-300 dark:fill-purple-800 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.2" />
          </g>

          <g transform="translate(126, 76)">
            <polygon points="34,0 68,18 34,36 0,18" className="fill-[#EDE9FE] dark:fill-purple-400/40 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.2" />
            <polygon points="0,18 34,36 34,74 0,56" className="fill-purple-600 dark:fill-purple-500 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.2" />
            <polygon points="68,18 68,56 34,74 34,36" className="fill-indigo-400 dark:fill-indigo-700 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.2" />
          </g>

          <g transform="translate(188, 38)">
            <polygon points="34,0 68,18 34,36 0,18" className="fill-cyan-100 dark:fill-cyan-400/35 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.2" />
            <polygon points="0,18 34,36 34,74 0,56" className="fill-purple-500 dark:fill-purple-600 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.2" />
            <polygon points="68,18 68,56 34,74 34,36" className="fill-purple-300 dark:fill-purple-800 stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.2" />
          </g>

          <g transform="translate(154, 86)">
            <circle cx="26" cy="26" r="24" className="fill-white/40 dark:fill-white/10 stroke-[#0F172A] dark:stroke-white" strokeWidth="2.4" />
            <circle cx="26" cy="26" r="19" className="stroke-purple-300 dark:stroke-cyan-300/60" strokeWidth="1.2" />
            <path d="M44 44 L66 66" className="stroke-[#0F172A] dark:stroke-white" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M48 48 L64 64" className="stroke-purple-500" strokeWidth="3" strokeLinecap="round" />
          </g>

          <g transform="translate(116, 46)">
            <circle cx="14" cy="14" r="14" className="fill-[#F9FAF9] dark:fill-[#111522] stroke-[#E2E8F0] dark:stroke-white/20" strokeWidth="1.2" />
            <rect x="9" y="8" width="10" height="12" rx="1.5" className="stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.2" />
            <line x1="11.5" y1="12" x2="16.5" y2="12" className="stroke-purple-600" strokeWidth="1.3" />
          </g>
          <g transform="translate(248, 122)">
            <circle cx="14" cy="14" r="14" className="fill-[#F9FAF9] dark:fill-[#111522] stroke-[#E2E8F0] dark:stroke-white/20" strokeWidth="1.2" />
            <path d="M9 12 H19 M16 9 L19 12 L16 15 M19 16 H9 M12 13 L9 16 L12 19" className="stroke-[#0F172A] dark:stroke-slate-200" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );

    case "feat-5":
      return (
        <svg viewBox="0 0 320 220" className="w-full h-full" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="oknGrowthFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          <path
            d="M28 190 C56 170, 68 128, 96 128 C124 128, 134 154, 162 154 C194 154, 214 110, 240 82 C258 62, 272 42, 286 24 V190 Z"
            fill="url(#oknGrowthFill)"
          />
          <path
            d="M28 190 C56 170, 68 128, 96 128 C124 128, 134 154, 162 154 C194 154, 214 110, 240 82 C258 62, 272 42, 286 24"
            className="stroke-[#0F172A] dark:stroke-purple-300"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <g transform="translate(88, 70)">
            <circle cx="2" cy="3" r="22" className="fill-[#0F172A]/25 dark:fill-black/50" />
            <circle cx="0" cy="0" r="22" className="fill-purple-500 stroke-[#0F172A] dark:stroke-white" strokeWidth="1.6" />
            <circle cx="0" cy="0" r="16" className="stroke-white/40" strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" className="fill-white text-[10px] font-bold tracking-tight">
              OKN
            </text>
          </g>

          <g transform="translate(184, 108)">
            <circle cx="4" cy="6" r="56" className="fill-[#0F172A] dark:fill-purple-950" />
            <circle cx="0" cy="0" r="56" className="fill-purple-600 stroke-[#0F172A] dark:stroke-purple-300" strokeWidth="2" />
            <circle cx="0" cy="0" r="46" className="fill-[#F4F0FF] dark:fill-[#1E1B4B] stroke-purple-400" strokeWidth="1.5" />
            <text x="0" y="10" textAnchor="middle" className="fill-[#0F172A] dark:fill-white text-[26px] font-extrabold tracking-tighter">
              OKN
            </text>
          </g>
        </svg>
      );

    case "feat-6":
    default:
      return (
        <svg viewBox="0 0 320 220" className="w-full h-full" fill="none" aria-hidden="true">
          <line x1="160" y1="36" x2="160" y2="86" className="stroke-slate-400 dark:stroke-slate-500" strokeDasharray="4 4" strokeWidth="1.4" />
          <line x1="82" y1="86" x2="132" y2="104" className="stroke-slate-400 dark:stroke-slate-500" strokeDasharray="4 4" strokeWidth="1.4" />
          <line x1="238" y1="86" x2="188" y2="104" className="stroke-slate-400 dark:stroke-slate-500" strokeDasharray="4 4" strokeWidth="1.4" />
          <line x1="94" y1="168" x2="140" y2="128" className="stroke-slate-400 dark:stroke-slate-500" strokeDasharray="4 4" strokeWidth="1.4" />
          <line x1="226" y1="168" x2="180" y2="128" className="stroke-slate-400 dark:stroke-slate-500" strokeDasharray="4 4" strokeWidth="1.4" />

          <ellipse cx="160" cy="116" rx="44" ry="26" className="fill-purple-600 dark:fill-purple-500 stroke-[#0F172A] dark:stroke-white" strokeWidth="1.5" />
          <ellipse cx="160" cy="108" rx="44" ry="24" className="fill-white dark:fill-[#111522] stroke-[#0F172A] dark:stroke-purple-300" strokeWidth="1.5" />
          <ellipse cx="160" cy="108" rx="34" ry="17" className="stroke-purple-500" strokeWidth="4" strokeDasharray="48 16" />
          <text x="160" y="112" textAnchor="middle" className="fill-[#0F172A] dark:fill-white text-[13px] font-bold tracking-tight">
            OKN
          </text>

          <g transform="translate(160, 32)">
            <circle r="15" className="fill-[#F4F0FF] dark:fill-[#111522] stroke-purple-400/70" strokeWidth="1.3" />
            <polygon points="0,-8 6,0 0,3 -6,0" className="fill-[#0F172A] dark:fill-white" />
            <polygon points="0,9 6,2 0,5 -6,2" className="fill-purple-600 dark:fill-purple-300" />
          </g>

          <g transform="translate(76, 84)">
            <circle r="15" className="fill-[#F4F0FF] dark:fill-[#111522] stroke-purple-400/70" strokeWidth="1.3" />
            <text x="0" y="5" textAnchor="middle" className="fill-[#0F172A] dark:fill-white text-[13px] font-bold">
              ₮
            </text>
          </g>

          <g transform="translate(244, 84)">
            <circle r="15" className="fill-[#F4F0FF] dark:fill-[#111522] stroke-purple-400/70" strokeWidth="1.3" />
            <polygon points="0,-7 4,-3 0,1 -4,-3" className="fill-purple-600 dark:fill-purple-300" />
            <polygon points="-6,0 -3,-3 0,0 -3,3" className="fill-[#0F172A] dark:fill-white" />
            <polygon points="6,0 3,-3 0,0 3,3" className="fill-[#0F172A] dark:fill-white" />
            <polygon points="0,7 4,3 0,-1 -4,3" className="fill-purple-600 dark:fill-purple-300" />
          </g>

          <g transform="translate(94, 170)">
            <circle r="15" className="fill-[#F4F0FF] dark:fill-[#111522] stroke-cyan-400/70" strokeWidth="1.3" />
            <path d="M-5 -5 L5 5 M5 -5 L-5 5" className="stroke-[#0F172A] dark:stroke-white" strokeWidth="2" strokeLinecap="round" />
          </g>

          <g transform="translate(226, 170)">
            <circle r="15" className="fill-[#F4F0FF] dark:fill-[#111522] stroke-cyan-400/70" strokeWidth="1.3" />
            <rect x="-7" y="-6" width="14" height="2.6" rx="1.3" className="fill-[#0F172A] dark:fill-white" />
            <rect x="-7" y="-1.3" width="14" height="2.6" rx="1.3" className="fill-purple-600 dark:fill-purple-300" />
            <rect x="-7" y="3.4" width="14" height="2.6" rx="1.3" className="fill-[#0F172A] dark:fill-white" />
          </g>
        </svg>
      );
  }
}

export function Features() {
  return (
    <>
      {/* SECTION: #using — Elevated Light-Mode Isometric Cards */}
      <section
        id="about"
        className="pt-4 pb-20 lg:pb-28 bg-white dark:bg-[#06070B] text-[#0F172A] dark:text-white tracking-[-0.045em] transition-colors duration-300 scroll-mt-24"
      >
        <div className="max-w-[1274px] mx-auto px-4">
          <div className="max-w-[740px] mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-normal leading-[1.04] tracking-[-0.045em] text-[#0F172A] dark:text-white mb-6 sm:mb-8 text-balance">
              A smarter ecosystem for{" "}
              <span className="text-[#94A3B8] dark:text-slate-500">
                the next Web3 cycle
              </span>
            </h2>
            <p className="max-w-[460px] text-sm sm:text-base leading-[1.45] tracking-[-0.02em] text-[#475569] dark:text-slate-400 font-normal">
              {siteContent.about.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-[20px]">
            {siteContent.about.features.map((feat) => (
              <div
                key={feat.id}
                className="min-h-[368px] sm:min-h-[390px] p-6 sm:px-6 sm:py-8 border border-[#EAE7F4] dark:border-white/10 rounded-2xl bg-white dark:bg-[#0B0E17] shadow-[0_10px_32px_rgba(15,23,42,0.04),0_2px_8px_rgba(124,58,237,0.03)] hover:shadow-[0_18px_46px_rgba(124,58,237,0.09)] hover:border-purple-300 dark:hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between gap-6 group"
              >
                <div className="w-full h-[215px] sm:h-[228px] rounded-xl bg-gradient-to-b from-[#FAF9FF] to-white dark:from-white/[0.02] dark:to-transparent flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
                  <FeatureIllustration id={feat.id} />
                </div>

                <div className="flex flex-col gap-2.5">
                  <h3 className="text-lg font-medium leading-[1.2] tracking-[-0.03em] text-[#0F172A] dark:text-white">
                    {feat.title}
                  </h3>
                  <p className="text-sm leading-[1.45] tracking-[-0.02em] text-[#64748B] dark:text-slate-400">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: #revenue — High-Contrast Stage Panel with Accurate BSC & AssureDeFi Verification */}
      <section id="stage-window" className="px-4 pb-20 lg:pb-28 bg-white dark:bg-[#06070B] transition-colors duration-300 scroll-mt-24">
        <div className="max-w-[1240px] mx-auto">
          <div className="relative isolate min-h-[480px] sm:min-h-[520px] px-6 sm:px-16 py-14 sm:py-16 rounded-2xl overflow-hidden bg-[#080711] border border-purple-500/20 shadow-[0_28px_70px_rgba(15,23,42,0.16)] flex flex-col items-center justify-center text-center">
            {/* Dedicated Ambient Bottom Arc Glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 68% 54% at 50% 106%, rgba(124, 58, 237, 0.44) 0%, rgba(79, 70, 229, 0.22) 38%, rgba(6, 182, 212, 0.12) 62%, transparent 80%)",
              }}
            />

            <svg
              viewBox="0 0 1200 500"
              className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <ellipse cx="600" cy="540" rx="540" ry="270" stroke="rgba(167,139,250,0.45)" fill="none" />
              <ellipse cx="600" cy="540" rx="390" ry="195" stroke="rgba(56,189,248,0.35)" fill="none" />
            </svg>

            {/* Symmetrical Cropped 3D OKN Coins at Bottom Corners */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-10 -bottom-10 sm:-left-8 sm:-bottom-12 w-36 h-36 sm:w-52 sm:h-52 opacity-90"
            >
              <Image
                src="/brand/OKN_coin_transparent.webp"
                alt=""
                width={208}
                height={208}
                className="object-contain -rotate-12"
              />
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -bottom-10 sm:-right-8 sm:-bottom-12 w-36 h-36 sm:w-52 sm:h-52 opacity-90"
            >
              <Image
                src="/brand/OKN_coin_transparent.webp"
                alt=""
                width={208}
                height={208}
                className="object-contain rotate-[24deg] scale-x-[-1]"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-[720px]">
              <h2 className="text-4xl sm:text-5xl lg:text-[66px] font-medium leading-[1.05] tracking-[-0.045em] text-white mb-4 text-balance">
                <span className="text-purple-400">The $0.05</span>{" "}
                <span className="block sm:inline">Window Won&apos;t Last</span>
              </h2>

              <p className="max-w-[540px] text-sm sm:text-base text-slate-300 leading-[1.45] tracking-[-0.02em] mb-7">
                {siteContent.about.stageCard.subhead} Next stage steps to{" "}
                <span className="text-white font-medium">$0.08</span> with confirmed{" "}
                <span className="text-cyan-300 font-medium">$0.30</span> TGE listing.
              </p>

              {/* Price Stage Ladder from okntoken.com */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-7 text-left">
                {siteContent.about.stageCard.stageLadder.map((step, i) => (
                  <div
                    key={step.label}
                    className={`p-4 rounded-xl border ${
                      i === 0
                        ? "bg-purple-500/15 border-purple-400/40"
                        : "bg-white/[0.04] border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-medium text-slate-300">{step.label}</span>
                      <span
                        className={`text-[11px] font-mono uppercase tracking-wider ${
                          i === 0 ? "text-purple-300" : "text-slate-400"
                        }`}
                      >
                        {step.status}
                      </span>
                    </div>
                    <strong className="font-mono text-2xl font-semibold text-white tabular-nums">
                      {step.price}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="w-full max-w-[360px] mb-7">
                <CountdownTimer theme="dark" />
              </div>

              <a
                href="#presale"
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white text-[#0F172A] text-[15px] font-medium tracking-[-0.03em] hover:bg-purple-50 transition-colors"
              >
                <span>Join Presale</span>
                <span className="w-9 h-9 rounded-full bg-[#0F172A] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>

              {/* Accurate Verification Badges */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-7 sm:gap-12">
                <a
                  href="https://assuredefi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-left hover:opacity-85 transition-opacity"
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                    <Image
                      src="/brand/assure_defi_badge.webp"
                      alt="AssureDeFi KYC"
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <strong className="text-xs sm:text-sm font-medium uppercase tracking-tight text-white">
                      ASSUREDEFI
                    </strong>
                    <span className="text-[11px] text-slate-400">
                      Project KYC Verified
                    </span>
                  </div>
                </a>

                <a
                  href="https://bscscan.com/token/0xBF6B0312f52fa8390Ec9393A9375BF05c8E40377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-left hover:opacity-85 transition-opacity"
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#0F172A]" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <strong className="text-xs sm:text-sm font-medium uppercase tracking-tight text-white">
                      BSCSCAN
                    </strong>
                    <span className="text-[11px] text-slate-400">
                      BEP-20 Contract Verified
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                    <Image
                      src="/brand/bnb_chain_logo.webp"
                      alt="Binance Smart Chain"
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <strong className="text-xs sm:text-sm font-medium uppercase tracking-tight text-white">
                      BINANCE SMART CHAIN
                    </strong>
                    <span className="text-[11px] text-slate-400">
                      OpenZeppelin BEP-20
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-[480px] text-[11px] leading-[1.35] text-slate-400">
                Powered by Binance Smart Chain with AssureDeFi KYC compliance &amp; Chainlink oracle pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
