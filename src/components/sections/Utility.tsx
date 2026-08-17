"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal, StaggerContainer } from "@/components/ui/Reveal";
import { siteContent } from "@/data/siteContent";
import {
  Sparkles,
  Bot,
  Zap,
  Layers,
  Coins,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function Utility() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Zap className="w-5 h-5" />;
      case 1:
        return <Layers className="w-5 h-5" />;
      case 2:
        return <Coins className="w-5 h-5" />;
      case 3:
        return <Bot className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const activeUtility = siteContent.utility.utilities[activeTab] || siteContent.utility.utilities[0];

  return (
    <section id="utility" className="py-24 bg-[#F8F9FE] dark:bg-[#05060A] border-t border-slate-200/80 dark:border-white/10 relative overflow-hidden scroll-mt-24 transition-colors duration-300">
      {/* Visual Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="up">
          <SectionHeading
            eyebrow={siteContent.utility.eyebrow}
            title={siteContent.utility.headline}
            description={siteContent.utility.description}
            centered
            className="mb-14"
          />
        </Reveal>

        {/* Tab Navigation Pill Bar */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
            {siteContent.utility.utilities.map((item, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/25 scale-[1.02]"
                    : "glass-light text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-white/10 hover:border-purple-200 dark:hover:border-white/20 border border-white/80 dark:border-white/10"
                }`}
              >
                {getPillarIcon(idx)}
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Dynamic Detail Card */}
        <Reveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 glass-light border border-white/90 dark:border-white/10 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-7 flex flex-col">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 self-start border border-purple-200 dark:border-purple-500/20">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>Ecosystem Utility Pillar {activeTab + 1}</span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                    {activeUtility.title}
                  </h3>

                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {activeUtility.desc}
                  </p>

                  <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Native BNB Smart Chain smart contract execution</span>
                  </div>
                </div>

                <div className="md:col-span-5 flex flex-col gap-4 p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-inner">
                  <span className="text-xs font-mono font-bold uppercase text-purple-600 dark:text-purple-400 tracking-wider">
                    Protocol Utility Status
                  </span>
                  <div className="text-2xl sm:text-3xl font-mono font-black text-slate-900 dark:text-white">
                    Verified On-Chain
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Automated on-chain parameter updates executed across the OKNexus ecosystem on BNB Smart Chain.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
