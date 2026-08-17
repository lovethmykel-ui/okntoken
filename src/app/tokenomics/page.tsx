"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { TokenomicsChart } from "@/components/ui/TokenomicsChart";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent, TokenAllocation } from "@/data/siteContent";
import { Sparkles, Coins, ShieldCheck, Lock, CheckCircle2, TrendingUp } from "lucide-react";

export default function TokenomicsPage() {
  const allocations: TokenAllocation[] = [
    {
      name: "Community Rewards",
      percentage: 35,
      color: "#7C3AED", // Vibrant Purple
      vesting: "Daily mission claims, leaderboard prizes, and referral tier distributions.",
    },
    {
      name: "Public Sale",
      percentage: 25,
      color: "#6366F1", // Indigo
      vesting: "Staged entry rounds with fixed-rate BNB pricing and 6-month transfer lock.",
    },
    {
      name: "DEX Liquidity",
      percentage: 15,
      color: "#06B6D4", // Cyan
      vesting: "100% committed to liquidity pools upon initial DEX listing, locked.",
    },
    {
      name: "Team & Advisors",
      percentage: 12,
      color: "#EC4899", // Magenta/Pink
      vesting: "6-month initial lock with subsequent 18-month linear quarterly release.",
    },
    {
      name: "Ecosystem & Grants",
      percentage: 8,
      color: "#10B981", // Emerald
      vesting: "Dedicated to builder grants, cross-chain integration, and AI infrastructure.",
    },
    {
      name: "Treasury",
      percentage: 5,
      color: "#F59E0B", // Amber
      vesting: "Multi-sig controlled reserve for ongoing audits, security, and market making.",
    },
  ];

  const [activeItem, setActiveItem] = useState<TokenAllocation | null>(allocations[0]);

  return (
    <div className="min-h-screen bg-[#F8F9FE] dark:bg-[#050506] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden bg-gradient-to-b from-purple-50/50 via-white to-[#F8F9FE] dark:from-purple-950/20 dark:via-[#090B12] dark:to-[#050506] transition-colors duration-300">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-200/80 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Economic Architecture</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
                One Fixed Supply.{" "}
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Zero Surprises.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                5,000,000,000 $OKN total fixed supply on BNB Smart Chain. Transparent on-chain mechanics with automated rewards and zero inflationary minting.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 3 Metrics Top Banner */}
        <section className="py-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl glass-light border border-purple-200/80 dark:border-white/10 shadow-xs text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Max Total Supply
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-black text-purple-700 dark:text-purple-400">
                5,000,000,000
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-400 block mt-1 font-semibold">
                $OKN on BNB Smart Chain
              </span>
            </div>

            <div className="p-6 rounded-3xl glass-light border border-cyan-200/80 dark:border-white/10 shadow-xs text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Claim Fee
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400">
                $3 in BNB
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-400 block mt-1 font-semibold">
                Chainlink Oracle Verified
              </span>
            </div>

            <div className="p-6 rounded-3xl glass-light border border-emerald-200/80 dark:border-white/10 shadow-xs text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Community Allocation
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                60%
              </span>
              <span className="text-[11px] text-slate-400 dark:text-slate-400 block mt-1 font-semibold">
                Rewards (35%) + Public (25%)
              </span>
            </div>
          </div>
        </section>

        {/* Dynamic Interactive Chart + Allocations Grid */}
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Interactive SVG Chart */}
            <div className="lg:col-span-5 flex justify-center">
              <TokenomicsChart
                allocations={allocations}
                activeAllocation={activeItem}
                onSelectAllocation={setActiveItem}
              />
            </div>

            {/* Allocation Details Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {allocations.map((item) => {
                const isSelected = activeItem?.name === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveItem(item)}
                    onMouseEnter={() => setActiveItem(item)}
                    className={`p-5 rounded-2xl text-left border transition-all duration-300 ${
                      isSelected
                        ? "glass-light border-purple-400 dark:border-purple-400/80 shadow-lg shadow-purple-500/10 -translate-y-1"
                        : "glass-light-subtle border-white/80 dark:border-white/10 hover:border-purple-200 dark:hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <h3 className="font-heading text-sm font-bold text-slate-900 dark:text-white">
                          {item.name}
                        </h3>
                      </div>
                      <span className="font-mono text-sm font-bold text-purple-700 dark:text-purple-400">
                        {item.percentage}%
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                      {item.vesting}
                    </p>

                    <div className="pt-2 border-t border-slate-200/50 dark:border-white/10 flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-400 font-mono">
                      <span>Tokens:</span>
                      <span className="font-bold text-slate-700 dark:text-slate-300">
                        {(item.percentage * 50_000_000).toLocaleString()} OKN
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security & Verification Guarantee */}
        <section className="py-12 bg-white dark:bg-[#07080D] border-t border-slate-200/80 dark:border-white/10 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
              <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>100% Confirmed Token Math</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
              Every token allocation is permanently locked to the 5,000,000,000 supply cap within the audited smart contract on BNB Smart Chain.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
