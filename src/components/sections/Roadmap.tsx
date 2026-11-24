"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/siteContent";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

export function Roadmap() {
  const [activeIndex, setActiveIndex] = useState(1); // Highlight current In Progress phase
  const milestones = siteContent.roadmap.milestones;

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(milestones.length - 1, prev + 1));
  };

  return (
    <section
      id="roadmap"
      className="pt-4 pb-20 lg:pb-28 bg-white dark:bg-[#06070B] text-[#0F172A] dark:text-white tracking-[-0.045em] overflow-x-hidden transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-[1380px] mx-auto px-4">
        {/* Centered Header */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-4xl sm:text-5xl font-medium leading-[1.1] tracking-[-0.045em] mb-5 text-balance">
            OKN{" "}
            <span className="text-[#94A3B8] dark:text-slate-500">roadmap</span>
          </h2>
          <p className="max-w-[440px] mx-auto text-sm sm:text-base leading-[1.45] tracking-[-0.03em] text-[#0F172A] dark:text-slate-300">
            Built on milestones,{" "}
            <span className="text-[#94A3B8] dark:text-slate-500">
              engineered to deliver real infrastructure, verified security, and global liquidity.
            </span>
          </p>
        </div>

        {/* Continuous Horizontal Milestone Track Line (Desktop) */}
        <div className="relative hidden lg:grid grid-cols-4 gap-[18px] mb-10 items-center">
          <div
            aria-hidden="true"
            className="absolute top-1/2 -left-[50vw] -right-[50vw] h-[2px] -translate-y-1/2 bg-[#0F172A] dark:bg-white/30"
          />
          {milestones.map((m, idx) => {
            const isActive = activeIndex === idx;
            const isCompleted = m.status === "Completed";
            const isInProgress = m.status === "In Progress";

            return (
              <div key={m.quarter} className="relative z-10 flex justify-start pl-6">
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Select ${m.quarter}`}
                  className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                    isCompleted
                      ? "bg-purple-600 border-purple-600 text-white"
                      : isInProgress || isActive
                      ? "bg-[#F4F0FF] dark:bg-purple-500/30 border-[#0F172A] dark:border-purple-400 text-[#0F172A] dark:text-white"
                      : "bg-white dark:bg-[#06070B] border-[#0F172A] dark:border-white/40"
                  }`}
                >
                  {isCompleted && <Check className="w-3 h-3" />}
                </button>
              </div>
            );
          })}
        </div>

        {/* Phase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {milestones.map((milestone, idx) => {
            const isSelected = activeIndex === idx;
            const isInProgress = milestone.status === "In Progress";

            return (
              <div
                key={milestone.quarter}
                onClick={() => setActiveIndex(idx)}
                className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-6 ${
                  isInProgress || isSelected
                    ? "bg-gradient-to-b from-[#F5F1FF] to-white dark:from-purple-500/10 dark:to-purple-500/5 border-purple-300 dark:border-purple-400/40 shadow-[0_16px_40px_rgba(124,58,237,0.1)] dark:shadow-none"
                    : "bg-white dark:bg-[#0B0E17] border-[#EAE7F4] dark:border-white/10 shadow-[0_8px_24px_rgba(15,23,42,0.04)] dark:shadow-none hover:border-purple-300/70 hover:shadow-[0_12px_30px_rgba(124,58,237,0.08)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="font-mono text-xs font-medium tracking-normal text-[#64748B] dark:text-slate-400">
                      {milestone.quarter} · {milestone.year}
                    </span>
                    <span
                      className={`font-mono text-[11px] font-semibold uppercase tracking-[0.06em] ${
                        milestone.status === "Completed"
                          ? "text-emerald-700 dark:text-emerald-400"
                          : milestone.status === "In Progress"
                          ? "text-purple-700 dark:text-purple-300"
                          : "text-[#64748B] dark:text-slate-500"
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium tracking-[-0.03em] text-[#0F172A] dark:text-white mb-4">
                    {milestone.title}
                  </h3>

                  <ul className="space-y-2.5 tracking-[-0.02em]">
                    {milestone.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] dark:text-slate-300 leading-[1.45]"
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${
                            milestone.status === "Completed" || milestone.status === "In Progress"
                              ? "bg-purple-600 dark:bg-purple-400"
                              : "bg-slate-300 dark:bg-slate-600"
                          }`}
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-black/5 dark:border-white/10 font-mono text-[11px] tracking-normal text-[#64748B] dark:text-slate-400">
                  Phase 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Circular Prev / Next Controls (Nexchain Signature 50x50 Buttons) */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous roadmap phase"
            className="w-12 h-12 rounded-full border border-[#E8E8E8] dark:border-white/15 bg-white dark:bg-[#0B0E17] text-[#0F172A] dark:text-white flex items-center justify-center hover:border-[#0F172A] dark:hover:border-white transition-colors disabled:opacity-40 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === milestones.length - 1}
            aria-label="Next roadmap phase"
            className="w-12 h-12 rounded-full border border-[#E8E8E8] dark:border-white/15 bg-white dark:bg-[#0B0E17] text-[#0F172A] dark:text-white flex items-center justify-center hover:border-[#0F172A] dark:hover:border-white transition-colors disabled:opacity-40 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
