"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";
import {
  TelegramIcon,
  TwitterXIcon,
  DiscordIcon,
  YouTubeIcon,
  InstagramIcon,
  FacebookIcon,
  ThreadsIcon,
  BlueskyIcon,
  TikTokIcon,
} from "@/components/ui/SocialIcons";

const PIONEER_AVATARS = [
  { bg: "from-violet-600 to-indigo-700", accent: "#C4B5FD", shape: "visor" },
  { bg: "from-cyan-500 to-blue-700", accent: "#A5F3FC", shape: "hood" },
  { bg: "from-fuchsia-600 to-purple-800", accent: "#F5D0FE", shape: "crest" },
  { bg: "from-indigo-500 to-violet-800", accent: "#DDD6FE", shape: "orbit" },
  { bg: "from-slate-800 to-purple-900", accent: "#38BDF8", shape: "okn" },
  { bg: "from-amber-500 to-orange-700", accent: "#FDE68A", shape: "visor" },
  { bg: "from-emerald-500 to-teal-700", accent: "#99F6E4", shape: "hood" },
  { bg: "from-purple-600 to-pink-600", accent: "#FBCFE8", shape: "crest" },
];

export function Community() {
  const getSocialIcon = (name: string) => {
    switch (name) {
      case "Telegram":
        return <TelegramIcon className="w-4 h-4" />;
      case "X (Twitter)":
        return <TwitterXIcon className="w-4 h-4" />;
      case "Discord":
        return <DiscordIcon className="w-4 h-4" />;
      case "YouTube":
        return <YouTubeIcon className="w-4 h-4" />;
      case "Facebook":
        return <FacebookIcon className="w-4 h-4" />;
      case "Threads":
        return <ThreadsIcon className="w-4 h-4" />;
      case "Bluesky":
        return <BlueskyIcon className="w-4 h-4" />;
      case "TikTok":
        return <TikTokIcon className="w-4 h-4" />;
      case "Instagram":
      default:
        return <InstagramIcon className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="community"
      className="px-4 pb-20 lg:pb-28 bg-white dark:bg-[#06070B] transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="relative isolate min-h-[540px] sm:min-h-[580px] px-5 sm:px-8 py-12 sm:py-16 rounded-2xl overflow-hidden bg-[#080711] border border-purple-500/20 shadow-[0_28px_70px_rgba(15,23,42,0.16)] flex flex-col items-center justify-center text-center text-white">
          {/* Layer 1: Architectural 170px Grid Overlay ONLY */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none community-grid-pattern opacity-85"
          />

          {/* Layer 2: Non-Repeating Ambient Radial Glows */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 46% 52% at 10% 82%, rgba(124, 58, 237, 0.34), transparent 70%), radial-gradient(ellipse 44% 50% at 90% 84%, rgba(6, 182, 212, 0.24), transparent 68%), radial-gradient(ellipse 38% 40% at 80% 14%, rgba(139, 92, 246, 0.18), transparent 66%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center w-full">
            {/* Clean Unboxed Editorial Eyebrow */}
            <p className="text-xs font-mono font-medium uppercase tracking-[0.16em] text-purple-300 mb-4">
              Telegram Community · Binance Smart Chain
            </p>

            {/* Accurate 28K+ Focal Number */}
            <h2 className="text-6xl sm:text-[76px] font-bold leading-[1.0] tracking-[-0.045em] text-white mb-5 tabular-nums">
              28K+
            </h2>

            {/* Concise Subtitle */}
            <p className="max-w-[440px] text-sm sm:text-base leading-[1.48] tracking-[-0.02em] text-slate-200 mb-7 text-balance">
              A fast-growing Binance Smart Chain community of 28,000+ Telegram members, traders, and early ecosystem supporters.
            </p>

            {/* Overlapping Pioneer Avatar Cluster + +40 Badge */}
            <div className="flex items-center justify-center -space-x-2.5 mb-3">
              {PIONEER_AVATARS.map((av, idx) => (
                <div
                  key={idx}
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${av.bg} border-2 border-white/90 flex items-center justify-center shadow-sm overflow-hidden`}
                >
                  <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" aria-hidden="true">
                    <circle cx="18" cy="14" r="6" fill={av.accent} opacity="0.92" />
                    <path
                      d="M7 31C8.5 24.5 12.8 22 18 22C23.2 22 27.5 24.5 29 31"
                      fill={av.accent}
                      opacity="0.78"
                    />
                    {av.shape === "visor" && (
                      <rect x="12" y="11" width="12" height="4" rx="2" fill="#0F172A" />
                    )}
                  </svg>
                </div>
              ))}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0F172A] border-2 border-white/90 flex items-center justify-center text-xs font-semibold text-white">
                +40
              </div>
            </div>

            <span className="text-xs sm:text-sm text-slate-400 tracking-[-0.01em] mb-5">
              Active daily on @okntoken_bot &amp; @oknexus_eco
            </span>

            {/* Clean Social Directory Links */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
              {siteContent.community.socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  title={`${soc.name} (${soc.handle})`}
                  className="w-9 h-9 rounded-full border border-white/15 bg-white/[0.04] text-slate-300 hover:text-white hover:border-purple-400/60 hover:bg-purple-500/20 flex items-center justify-center transition-colors"
                >
                  {getSocialIcon(soc.name)}
                </a>
              ))}
            </div>

            {/* 3 Dark Stat Tiles */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-5 w-full max-w-[540px]">
              {siteContent.community.stats.map((st) => (
                <div
                  key={st.label}
                  className="px-3 py-3.5 sm:px-5 sm:py-4 rounded-xl border border-white/10 bg-[#121218]/90 text-center"
                >
                  <span className="block text-[11px] sm:text-sm text-slate-400 tracking-[-0.01em] mb-1 truncate">
                    {st.label}
                  </span>
                  <strong className="block text-xl sm:text-[30px] font-normal tabular-nums text-white tracking-[-0.04em]">
                    {st.value}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
