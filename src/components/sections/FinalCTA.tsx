"use client";

import React from "react";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { ArrowUpRight } from "lucide-react";
import { CountdownTimer } from "@/components/ui/CountdownTimer";

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="px-4 pb-16 sm:pb-20 bg-white dark:bg-[#06070B] transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="relative isolate min-h-[420px] sm:min-h-[455px] px-6 sm:px-12 py-12 rounded-2xl overflow-hidden bg-[#080711] border border-purple-500/20 shadow-[0_28px_70px_rgba(15,23,42,0.16)] grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-10">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 90% at 86% 50%, rgba(124, 58, 237, 0.38) 0%, rgba(79, 70, 229, 0.20) 40%, rgba(6, 182, 212, 0.12) 65%, transparent 85%)",
            }}
          />

          {/* Left Copy */}
          <div className="relative z-10 text-center lg:text-left">
            <span className="inline-block text-xs font-mono uppercase tracking-[0.14em] text-purple-300 mb-3">
              Final Presale Stage Allocation
            </span>
            <h2 className="max-w-[660px] mx-auto lg:mx-0 text-4xl sm:text-6xl lg:text-[74px] font-normal leading-[1.03] tracking-[-0.045em] text-white mb-6 sm:mb-8 text-balance">
              {siteContent.finalCta.headlineLine1}
              <span className="block bg-gradient-to-r from-[#C084FC] via-[#818CF8] to-[#22D3EE] bg-clip-text text-transparent">
                {siteContent.finalCta.headlineLine2}
              </span>
            </h2>

            <p className="max-w-[400px] mx-auto lg:mx-0 text-sm sm:text-base font-medium leading-[1.45] tracking-[-0.02em] text-slate-200">
              {siteContent.finalCta.description}{" "}
              <span className="text-purple-400">$0.05 Stage 1 entry active.</span>
            </p>
          </div>

          {/* Right Countdown + Pill Action Pair */}
          <div className="relative z-10 flex flex-col items-center lg:items-end gap-5 min-w-0 sm:min-w-[300px]">
            <CountdownTimer theme="dark" className="max-w-[300px]" />

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3">
              <a
                href="https://t.me/okntoken_bot?start=login"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-purple-600 text-white text-[15px] font-medium tracking-[-0.03em] hover:bg-purple-500 transition-colors whitespace-nowrap"
              >
                <span>{siteContent.finalCta.cta}</span>
                <span className="w-8 h-8 rounded-full bg-white text-purple-700 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <Link
                href="/documents"
                className="group inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-white text-[#0F172A] text-[15px] font-medium tracking-[-0.03em] hover:bg-slate-100 transition-colors whitespace-nowrap"
              >
                <span>{siteContent.finalCta.secondaryCta}</span>
                <span className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
