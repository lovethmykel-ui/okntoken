"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { Zap, Layers, Coins, Bot, Check } from "lucide-react";

export function Utility() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Zap className="w-4 h-4" />;
      case 1:
        return <Layers className="w-4 h-4" />;
      case 2:
        return <Coins className="w-4 h-4" />;
      case 3:
      default:
        return <Bot className="w-4 h-4" />;
    }
  };

  const activeUtility =
    siteContent.utility.utilities[activeTab] || siteContent.utility.utilities[0];

  return (
    <section
      id="utility"
      className="pt-4 pb-20 lg:pb-28 bg-white dark:bg-[#06070B] text-[#0F172A] dark:text-white transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-[1274px] mx-auto px-4">
        <div className="max-w-[680px] mb-10">
          <h2 className="text-3xl sm:text-5xl font-normal leading-[1.06] tracking-[-0.045em] text-[#0F172A] dark:text-white mb-4 text-balance">
            The power behind{" "}
            <span className="text-[#94A3B8] dark:text-slate-500">
              every network interaction
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-400 tracking-[-0.02em] leading-[1.45]">
            {siteContent.utility.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl border border-[#EAE7F4] dark:border-white/10 bg-[#FAF9FF] dark:bg-[#0B0E17] shadow-[0_14px_40px_rgba(124,58,237,0.05),0_2px_10px_rgba(15,23,42,0.03)] dark:shadow-none overflow-hidden">
          {/* Left 5 Cols: Selector List */}
          <div className="lg:col-span-5 divide-y divide-[#EAE7F4] dark:divide-white/10 border-b lg:border-b-0 lg:border-r border-[#EAE7F4] dark:border-white/10">
            {siteContent.utility.utilities.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-6 flex items-center justify-between gap-4 transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#F4F0FF] dark:bg-purple-500/12 text-[#0F172A] dark:text-white"
                      : "text-[#64748B] dark:text-slate-400 hover:bg-white/60 dark:hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className={`font-mono text-xs font-medium shrink-0 ${
                        isActive
                          ? "text-purple-700 dark:text-purple-300"
                          : "text-[#94A3B8] dark:text-slate-500"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="text-base font-medium tracking-[-0.03em] truncate">
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ${
                      isActive
                        ? "border-purple-300 dark:border-purple-400/40 bg-white dark:bg-[#06070B] text-purple-700 dark:text-purple-300"
                        : "border-[#E8E8E8] dark:border-white/10 text-[#94A3B8] dark:text-slate-500"
                    }`}
                  >
                    {getPillarIcon(idx)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right 7 Cols: Detail Panel */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-white dark:bg-[#0B0E17]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="flex flex-col justify-between h-full gap-8"
              >
                <div>
                  <span className="text-xs font-mono uppercase text-purple-600 dark:text-purple-400 block mb-3">
                    Utility Pillar 0{activeTab + 1}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-[-0.04em] text-[#0F172A] dark:text-white mb-4">
                    {activeUtility.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-300 leading-[1.5] tracking-[-0.02em] max-w-xl">
                    {activeUtility.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E8E8E8] dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-[#475569] dark:text-slate-300">
                    <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                    <span>Native BNB Smart Chain settlement</span>
                  </div>
                  <span className="font-mono text-xs text-purple-700 dark:text-purple-300">
                    Verified On-Chain
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
