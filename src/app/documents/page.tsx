"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal, StaggerContainer } from "@/components/ui/Reveal";
import { YouTubeIcon, TelegramIcon } from "@/components/ui/SocialIcons";
import {
  FileText,
  Map,
  Download,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Lock,
} from "lucide-react";

export default function DocumentsPage() {
  const whitepaperPoints = [
    "Token supply, allocation, and 6-month transfer lock",
    "Claim fee mechanism and community cap",
    "Merkle distributor contract architecture",
    "Revenue, buyback, and sustainability model",
  ];

  const roadmapPoints = [
    "Phase-by-phase delivery timeline (Ignition to Expansion)",
    "Community mission targets (100k+ holders and beyond)",
    "Staking and AI Trading Agent release windows",
    "Tier-1 exchange listing milestones",
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FE] dark:bg-[#050506] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden bg-gradient-to-b from-purple-50/50 via-white to-[#F8F9FE] dark:from-purple-950/20 dark:via-[#090B12] dark:to-[#050506] transition-colors duration-300">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-200/80 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Official Documentation</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
                Whitepaper &amp;{" "}
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Roadmap
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Everything you need to evaluate $OKN in one place. Review the full technical whitepaper, economic model, claim mechanics, and product roadmap below.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 2 Main Document Cards */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Whitepaper Card */}
            <Reveal direction="up" delay={0.1}>
              <div className="h-full rounded-3xl p-8 sm:p-10 glass-light border border-purple-200/80 dark:border-white/10 shadow-lg shadow-purple-950/5 flex flex-col justify-between hover:border-purple-400 dark:hover:border-purple-500/40 transition-all group">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-purple-600/10 dark:bg-purple-600/20 border border-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <FileText className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-black text-slate-900 dark:text-white">
                        Technical Whitepaper
                      </h2>
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                        PDF Specification • v2.4
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    The full technical and economic specification of $OKN: tokenomics, distribution schedule, the Chainlink-verified claim fee model, and Merkle distributor contract design.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {whitepaperPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/whitepaper.pdf"
                  download
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-bold text-sm shadow-md shadow-purple-600/20 hover:shadow-lg hover:shadow-purple-600/30 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Whitepaper</span>
                </a>
              </div>
            </Reveal>

            {/* Roadmap Card */}
            <Reveal direction="up" delay={0.2}>
              <div className="h-full rounded-3xl p-8 sm:p-10 glass-light border border-indigo-200/80 dark:border-white/10 shadow-lg shadow-indigo-950/5 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all group">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 dark:bg-indigo-600/20 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <Map className="w-7 h-7" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl font-black text-slate-900 dark:text-white">
                        Product Roadmap
                      </h2>
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        PDF Milestone Guide
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    Where $OKN is headed. Phased milestones across audited smart contracts, the Telegram mini-app, community expansion, and upcoming AI trading agents.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {roadmapPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/roadmap.pdf"
                  download
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-slate-900 dark:bg-white/10 dark:hover:bg-white/20 text-white font-bold text-sm shadow-md transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Roadmap</span>
                </a>
              </div>
            </Reveal>

          </div>
        </section>

        {/* 3 Core Trust Pillars */}
        <section className="py-12 bg-white dark:bg-[#07080D] border-y border-slate-200/80 dark:border-white/10 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Audited Contracts
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Smart contracts adhere to OpenZeppelin upgradeable standards with a UUPS proxy and CertiK/SolidProof verification.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Transparent Supply
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Full 5,000,000,000 max supply allocations and vesting schedules are publicly published on BNB Smart Chain.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Public Milestones
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  The roadmap commits to clear deliverables, liquidity locks, and verifiable on-chain community distribution rounds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Action Section */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl p-10 sm:p-14 bg-gradient-to-br from-slate-950 via-[#0C0E16] to-[#050506] text-white border border-purple-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to Join the OKNexus Movement?
            </h2>
            <p className="text-slate-300 max-w-md mx-auto mb-8 text-sm sm:text-base">
              Complete tasks, earn OK Points, and claim your tokens on BNB Smart Chain today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://t.me/OkNexusExchange"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:scale-[1.02] transition-transform"
              >
                <TelegramIcon className="w-4 h-4 text-cyan-300" />
                <span>Join Telegram Community</span>
              </a>
              <a
                href="https://www.youtube.com/@OkNexusExchange"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 border border-white/15 text-white font-bold text-sm hover:bg-white/20 transition-colors"
              >
                <YouTubeIcon className="w-4 h-4 text-red-400" />
                <span>Watch on YouTube</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
