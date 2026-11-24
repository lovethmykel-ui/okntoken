"use client";

import React, { useState } from "react";
import { TokenomicsChart } from "@/components/ui/TokenomicsChart";
import { siteContent, TokenAllocation } from "@/data/siteContent";

const TGE_SHARES: Record<string, string> = {
  "Community Rewards": "On-chain",
  "Public Sale": "15%",
  "DEX Liquidity": "100% locked",
  "Team & Advisors": "0%",
  Ecosystem: "0%",
  Treasury: "0%",
};

export function Tokenomics() {
  const [activeAllocation, setActiveAllocation] =
    useState<TokenAllocation | null>(siteContent.tokenomics.allocations[0]);

  return (
    <section
      id="tokenomics"
      className="pt-4 pb-20 lg:pb-28 bg-white dark:bg-[#06070B] text-[#0F172A] dark:text-white transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-[1274px] mx-auto px-4">
        <div className="rounded-2xl bg-[#FAF9FF] dark:bg-[#0B0E17] border border-[#EAE7F4] dark:border-white/10 shadow-[0_18px_50px_rgba(124,58,237,0.06),0_2px_10px_rgba(15,23,42,0.03)] dark:shadow-none px-5 py-9 sm:px-12 sm:py-14 lg:px-16">
          {/* Header & 3 KPI Summary Cards */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-medium leading-[1.08] tracking-[-0.045em] text-[#0F172A] dark:text-white mb-2.5 text-balance">
                OKN Tokenomics
              </h2>
              <p className="text-sm sm:text-base text-[#475569] dark:text-slate-400 tracking-[-0.02em]">
                OKN token allocation and unlock schedule on Binance Smart Chain
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="px-4 py-3 rounded-xl bg-white dark:bg-[#111522] border border-[#EAE7F4] dark:border-white/10 shadow-2xs">
                <span className="block text-[11px] text-[#64748B] dark:text-slate-400">Total Supply</span>
                <strong className="font-mono text-sm sm:text-base font-semibold text-[#0F172A] dark:text-white tabular-nums">5,000,000,000</strong>
              </div>
              <div className="px-4 py-3 rounded-xl bg-white dark:bg-[#111522] border border-[#EAE7F4] dark:border-white/10 shadow-2xs">
                <span className="block text-[11px] text-[#64748B] dark:text-slate-400">Claim Fee</span>
                <strong className="font-mono text-sm sm:text-base font-semibold text-purple-700 dark:text-purple-300 tabular-nums">$3 in BNB</strong>
              </div>
              <div className="px-4 py-3 rounded-xl bg-white dark:bg-[#111522] border border-[#EAE7F4] dark:border-white/10 shadow-2xs">
                <span className="block text-[11px] text-[#64748B] dark:text-slate-400">Community Pool</span>
                <strong className="font-mono text-sm sm:text-base font-semibold text-[#0F172A] dark:text-white tabular-nums">60% Total</strong>
              </div>
            </div>
          </div>

          {/* 2-Column Minimalist Layout: Donut Left, Rounded White Table Side Right */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,400px)_1fr] items-center gap-10 lg:gap-12">
            <div className="flex justify-center">
              <TokenomicsChart
                allocations={siteContent.tokenomics.allocations}
                activeAllocation={activeAllocation}
                onSelectAllocation={setActiveAllocation}
              />
            </div>

            <div className="min-w-0 p-4 sm:p-6 rounded-[22px] bg-white dark:bg-[#111522] border border-[#EAE7F4] dark:border-white/10 shadow-[0_12px_34px_rgba(15,23,42,0.05)] dark:shadow-none">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-separate border-spacing-y-1 text-left text-[13px] sm:text-sm">
                  <thead>
                    <tr>
                      <th className="py-2.5 px-3 text-[13px] font-medium text-[#64748B] dark:text-slate-400">
                        Allocation
                      </th>
                      <th className="py-2.5 px-3 text-[13px] font-medium text-[#64748B] dark:text-slate-400">
                        Supply share
                      </th>
                      <th className="py-2.5 px-3 text-[13px] font-medium text-[#64748B] dark:text-slate-400">
                        At TGE
                      </th>
                      <th className="py-2.5 px-3 text-[13px] font-medium text-[#64748B] dark:text-slate-400">
                        Unlock schedule
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {siteContent.tokenomics.allocations.map((item) => {
                      const isSelected = activeAllocation?.name === item.name;
                      return (
                        <tr
                          key={item.name}
                          onMouseEnter={() => setActiveAllocation(item)}
                          onClick={() => setActiveAllocation(item)}
                          className="cursor-pointer group"
                        >
                          <td
                            className={`py-3 px-3 rounded-l transition-colors ${
                              isSelected
                                ? "bg-[#F4F0FF] dark:bg-purple-500/15"
                                : "bg-[#F9FAF9] dark:bg-white/[0.03]"
                            }`}
                          >
                            <span className="inline-flex items-center gap-2 font-medium text-[#0F172A] dark:text-white whitespace-nowrap">
                              <span
                                className="w-2.5 h-2.5 rounded-full shrink-0"
                                style={{ backgroundColor: item.color }}
                              />
                              {item.name}
                            </span>
                          </td>
                          <td
                            className={`py-3 px-3 font-mono tabular-nums whitespace-nowrap transition-colors ${
                              isSelected
                                ? "bg-[#F4F0FF] dark:bg-purple-500/15 font-medium text-purple-800 dark:text-purple-200"
                                : "bg-[#F9FAF9] dark:bg-white/[0.03] text-[#0F172A] dark:text-slate-200"
                            }`}
                          >
                            {item.percentage}%
                          </td>
                          <td
                            className={`py-3 px-3 font-mono tabular-nums whitespace-nowrap transition-colors ${
                              isSelected
                                ? "bg-[#F4F0FF] dark:bg-purple-500/15 text-[#0F172A] dark:text-white"
                                : "bg-[#F9FAF9] dark:bg-white/[0.03] text-[#475569] dark:text-slate-300"
                            }`}
                          >
                            {TGE_SHARES[item.name] ?? "Structured"}
                          </td>
                          <td
                            className={`py-3 px-3 rounded-r text-xs sm:text-[13px] transition-colors ${
                              isSelected
                                ? "bg-[#F4F0FF] dark:bg-purple-500/15 text-[#0F172A] dark:text-slate-200"
                                : "bg-[#F9FAF9] dark:bg-white/[0.03] text-[#475569] dark:text-slate-400"
                            }`}
                          >
                            {item.vesting}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 pt-4 border-t border-[#E8E8E8] dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#64748B] dark:text-slate-400">
                <span className="font-mono tabular-nums font-medium text-[#0F172A] dark:text-white">
                  Total Supply: 5,000,000,000 OKN
                </span>
                <span>Claim Fee: $3 in BNB (Chainlink Verified) · 6-Month Transfer Lock</span>
              </div>
            </div>
          </div>

          {/* 3 Supply & Lock Highlights from okntoken.com */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-[#111522] border border-[#EAE7F4] dark:border-white/10">
              <h3 className="text-sm font-semibold text-[#0F172A] dark:text-white mb-1">
                Verified Smart Contracts
              </h3>
              <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                Smart contract verified on BscScan with zero hidden mint functions and automated on-chain liquidity locks.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-[#111522] border border-[#EAE7F4] dark:border-white/10">
              <h3 className="text-sm font-semibold text-[#0F172A] dark:text-white mb-1">
                6-Month Transfer Lock
              </h3>
              <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                Presale tokens follow a disciplined lock schedule preventing post-TGE liquidity instability.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-[#111522] border border-[#EAE7F4] dark:border-white/10">
              <h3 className="text-sm font-semibold text-[#0F172A] dark:text-white mb-1">
                Tier-1 Market Making
              </h3>
              <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed">
                15% DEX Liquidity &amp; exchange provisioning reserved to maintain deep order-book liquidity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
