"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { TokenomicsChart } from "@/components/ui/TokenomicsChart";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent, TokenAllocation } from "@/data/siteContent";
import { DEFAULT_TGE_TARGET_ISO } from "@/lib/countdown";
import { ArrowRight, ShieldCheck, Lock, TrendingUp } from "lucide-react";

export default function TokenomicsPage() {
  const allocations = siteContent.tokenomics.allocations;
  const [activeItem, setActiveItem] = useState<TokenAllocation | null>(allocations[0]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#06070B] text-[#0F172A] dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 overflow-hidden bg-gradient-to-b from-white via-[#FAF9FF] to-white dark:from-[#06070B] dark:via-[#080912] dark:to-[#06070B] border-b border-[#ECEAEF] dark:border-white/10 transition-colors duration-300">
          <div className="absolute inset-0 pointer-events-none hero-grid-pattern opacity-65" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 46% 70% at 14% 20%, rgba(124, 58, 237, 0.11), transparent 70%), radial-gradient(ellipse 46% 70% at 86% 20%, rgba(6, 182, 212, 0.11), transparent 70%)",
            }}
          />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <p className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-[0.14em] text-purple-700 dark:text-purple-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" aria-hidden="true" />
              Binance Smart Chain · Economic Architecture
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-medium text-[#0F172A] dark:text-white tracking-[-0.045em] leading-[1.02] mb-4 text-balance">
              Transparent Supply &amp;{" "}
              <span className="gradient-text-brand">Tokenomics</span>
            </h1>

            <p className="text-sm sm:text-base text-[#475569] dark:text-slate-300 max-w-2xl mx-auto leading-[1.5] mb-8 text-balance">
              A verified economic design on Binance Smart Chain featuring a capped 5,000,000,000 supply, automated on-chain liquidity locks, and multi-year vesting.
            </p>

            {/* Reusable TGE Urgency Countdown */}
            <CountdownTimer
              theme="banner"
              targetDate={DEFAULT_TGE_TARGET_ISO}
              label="Countdown to OKN Token Generation Event (TGE)"
              sublabel="Lock Stage 1 entry at $0.05 before the scheduled $0.30 TGE listing · 15% Public Sale unlock at TGE"
            />

            <div className="mt-6 flex items-center justify-center">
              <Link
                href="/#presale"
                className="group inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] text-sm font-medium tracking-[-0.02em] shadow-[0_8px_22px_rgba(15,23,42,0.14)] hover:bg-purple-700 dark:hover:bg-purple-100 transition-colors"
              >
                <span>Join Presale Before TGE</span>
                <span className="w-7 h-7 rounded-full bg-white dark:bg-[#0F172A] text-[#0F172A] dark:text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3 Summary Metrics */}
        <section className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl glass-light dark:glass-dark text-center shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Max Total Supply
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-black text-purple-700 dark:text-purple-300">
                5,000,000,000
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                Fixed supply on BSC
              </span>
            </div>

            <div className="p-6 rounded-3xl glass-light dark:glass-dark text-center shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Presale Entry Price
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                $0.05
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                Confirmed Stage 1 Entry
              </span>
            </div>

            <div className="p-6 rounded-3xl glass-light dark:glass-dark text-center shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                TGE Listing Target
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400">
                $0.30
              </span>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold block mt-1">
                +500% Base Delta
              </span>
            </div>
          </div>
        </section>

        {/* Interactive Donut Chart & Allocation Breakdown */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Chart Column */}
            <div className="lg:col-span-6 flex justify-center">
              <Reveal direction="up">
                <TokenomicsChart
                  allocations={allocations}
                  activeAllocation={activeItem}
                  onSelectAllocation={setActiveItem}
                />
              </Reveal>
            </div>

            {/* List Column */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              <Reveal direction="up" delay={0.1}>
                <div className="space-y-3">
                  {allocations.map((item) => {
                    const isSelected = activeItem?.name === item.name;

                    return (
                      <button
                        key={item.name}
                        onClick={() => setActiveItem(item)}
                        onMouseEnter={() => setActiveItem(item)}
                        className={`w-full p-4 rounded-2xl text-left border transition-all duration-200 ${
                          isSelected
                            ? "glass-light dark:glass-dark border-purple-400 dark:border-purple-400 shadow-md -translate-y-0.5"
                            : "glass-light-subtle hover:border-purple-200 dark:hover:border-white/10"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2.5">
                            <span
                              className="w-3 h-3 rounded-full shrink-0"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                              {item.name}
                            </span>
                          </div>
                          <span className="font-mono text-sm font-black text-purple-700 dark:text-purple-300">
                            {item.percentage}%
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-5">
                          {item.vesting}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* 3 Pillars */}
        <section className="py-12 bg-white dark:bg-[#07080D] border-y border-slate-200/80 dark:border-white/10 transition-colors duration-500">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  AssureDeFi KYC &amp; BSC Verified
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Verified open-source Binance Smart Chain smart contracts with AssureDeFi KYC verification, automated liquidity lock enforcement, and no hidden minting backdoors.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                <Lock className="w-6 h-6 text-cyan-600 dark:text-cyan-400 mb-3" />
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  Disciplined Lockups
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Team, advisory, and presale allocations adhere to strict multi-month linear schedules to preserve long-term health.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  Guaranteed DEX Liquidity
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  100% of the DEX Liquidity allocation is permanently locked to support initial trading depth at launch.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
