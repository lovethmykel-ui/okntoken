"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteContent } from "@/data/siteContent";
import { ArrowUpRight, ShieldCheck, Zap, Bot, Repeat, Layers, Rocket, Sparkles } from "lucide-react";

export function Ecosystem() {
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

  return (
    <section id="ecosystem" className="py-24 bg-gradient-to-b from-[#F8F9FE] to-[#EFF3FD] dark:from-[#06070B] dark:to-[#090C16] relative overflow-hidden scroll-mt-24 transition-colors duration-500">
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
          
          {/* Main Hero Ecosystem Panel (Exchange & Network Primitives) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 rounded-3xl p-8 sm:p-10 glass-light dark:glass-dark relative overflow-hidden flex flex-col justify-between shadow-2xl hover:border-purple-400/80 transition-all duration-300"
          >
            {/* Inner Refraction Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/25 dark:bg-purple-600/35 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/20 dark:bg-cyan-600/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 dark:bg-purple-500/25 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-6 border border-purple-500/30 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Flagship Platform</span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl font-black text-slate-950 dark:text-white mb-4 tracking-tight">
                OKNexus Exchange
              </h3>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-8">
                High-throughput decentralized &amp; institutional trading engine with ultra-low latency, deep liquidity order routing, and zero-slippage execution powered by OKN on BNB Smart Chain.
              </p>
            </div>

            {/* Clean High-Resolution Mockup in Frosted Vessel */}
            <div className="relative z-10 w-full h-60 sm:h-72 rounded-2xl bg-white/80 dark:bg-black/40 border border-slate-200/80 dark:border-white/15 overflow-hidden flex items-center justify-center p-4 backdrop-blur-2xl shadow-inner">
              <Image
                src="/assets/exchancge mockup.png"
                alt="OKNexus Exchange Interface"
                width={520}
                height={280}
                className="object-contain max-h-full drop-shadow-[0_20px_40px_rgba(124,58,237,0.35)]"
              />
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-slate-200/70 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span className="font-mono text-purple-700 dark:text-purple-300 font-bold">
                ⚡ 0.01s Execution Latency
              </span>
              <span className="text-slate-700 dark:text-slate-200">
                Tier-1 Liquidity Aggregation
              </span>
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
