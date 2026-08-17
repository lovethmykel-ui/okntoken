"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TokenomicsChart } from "@/components/ui/TokenomicsChart";
import { Reveal, StaggerContainer } from "@/components/ui/Reveal";
import { siteContent, TokenAllocation } from "@/data/siteContent";
import { Coins, CheckCircle2, Lock, ShieldCheck, TrendingUp } from "lucide-react";

export function Tokenomics() {
  const [activeAllocation, setActiveAllocation] =
    useState<TokenAllocation | null>(siteContent.tokenomics.allocations[0]);

  return (
    <section
      id="tokenomics"
      className="py-24 bg-gradient-to-b from-[#EFF3FD] via-[#F8F9FE] to-[#EFF3FD] dark:from-[#06070B] dark:via-[#0A0D18] dark:to-[#06070B] relative overflow-hidden scroll-mt-24 transition-colors duration-500"
    >
      {/* Background Graphic Accents for Glass Refraction */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-purple-600/20 dark:bg-purple-600/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-cyan-500/20 dark:bg-cyan-500/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="up">
          <SectionHeading
            eyebrow={siteContent.tokenomics.eyebrow}
            title={siteContent.tokenomics.headline}
            description={siteContent.tokenomics.description}
            centered
            className="mb-14"
          />
        </Reveal>

        {/* 3 Metric Summary Banner with ReactBits Spotlight Refraction */}
        <Reveal direction="up" delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <SpotlightCard
              spotlightColor="rgba(124, 58, 237, 0.25)"
              className="p-6 text-center shadow-xl hover:-translate-y-1 transition-transform"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Total Supply
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-black text-purple-700 dark:text-purple-300">
                5,000,000,000
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1 font-medium">
                $OKN on BNB Smart Chain
              </span>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(6, 182, 212, 0.25)"
              className="p-6 text-center shadow-xl hover:-translate-y-1 transition-transform"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Claim Fee
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400">
                $3 in BNB
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1 font-medium">
                Chainlink Oracle Verified
              </span>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(16, 185, 129, 0.25)"
              className="p-6 text-center shadow-xl hover:-translate-y-1 transition-transform"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Community Pool
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                60%
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1 font-medium">
                Rewards + Public Sale
              </span>
            </SpotlightCard>
          </div>
        </Reveal>

        {/* Dynamic Interactive SVG Chart & Data Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Chart Display */}
          <div className="lg:col-span-6 flex justify-center">
            <Reveal direction="up" delay={0.15}>
              <TokenomicsChart
                allocations={siteContent.tokenomics.allocations}
                activeAllocation={activeAllocation}
                onSelectAllocation={setActiveAllocation}
              />
            </Reveal>
          </div>

          {/* Allocation Breakdown Cards */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <Reveal direction="up" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {siteContent.tokenomics.allocations.map((item) => {
                  const isSelected = activeAllocation?.name === item.name;

                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveAllocation(item)}
                      onMouseEnter={() => setActiveAllocation(item)}
                      className={`p-4 rounded-2xl text-left border transition-all duration-300 ${
                        isSelected
                          ? "glass-light dark:glass-dark border-purple-400 dark:border-purple-400 shadow-xl shadow-purple-500/15 -translate-y-1"
                          : "glass-light-subtle hover:border-purple-300 dark:hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-3 h-3 rounded-full shrink-0 shadow-xs"
                            style={{ backgroundColor: item.color }}
                          />
                          <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                            {item.name}
                          </h4>
                        </div>
                        <span className="font-mono text-sm font-black text-purple-700 dark:text-purple-300">
                          {item.percentage}%
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2 line-clamp-2">
                        {item.vesting}
                      </p>
                      <div className="text-[10px] font-mono text-slate-400 dark:text-slate-400 border-t border-slate-200/50 dark:border-white/10 pt-1.5 font-medium">
                        Tokens: {(item.percentage * 50_000_000).toLocaleString()} OKN
                      </div>
                    </button>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3 Core Trust Pillars at the Bottom of Tokenomics */}
        <Reveal direction="up" delay={0.25}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-200/80 dark:border-white/10">
            <div className="flex items-start gap-4 p-5 rounded-2xl glass-light dark:glass-dark shadow-md">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white mb-1">
                  CertiK &amp; SolidProof Verified
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Smart contract verified for security, zero hidden mint functions, and automated on-chain liquidity locks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl glass-light dark:glass-dark shadow-md">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white mb-1">
                  6-Month Transfer Lock
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Presale tokens follow a disciplined lock period preventing post-TGE liquidity instability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl glass-light dark:glass-dark shadow-md">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white mb-1">
                  Tier-1 Market Making
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  DEX &amp; CEX liquidity provision reserved to maintain order book depth.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
