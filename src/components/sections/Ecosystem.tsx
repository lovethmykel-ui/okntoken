"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/data/siteContent";
import {
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Bot,
  Repeat,
  Layers,
  Rocket,
  Sparkles,
  ArrowLeftRight,
  Users,
  CandlestickChart,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export function Ecosystem() {
  const [activeTab, setActiveTab] = useState<"spot" | "p2p" | "swap">("spot");

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "exchange":
        return <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case "ai-agents":
        return <Bot className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "staking":
        return <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case "crosschain":
        return <Repeat className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />;
      case "launchpad":
        return <Rocket className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
      case "security":
        return <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    }
  };

  const exchangeFeatures = {
    spot: {
      title: "Spot Trading Engine",
      tag: "INSTITUTIONAL PERFORMANCE",
      description:
        "High-throughput central limit order book (CLOB) engine handling 100,000+ TPS with sub-millisecond execution, advanced order types (Limit, Market, Stop-Loss), and deep institutional market maker liquidity.",
      metrics: [
        { label: "Execution Latency", value: "< 0.01s" },
        { label: "Maturity", value: "Sub-Cent Gas" },
        { label: "Slippage Protection", value: "Zero-Delta" },
      ],
      highlights: [
        "Advanced Candlestick Charting & Depth Analysis",
        "Sub-Millisecond Multi-Asset Matching Engine",
        "Tier-1 Market Maker Liquidity Aggregation",
      ],
    },
    p2p: {
      title: "P2P Fiat & Crypto Gateway",
      tag: "GLOBAL ESCROW PROTOCOL",
      description:
        "Decentralized peer-to-peer fiat on/off-ramp enabling users across 85+ countries to buy and sell OKN directly with local bank transfers, mobile money, and digital payment methods backed by smart escrow.",
      metrics: [
        { label: "Supported Countries", value: "85+ Nations" },
        { label: "Payment Methods", value: "150+ Channels" },
        { label: "Maker Platform Fee", value: "0% Free" },
      ],
      highlights: [
        "Smart Contract Escrow Security Protection",
        "Verified Merchant Tier & Community Reputation",
        "Instant Local Fiat Settlement via Mobile & Bank",
      ],
    },
    swap: {
      title: "Instant Cross-Chain Swap",
      tag: "ATOMIC ROUTING",
      description:
        "Frictionless, one-click decentralized liquidity bridge routing transactions between BNB Smart Chain, Arbitrum, Ethereum, and Solana with automated best-execution pricing and zero bridging friction.",
      metrics: [
        { label: "Supported Chains", value: "EVM & Solana" },
        { label: "Bridge Finality", value: "< 15 Secs" },
        { label: "Liquidity Routing", value: "Multi-DEX" },
      ],
      highlights: [
        "Automated Optimal Gas & Fee Routing",
        "Atomic Cross-Chain Smart Liquidity Bridges",
        "Direct Self-Custody Wallet-to-Wallet Swaps",
      ],
    },
  };

  return (
    <section
      id="ecosystem"
      className="py-24 bg-gradient-to-b from-[#F8F9FE] to-[#EFF3FD] dark:from-[#06070B] dark:to-[#090C16] relative overflow-hidden scroll-mt-24 transition-colors duration-500"
    >
      {/* Luminous Ambient Light Orbs for Refraction */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-purple-600/20 dark:bg-purple-600/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-cyan-500/20 dark:bg-cyan-500/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow={siteContent.ecosystem.eyebrow}
          title={siteContent.ecosystem.headline}
          description={siteContent.ecosystem.description}
          centered
          className="mb-16"
        />

        {/* Asymmetrical Editorial Grid with Apple Liquid Glass OS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Hero Ecosystem Panel: OKNexus Exchange (Expanded & Feature-Rich) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 rounded-3xl p-6 sm:p-10 glass-light dark:glass-dark relative overflow-hidden flex flex-col justify-between shadow-2xl hover:border-purple-400/80 transition-all duration-300"
          >
            {/* Inner Refraction Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 dark:bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 dark:bg-cyan-600/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header Badge & Interactive Mode Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 dark:bg-purple-500/25 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-500/30 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>Flagship Trading Hub</span>
                </div>

                {/* 3 Interactive Feature Tabs */}
                <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-200/70 dark:bg-white/10 border border-slate-300/60 dark:border-white/10 backdrop-blur-md">
                  <button
                    onClick={() => setActiveTab("spot")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === "spot"
                        ? "bg-white dark:bg-purple-600 text-purple-700 dark:text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-300 hover:text-purple-600"
                    }`}
                  >
                    <CandlestickChart className="w-3.5 h-3.5" />
                    <span>Spot</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("p2p")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === "p2p"
                        ? "bg-white dark:bg-purple-600 text-purple-700 dark:text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-300 hover:text-purple-600"
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>P2P Trading</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("swap")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeTab === "swap"
                        ? "bg-white dark:bg-purple-600 text-purple-700 dark:text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-300 hover:text-purple-600"
                    }`}
                  >
                    <ArrowLeftRight className="w-3.5 h-3.5" />
                    <span>Swap</span>
                  </button>
                </div>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl font-black text-slate-950 dark:text-white mb-2 tracking-tight">
                OKNexus Exchange
              </h3>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-6">
                    {exchangeFeatures[activeTab].description}
                  </p>

                  {/* 3 Active Metrics Strip */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {exchangeFeatures[activeTab].metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3 rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-center shadow-xs"
                      >
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-0.5">
                          {m.label}
                        </span>
                        <span className="font-mono text-sm sm:text-base font-black text-purple-700 dark:text-purple-300">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* High-Resolution Exchange Showcase Mockup */}
            <div className="relative z-10 w-full rounded-2xl bg-slate-950/90 dark:bg-black/60 border border-slate-200/80 dark:border-white/15 overflow-hidden flex items-center justify-center p-3 sm:p-5 backdrop-blur-2xl shadow-2xl mb-6">
              <div className="relative w-full aspect-[16/9] max-h-[300px] flex items-center justify-center">
                <Image
                  src="/assets/exchancge mockup.png"
                  alt="OKNexus Exchange Interface"
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(124,58,237,0.45)]"
                />
              </div>
            </div>

            {/* 3 Live Feature Highlights List */}
            <div className="relative z-10 pt-4 border-t border-slate-200/70 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {exchangeFeatures[activeTab].highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Secondary Highlight Panel: AI Prediction Agent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 rounded-3xl p-8 glass-light dark:glass-dark shadow-2xl flex flex-col justify-between hover:border-purple-400/80 transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-purple-600/30 border-t border-white/30">
                <Bot className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 block mb-1">
                Autonomous Intelligence
              </span>

              <h4 className="font-heading text-2xl font-black text-slate-950 dark:text-white mb-3">
                AI Prediction Agent
              </h4>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                On-chain neural network monitors liquidity flows, mempool risk signals, and order books to provide real-time predictive analytics.
              </p>

              {/* Mini Feature List */}
              <div className="space-y-2.5 p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Sub-Second Risk Scoring</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>Autonomous Liquidity Balancing</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Predictive Slippage Modeling</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-bold text-purple-700 dark:text-purple-300">
              <span>Risk-Aware Autopilot</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* 4 Secondary Capability Cards */}
          {siteContent.ecosystem.pillars.slice(2).map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3 p-6 sm:p-7 rounded-3xl glass-light dark:glass-dark hover:-translate-y-1 hover:shadow-2xl hover:border-purple-400/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-purple-500/10 dark:bg-white/10 border border-purple-200 dark:border-white/20 shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getPillarIcon(pillar.id)}
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 block mb-1.5 font-mono">
                  {pillar.tag}
                </span>

                <h4 className="font-heading text-lg font-bold text-slate-950 dark:text-white mb-2.5 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-200/60 dark:border-white/10 text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
                {pillar.stats}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
