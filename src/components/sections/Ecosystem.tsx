"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type EcosystemTab = "miniapp" | "exchange" | "swap";
type StageView = "dual" | "home" | "portfolio" | "terminal";

const TAB_DATA: Record<
  EcosystemTab,
  {
    eyebrow: string;
    title: string;
    description: string;
    metrics: Array<{ label: string; value: string }>;
    highlights: string[];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    defaultStage: StageView;
  }
> = {
  miniapp: {
    eyebrow: "Mobile Dashboard & Mini-App",
    title: "OKN Mobile Portfolio & Rewards",
    description:
      "Track OK Points, daily check-in streaks, referral earnings, and Stage 1 presale allocations in one unified mobile dashboard built for 28,000+ active Telegram members.",
    metrics: [
      { label: "Active Community", value: "28K+ Users" },
      { label: "Presale Stage 1", value: "$0.05 Entry" },
      { label: "Settlement", value: "BSC BEP-20" },
    ],
    highlights: [
      "One-tap Stage 1 $OKN purchase with USDT, BNB, ETH, or SOL",
      "Real-time portfolio valuation, streak rewards, and referral tracking",
      "Direct claim pipeline and AI agent controls from the bottom bar",
    ],
    primaryCta: {
      label: "Open OKN Mini-App",
      href: "https://t.me/okntoken_bot?start=login",
    },
    secondaryCta: {
      label: "Open OKNexus Exchange",
      href: "https://oknexusexchange.com/",
    },
    defaultStage: "dual",
  },
  exchange: {
    eyebrow: "Flagship Trading Engine",
    title: "OKNexus Spot & Escrow P2P",
    description:
      "Trade deep order-book liquidity with sub-millisecond matching and settle fiat directly across 85+ countries using smart-contract protected P2P rails.",
    metrics: [
      { label: "Order Latency", value: "< 0.01s" },
      { label: "P2P Coverage", value: "85+ Nations" },
      { label: "Maker Fee", value: "0% P2P" },
    ],
    highlights: [
      "100,000+ TPS central limit order book with depth charting",
      "150+ local payment rails backed by automated escrow settlement",
      "Tiered fee discounts paid directly in OKN across spot markets",
    ],
    primaryCta: {
      label: "Open OKNexus Exchange",
      href: "https://oknexusexchange.com/",
    },
    secondaryCta: {
      label: "Open Mobile Dashboard",
      href: "https://t.me/okntoken_bot?start=login",
    },
    defaultStage: "terminal",
  },
  swap: {
    eyebrow: "Cross-Chain Liquidity",
    title: "Instant Multi-Chain Swaps",
    description:
      "Route self-custody wallet-to-wallet swaps across Binance Smart Chain, Ethereum, Arbitrum, and Solana with automated slippage protection and best-price aggregation.",
    metrics: [
      { label: "Networks", value: "BSC · EVM · SOL" },
      { label: "Bridge Finality", value: "< 15s" },
      { label: "Routing", value: "Multi-DEX" },
    ],
    highlights: [
      "Automated optimal gas and cross-chain liquidity pathfinding",
      "Non-custodial wallet execution with zero intermediate custody",
      "Unified portfolio balance synced straight to your OKN dashboard",
    ],
    primaryCta: {
      label: "Launch Instant Swap",
      href: "https://oknexusexchange.com/",
    },
    secondaryCta: {
      label: "Open OKN Mini-App",
      href: "https://t.me/okntoken_bot?start=login",
    },
    defaultStage: "portfolio",
  },
};

const AI_AGENT_CAPABILITIES = [
  {
    name: "Sub-Second Risk Scoring",
    detail: "Continuous volatility and order-book imbalance checks before execution.",
  },
  {
    name: "Autonomous Liquidity Balancing",
    detail: "Rebalances market exposure across spot pairs and yield vaults.",
  },
  {
    name: "Predictive Slippage Modeling",
    detail: "Estimates execution impact prior to routing high-volume orders.",
  },
  {
    name: "Risk-Aware Autopilot",
    detail: "User-defined stop thresholds enforced 24/7 inside the OKN dashboard.",
  },
];

const ARCHITECTURE_PILLARS = [
  {
    index: "03",
    title: "Cross-Chain Instant Swaps",
    description:
      "One-click liquidity routing linking Binance Smart Chain, Ethereum, Arbitrum, and Solana directly from self-custody wallets.",
    meta: "Multi-Chain Routing · Non-Custodial",
  },
  {
    index: "04",
    title: "OKN Launchpad & Spend Card",
    description:
      "Guaranteed allocation tiers for vetted Web3 launches alongside upcoming OKNexus crypto-spend debit card support.",
    meta: "Vetted Tier Access · Crypto Spend",
  },
  {
    index: "05",
    title: "AssureDeFi KYC & Custody",
    description:
      "Project KYC verified by AssureDeFi, OpenZeppelin smart contract standards, and BscScan verified BEP-20 deployment.",
    meta: "AssureDeFi KYC · BscScan Verified",
  },
];

export function Ecosystem() {
  const [activeTab, setActiveTab] = useState<EcosystemTab>("miniapp");
  const [stageView, setStageView] = useState<StageView>("dual");
  const [mobileScreen, setMobileScreen] = useState<"home" | "portfolio" | "terminal">("home");

  const currentTab = TAB_DATA[activeTab];

  const handleTabChange = (tab: EcosystemTab) => {
    setActiveTab(tab);
    setStageView(TAB_DATA[tab].defaultStage);
    if (tab === "exchange") {
      setMobileScreen("terminal");
    } else if (tab === "swap") {
      setMobileScreen("portfolio");
    } else {
      setMobileScreen("home");
    }
  };

  return (
    <section
      id="ecosystem"
      className="pt-6 pb-20 lg:pb-28 bg-white dark:bg-[#06070B] text-[#0F172A] dark:text-white transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-[1274px] mx-auto px-4">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-[660px]">
            <p className="text-xs font-mono font-medium tracking-[0.12em] uppercase text-purple-700 dark:text-purple-300 mb-3">
              OKNexus Ecosystem · Binance Smart Chain
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal leading-[1.04] tracking-[-0.045em] text-[#0F172A] dark:text-white text-balance">
              One ecosystem.{" "}
              <span className="text-[#94A3B8] dark:text-slate-500">
                Built to trade, earn, and compound.
              </span>
            </h2>
          </div>

          <p className="max-w-[400px] text-sm sm:text-base text-[#475569] dark:text-slate-400 leading-[1.5] tracking-[-0.015em]">
            Manage OK Points, presale entries, spot orders, and 24/7 AI trading agents from one mobile-first product suite.
          </p>
        </div>

        {/* Flagship Product Showcase: Narrative Left + Dual-Phone Studio Stage Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-12 lg:mb-16">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              {/* Interactive Product Mode Switcher */}
              <div
                role="tablist"
                aria-label="Ecosystem product views"
                className="inline-flex items-center p-1 rounded-xl bg-[#F5F3FB] dark:bg-white/[0.05] border border-[#EAE7F4] dark:border-white/10 mb-7"
              >
                {(
                  [
                    { id: "miniapp", label: "Mobile App" },
                    { id: "exchange", label: "Spot & P2P" },
                    { id: "swap", label: "Swap Bridge" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium tracking-[-0.01em] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-white dark:bg-[#171B2B] text-[#0F172A] dark:text-white shadow-xs"
                        : "text-[#64748B] dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-xs font-mono text-purple-700 dark:text-purple-300 mb-2">
                    {currentTab.eyebrow}
                  </p>

                  <h3 className="text-2xl sm:text-[32px] font-medium leading-[1.12] tracking-[-0.035em] text-[#0F172A] dark:text-white mb-4 text-balance">
                    {currentTab.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-[#475569] dark:text-slate-300 leading-[1.55] mb-7">
                    {currentTab.description}
                  </p>

                  {/* Hairline Metric Ledger */}
                  <div className="grid grid-cols-3 gap-4 py-5 border-y border-[#EAE7F4] dark:border-white/10 mb-7">
                    {currentTab.metrics.map((metric) => (
                      <div key={metric.label} className="min-w-0">
                        <span className="block text-[11px] text-[#64748B] dark:text-slate-400 mb-1 truncate">
                          {metric.label}
                        </span>
                        <span className="block font-mono tabular-nums text-sm sm:text-[15px] font-semibold text-[#0F172A] dark:text-white">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Clean Numbered Capability List */}
                  <ol className="space-y-3 mb-8">
                    {currentTab.highlights.map((line, i) => (
                      <li
                        key={line}
                        className="flex items-baseline gap-3 text-sm text-[#334155] dark:text-slate-300 leading-[1.45]"
                      >
                        <span className="font-mono text-[11px] font-semibold text-purple-700 dark:text-purple-300 shrink-0 tabular-nums">
                          0{i + 1}
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Single Primary CTA + Quiet Secondary Link */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href={currentTab.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] text-sm font-medium tracking-[-0.02em] shadow-[0_10px_26px_rgba(15,23,42,0.14)] hover:bg-purple-700 dark:hover:bg-purple-100 transition-colors whitespace-nowrap shrink-0"
              >
                <span>{currentTab.primaryCta.label}</span>
                <span className="w-7 h-7 rounded-full bg-white dark:bg-[#0F172A] text-[#0F172A] dark:text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href={currentTab.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#475569] dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 transition-colors whitespace-nowrap shrink-0"
              >
                <span>{currentTab.secondaryCta.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Gallery Studio Stage: User's Crisp Mobile Dashboard UI */}
          <div className="lg:col-span-7 relative isolate rounded-[28px] border border-[#E6E2F2] dark:border-white/10 bg-gradient-to-br from-[#F4F1FC] via-[#F6F7FB] to-[#ECF6FA] dark:from-[#0C0F1C] dark:via-[#0A0C16] dark:to-[#09121B] p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
            {/* Subtle Architectural Grid + Soft Studio Ambient Illumination */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none hero-grid-pattern opacity-45"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 56% 52% at 28% 35%, rgba(124, 58, 237, 0.14), transparent 72%), radial-gradient(ellipse 48% 52% at 78% 72%, rgba(6, 182, 212, 0.12), transparent 72%)",
              }}
            />

            {/* Top Studio Stage Controls */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="text-xs text-[#475569] dark:text-slate-400">
                <span className="font-medium text-[#0F172A] dark:text-white">
                  {stageView === "terminal"
                    ? "OKNexus Exchange Pro"
                    : "OKN User Dashboard UI"}
                </span>
                <span aria-hidden="true" className="mx-1.5 text-[#CBD5E1] dark:text-slate-600">
                  ·
                </span>
                <span>
                  {stageView === "terminal"
                    ? "Web Trading Terminal"
                    : "iOS & Telegram Mini-App"}
                </span>
              </div>

              {/* Desktop Stage Switcher */}
              <div className="hidden sm:inline-flex items-center p-0.5 rounded-lg bg-white/85 dark:bg-white/[0.06] border border-[#E2DFEE] dark:border-white/10">
                {(
                  [
                    { id: "dual", label: "Dual Mobile" },
                    { id: "home", label: "Buy & Tasks" },
                    { id: "portfolio", label: "Portfolio" },
                    { id: "terminal", label: "Exchange" },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStageView(item.id)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors whitespace-nowrap cursor-pointer ${
                      stageView === item.id
                        ? "bg-[#0F172A] text-white dark:bg-purple-600"
                        : "text-[#64748B] dark:text-slate-300 hover:text-[#0F172A] dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Staggered Dual-Phone / Focused Stage */}
            <div className="relative z-10 hidden sm:flex items-center justify-center min-h-[470px] lg:min-h-[500px]">
              {stageView === "terminal" ? (
                <div className="relative w-full max-w-[560px] aspect-[16/10] rounded-2xl overflow-hidden bg-[#090B14] border border-white/10 shadow-[0_24px_54px_rgba(15,23,42,0.22)]">
                  <Image
                    src="/assets/exchancge_mockup.webp"
                    alt="OKNexus Exchange Pro trading interface"
                    fill
                    sizes="(max-width: 1024px) 90vw, 560px"
                    referrerPolicy="no-referrer"
                    className="object-contain p-3"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center gap-5 lg:gap-7 w-full">
                  {/* Phone 1: Home, Buy $OKN Token Stage 1 ($0.05), Account Summary */}
                  <button
                    type="button"
                    onClick={() => setStageView(stageView === "home" ? "dual" : "home")}
                    aria-label="Inspect OKN Mobile Buy and Account Summary screen"
                    className={`relative text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-[32px] ${
                      stageView === "home"
                        ? "w-[270px] lg:w-[290px] z-20 scale-[1.02]"
                        : stageView === "portfolio"
                        ? "w-[215px] lg:w-[230px] opacity-65 scale-[0.95] hover:opacity-95"
                        : "w-[245px] lg:w-[266px] -translate-y-2 hover:-translate-y-3"
                    }`}
                  >
                    <div className="relative w-full aspect-[1152/2048] drop-shadow-[0_24px_42px_rgba(15,23,42,0.16)] dark:drop-shadow-[0_26px_54px_rgba(0,0,0,0.65)]">
                      <Image
                        src="/assets/aistudio/Untitled_design_d33b0d17.png"
                        alt="OKN Mobile Dashboard showing Tasks, 6-day streak, Buy $OKN Token Stage 1 $0.05 card, and Account summary"
                        fill
                        sizes="(max-width: 1024px) 42vw, 290px"
                        referrerPolicy="no-referrer"
                        className="object-contain"
                      />
                    </div>
                  </button>

                  {/* Phone 2: Portfolio Value ($1,428.50), OK Points, Referrals & Actions */}
                  <button
                    type="button"
                    onClick={() => setStageView(stageView === "portfolio" ? "dual" : "portfolio")}
                    aria-label="Inspect OKN Mobile Portfolio and Referral Earnings screen"
                    className={`relative text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-[32px] ${
                      stageView === "portfolio"
                        ? "w-[270px] lg:w-[290px] z-20 scale-[1.02]"
                        : stageView === "home"
                        ? "w-[215px] lg:w-[230px] opacity-65 scale-[0.95] hover:opacity-95"
                        : "w-[245px] lg:w-[266px] translate-y-4 hover:translate-y-2"
                    }`}
                  >
                    <div className="relative w-full aspect-[1152/2048] drop-shadow-[0_24px_42px_rgba(124,58,237,0.18)] dark:drop-shadow-[0_26px_54px_rgba(0,0,0,0.65)]">
                      <Image
                        src="/assets/aistudio/Untitled_design_cec84032.png"
                        alt="OKN Mobile Portfolio Dashboard showing OK Points, Total Asset Value, Referral Earnings, and Presale Stage 1"
                        fill
                        sizes="(max-width: 1024px) 42vw, 290px"
                        referrerPolicy="no-referrer"
                        className="object-contain"
                      />
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Single-Phone Stage with Clean Screen Switcher */}
            <div className="relative z-10 flex sm:hidden flex-col items-center">
              {mobileScreen === "terminal" ? (
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#090B14] border border-white/10 shadow-lg">
                  <Image
                    src="/assets/exchancge_mockup.webp"
                    alt="OKNexus Exchange Pro interface"
                    fill
                    sizes="92vw"
                    referrerPolicy="no-referrer"
                    className="object-contain p-2"
                  />
                </div>
              ) : (
                <div className="relative w-[250px] aspect-[1152/2048] drop-shadow-[0_20px_36px_rgba(15,23,42,0.16)]">
                  <Image
                    src={
                      mobileScreen === "home"
                        ? "/assets/aistudio/Untitled_design_d33b0d17.png"
                        : "/assets/aistudio/Untitled_design_cec84032.png"
                    }
                    alt={
                      mobileScreen === "home"
                        ? "OKN Mobile Buy $OKN and Account summary screen"
                        : "OKN Mobile Portfolio and Referral earnings screen"
                    }
                    fill
                    sizes="260px"
                    referrerPolicy="no-referrer"
                    className="object-contain"
                  />
                </div>
              )}

              <div className="mt-5 inline-flex items-center p-1 rounded-xl bg-white/90 dark:bg-white/[0.06] border border-[#E2DFEE] dark:border-white/10">
                {(
                  [
                    { id: "home", label: "Buy & Tasks" },
                    { id: "portfolio", label: "Portfolio" },
                    { id: "terminal", label: "Exchange" },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMobileScreen(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                      mobileScreen === item.id
                        ? "bg-[#0F172A] text-white dark:bg-purple-600"
                        : "text-[#64748B] dark:text-slate-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Subtle Bottom Caption */}
            <div className="relative z-10 mt-6 pt-4 border-t border-[#E4E0F2]/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#64748B] dark:text-slate-400">
              <span>Live inside @okntoken_bot · 6-day streaks, instant Stage 1 buy &amp; referral payouts</span>
              <span className="font-mono tabular-nums text-[#0F172A] dark:text-slate-200">
                1 BNB = 12,000 OKN
              </span>
            </div>
          </div>
        </div>

        {/* Asymmetric Architecture Row: 01. AI Trading Agent (Obsidian Contrast) + 02. Staking Vaults */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10">
          {/* 01. AI Trading Agent — High-Contrast Obsidian Anchor */}
          <div className="lg:col-span-7 relative isolate rounded-2xl bg-[#090B14] border border-purple-500/20 p-7 sm:p-9 text-white overflow-hidden flex flex-col justify-between">
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 58% 68% at 92% 10%, rgba(124, 58, 237, 0.28), transparent 70%), radial-gradient(ellipse 46% 52% at 8% 92%, rgba(6, 182, 212, 0.16), transparent 68%)",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="font-mono text-xs text-purple-300">
                  01 · Autonomous Intelligence
                </span>
                <span className="font-mono text-xs text-slate-400">
                  24/7 Active Execution
                </span>
              </div>

              <h3 className="text-2xl sm:text-[28px] font-medium tracking-[-0.035em] text-white mb-3">
                24/7 AI Trading Agent
              </h3>
              <p className="text-sm text-slate-300 leading-[1.55] max-w-xl mb-7">
                Built directly into the OKN Agents tab to monitor liquidity flows, order-book depth, and automated risk thresholds around the clock.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-white/10">
                {AI_AGENT_CAPABILITIES.map((cap) => (
                  <div key={cap.name}>
                    <h4 className="text-sm font-medium text-white mb-1">{cap.name}</h4>
                    <p className="text-xs text-slate-400 leading-[1.45]">{cap.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 02. Staking & Yield Vaults */}
          <div className="lg:col-span-5 rounded-2xl border border-[#EAE7F4] dark:border-white/10 bg-[#FAF9FF] dark:bg-[#0B0E17] p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="font-mono text-xs text-purple-700 dark:text-purple-300">
                  02 · DeFi Primitives
                </span>
                <span className="font-mono text-xs text-[#64748B] dark:text-slate-400">
                  On-Chain Rewards
                </span>
              </div>

              <h3 className="text-2xl sm:text-[28px] font-medium tracking-[-0.035em] text-[#0F172A] dark:text-white mb-3">
                Staking &amp; Yield Vaults
              </h3>
              <p className="text-sm text-[#475569] dark:text-slate-300 leading-[1.55] mb-6">
                Stake OKN to earn tiered yield multipliers, lower trading fees on OKNexus Exchange, and qualify for priority launchpad rounds.
              </p>
            </div>

            <div className="space-y-3 pt-5 border-t border-[#E6E2F2] dark:border-white/10 text-xs">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[#64748B] dark:text-slate-400">Flexible &amp; Locked Pools</span>
                <span className="font-mono font-medium text-[#0F172A] dark:text-white">BSC Smart Contracts</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[#64748B] dark:text-slate-400">Fee Tier Discounts</span>
                <span className="font-mono font-medium text-[#0F172A] dark:text-white">Spot · P2P · Swap</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[#64748B] dark:text-slate-400">Mini-App Multipliers</span>
                <span className="font-mono font-medium text-purple-700 dark:text-purple-300">Synced with OK Points</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hairline-Separated Editorial Architecture Strip (03 · 04 · 05) */}
        <div className="border-t border-[#EAE7F4] dark:border-white/10 pt-8 grid grid-cols-1 md:grid-cols-3 md:divide-x divide-[#EAE7F4] dark:divide-white/10 gap-8 md:gap-0">
          {ARCHITECTURE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.index}
              className={`${
                idx === 0
                  ? "md:pr-8"
                  : idx === 1
                  ? "md:px-8"
                  : "md:pl-8"
              } flex flex-col justify-between gap-4`}
            >
              <div>
                <span className="block font-mono text-xs text-purple-700 dark:text-purple-300 mb-2.5">
                  {pillar.index}
                </span>
                <h3 className="text-lg font-medium tracking-[-0.03em] text-[#0F172A] dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#64748B] dark:text-slate-400 leading-[1.5]">
                  {pillar.description}
                </p>
              </div>
              <p className="font-mono text-[11px] text-[#64748B] dark:text-slate-400 pt-2">
                {pillar.meta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
