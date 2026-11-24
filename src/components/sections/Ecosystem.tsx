"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import {
  ArrowUpRight,
  ShieldCheck,
  Bot,
  Repeat,
  Layers,
  Rocket,
  Check,
  Smartphone,
} from "lucide-react";

export function Ecosystem() {
  const [activeTab, setActiveTab] = useState<"spot" | "p2p" | "swap">("spot");
  const [previewMode, setPreviewMode] = useState<"miniapp" | "exchange">("miniapp");

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "ai-agents":
        return <Bot className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case "staking":
        return <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case "crosschain":
        return <Repeat className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "launchpad":
        return <Rocket className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case "security":
      default:
        return <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  const exchangeFeatures = {
    spot: {
      description:
        "High-throughput central limit order book engine handling 100,000+ TPS with sub-millisecond execution, limit orders, and deep market liquidity.",
      metrics: [
        { label: "Execution Latency", value: "< 0.01s" },
        { label: "Fee Tier", value: "Sub-Cent" },
        { label: "Slippage Guard", value: "Zero-Delta" },
      ],
      highlights: [
        "Advanced depth charting & order execution",
        "Sub-millisecond multi-asset matching engine",
        "Tier-1 market maker liquidity aggregation",
      ],
    },
    p2p: {
      description:
        "Peer-to-peer fiat on/off-ramp enabling users across 85+ countries to trade OKN directly with local bank transfers backed by smart contract escrow.",
      metrics: [
        { label: "Regions", value: "85+ Nations" },
        { label: "Payment Rails", value: "150+" },
        { label: "Maker Fee", value: "0%" },
      ],
      highlights: [
        "Smart contract escrow protection",
        "Verified merchant reputation tiers",
        "Instant local settlement channels",
      ],
    },
    swap: {
      description:
        "One-click decentralized liquidity bridge routing transactions across Binance Smart Chain, Ethereum, Arbitrum, and Solana with best-execution pricing.",
      metrics: [
        { label: "Networks", value: "BSC + EVM + SOL" },
        { label: "Bridge Finality", value: "< 15s" },
        { label: "Routing", value: "Multi-DEX" },
      ],
      highlights: [
        "Automated optimal gas & route selection",
        "Atomic cross-chain liquidity bridges",
        "Direct self-custody wallet-to-wallet swaps",
      ],
    },
  };

  const secondaryPillars = siteContent.ecosystem.pillars.slice(1);

  return (
    <section
      id="ecosystem"
      className="pt-4 pb-20 lg:pb-28 bg-white dark:bg-[#06070B] text-[#0F172A] dark:text-white tracking-[-0.045em] transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-[1274px] mx-auto px-4">
        {/* Centered Header */}
        <div className="text-center max-w-[680px] mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.06] tracking-[-0.045em] mb-4 text-balance">
            One ecosystem.{" "}
            <span className="text-[#94A3B8] dark:text-slate-500">
              Endless possibilities.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-400 tracking-[-0.02em] leading-[1.45]">
            {siteContent.ecosystem.description}
          </p>
        </div>

        {/* Flagship Hub Card with Tactile Light-Mode Depth & Interactive Mini-App / Exchange Showcase */}
        <div className="rounded-2xl border border-[#EAE7F4] dark:border-white/10 bg-white dark:bg-[#0B0E17] shadow-[0_16px_48px_rgba(124,58,237,0.06),0_4px_12px_rgba(15,23,42,0.03)] overflow-hidden mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-white dark:bg-[#0B0E17] border-b lg:border-b-0 lg:border-r border-[#EAE7F4] dark:border-white/10">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-medium uppercase tracking-normal text-purple-600 dark:text-purple-400">
                    Flagship Trading &amp; Mobile Hub
                  </span>

                  <div className="inline-flex items-center p-1 rounded-full bg-[#F7F5FF] dark:bg-white/[0.04] border border-[#EAE7F4] dark:border-white/10">
                    {(
                      [
                        { id: "spot", label: "Spot" },
                        { id: "p2p", label: "P2P" },
                        { id: "swap", label: "Swap" },
                      ] as const
                    ).map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-[-0.02em] transition-colors whitespace-nowrap ${
                          activeTab === tab.id
                            ? "bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A] shadow-xs"
                            : "text-[#64748B] dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium tracking-[-0.04em] text-[#0F172A] dark:text-white mb-3">
                  OKNexus Exchange &amp; Mini-App
                </h3>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                  >
                    <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-300 leading-[1.45] tracking-[-0.02em] mb-6">
                      {exchangeFeatures[activeTab].description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#EAE7F4] dark:border-white/10 mb-6 tracking-normal">
                      {exchangeFeatures[activeTab].metrics.map((m) => (
                        <div key={m.label}>
                          <span className="text-[11px] text-[#64748B] dark:text-slate-400 block mb-0.5">
                            {m.label}
                          </span>
                          <span className="font-mono tabular-nums text-sm sm:text-base font-medium text-[#0F172A] dark:text-white">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2.5 mb-8 tracking-[-0.02em]">
                      {exchangeFeatures[activeTab].highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-[#475569] dark:text-slate-300"
                        >
                          <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://oknexusexchange.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] text-sm font-medium tracking-[-0.03em] hover:bg-purple-700 dark:hover:bg-purple-100 transition-colors"
                >
                  <span>Open OKNexus Exchange</span>
                  <span className="w-7 h-7 rounded-full bg-white dark:bg-[#0F172A] text-[#0F172A] dark:text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                <a
                  href="https://t.me/okntoken_bot?start=login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E6E3F1] dark:border-white/15 bg-[#FAF9FF] dark:bg-white/[0.04] text-sm font-medium tracking-[-0.02em] text-[#0F172A] dark:text-white hover:border-purple-400/60 transition-colors"
                >
                  <Smartphone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Open Mini-App (28K+)</span>
                </a>
              </div>
            </div>

            {/* Right Elevated Showcase Panel (Mini-App Portfolio + Exchange Terminal Switcher) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#F4F1FC] via-[#EEF1FC] to-[#E9F6FA] dark:from-[#0B0E18] dark:to-[#080A12] p-6 sm:p-8 flex flex-col justify-between gap-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium uppercase tracking-normal text-[#64748B] dark:text-slate-400">
                  {previewMode === "miniapp" ? "OKN Mini-App & Portfolio" : "OKNexus Exchange Pro"}
                </span>

                <div className="inline-flex items-center p-0.5 rounded-full bg-white/90 dark:bg-white/10 border border-[#E2DFEE] dark:border-white/10 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setPreviewMode("miniapp")}
                    className={`px-3 py-1 rounded-full text-[11px] font-medium transition-colors ${
                      previewMode === "miniapp"
                        ? "bg-purple-600 text-white"
                        : "text-[#64748B] dark:text-slate-300"
                    }`}
                  >
                    Mini-App
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewMode("exchange")}
                    className={`px-3 py-1 rounded-full text-[11px] font-medium transition-colors ${
                      previewMode === "exchange"
                        ? "bg-purple-600 text-white"
                        : "text-[#64748B] dark:text-slate-300"
                    }`}
                  >
                    Exchange
                  </button>
                </div>
              </div>

              <div
                className={`relative w-full aspect-square sm:aspect-[5/4] lg:aspect-square rounded-xl overflow-hidden shadow-[0_14px_38px_rgba(124,58,237,0.12)] ${
                  previewMode === "miniapp"
                    ? "bg-[#E6EAF2] dark:bg-[#111522]"
                    : "bg-[#090B14]"
                }`}
              >
                <Image
                  src={
                    previewMode === "miniapp"
                      ? "/assets/okn_app_showcase.webp"
                      : "/assets/exchancge_mockup.webp"
                  }
                  alt={
                    previewMode === "miniapp"
                      ? "OKN Telegram Mini-App & Portfolio UI"
                      : "OKNexus Exchange Interface"
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className={previewMode === "miniapp" ? "object-contain p-1.5" : "object-contain p-3"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Remaining 5 Minimalist Cards with Elevated Light-Mode Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[18px]">
          {secondaryPillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`${
                idx < 2 ? "lg:col-span-3" : "lg:col-span-2"
              } rounded-2xl border border-[#EAE7F4] dark:border-white/10 bg-white dark:bg-[#0B0E17] p-6 sm:p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_42px_rgba(124,58,237,0.09)] hover:border-purple-300 dark:hover:border-purple-400/40 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-medium uppercase tracking-normal text-purple-600 dark:text-purple-400">
                    {pillar.tag}
                  </span>
                  <div className="w-9 h-9 rounded-full border border-[#EAE7F4] dark:border-white/10 bg-[#FAF9FF] dark:bg-white/[0.03] flex items-center justify-center">
                    {getPillarIcon(pillar.id)}
                  </div>
                </div>

                <h4 className="text-lg font-medium tracking-[-0.03em] text-[#0F172A] dark:text-white mb-2">
                  {pillar.title}
                </h4>

                <p className="text-sm text-[#64748B] dark:text-slate-400 leading-[1.45] tracking-[-0.02em] mb-5">
                  {pillar.description}
                </p>

                {pillar.id === "ai-agents" && (
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {[
                      "Sub-Second Risk Scoring",
                      "Autonomous Liquidity Balancing",
                      "Predictive Slippage Modeling",
                      "Risk-Aware Autopilot",
                    ].map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-1.5 text-[11px] font-medium text-[#475569] dark:text-slate-300"
                      >
                        <Check className="w-3 h-3 text-purple-600 dark:text-purple-400 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#EAE7F4] dark:border-white/10 text-xs font-mono tracking-normal text-[#64748B] dark:text-slate-400">
                {pillar.stats}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
