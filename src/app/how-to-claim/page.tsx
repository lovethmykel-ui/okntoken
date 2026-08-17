"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Reveal, StaggerContainer } from "@/components/ui/Reveal";
import {
  Send,
  Coins,
  ShieldCheck,
  CheckCircle2,
  Wallet,
  Sparkles,
  ArrowRight,
  RefreshCw,
  ExternalLink,
  Copy,
} from "lucide-react";

export default function HowToClaimPage() {
  const steps = [
    {
      num: "01",
      title: "Discover & Join on Telegram",
      desc: "Launch the official OKN Telegram App (@okntoken_bot). Your account is instantly created with zero registration friction.",
      badge: "Instant Setup",
    },
    {
      num: "02",
      title: "Earn OK Points",
      desc: "Complete community missions, daily check-ins, social follows, and refer friends across 3 levels to continuously stack OK Points.",
      badge: "Gamified Tasks",
    },
    {
      num: "03",
      title: "Connect Your BSC Wallet",
      desc: "Link your BNB Smart Chain address (MetaMask, Trust Wallet, or Binance Web3 Wallet) directly inside the mini-app.",
      badge: "BEP-20 Wallet",
    },
    {
      num: "04",
      title: "Pay Low $3 BNB Claim Fee",
      desc: "Claims require a minimal $3 fee in BNB, dynamically calculated on-chain via Chainlink Price Feeds to support treasury liquidity.",
      badge: "Chainlink Oracle",
    },
    {
      num: "05",
      title: "Receive $OKN On-Chain",
      desc: "Cumulative Merkle proofs commit your rewards to the smart contract, delivering your $OKN tokens directly into your self-custody wallet.",
      badge: "Instant Delivery",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FE] dark:bg-[#050506] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden bg-gradient-to-b from-purple-50/50 via-white to-[#F8F9FE] dark:from-purple-950/20 dark:via-[#090B12] dark:to-[#050506] transition-colors duration-300">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/30 border border-purple-200/80 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>On-Chain Reward Protocol</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white tracking-tight leading-tight mb-4">
                How to Earn &amp;{" "}
                <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Claim $OKN
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Step-by-step guide on how participation in the OKNexus ecosystem converts directly into on-chain tokens on BNB Smart Chain.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 5 Step Progression Flow */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <Reveal key={step.num} direction="up" delay={idx * 0.08}>
                <div className="p-6 sm:p-8 rounded-3xl glass-light border border-purple-200/80 dark:border-white/10 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-purple-400 dark:hover:border-purple-500/40 transition-all">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="w-12 h-12 rounded-2xl bg-purple-600/10 dark:bg-purple-600/20 text-purple-700 dark:text-purple-400 font-heading font-black text-lg flex items-center justify-center shrink-0 border border-purple-500/20">
                      {step.num}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                          {step.title}
                        </h3>
                        <span className="hidden sm:inline px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-[11px] font-bold border border-purple-200 dark:border-purple-500/30">
                          {step.badge}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400 shrink-0 hidden lg:block" />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contract & Technical Card */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-1">
                Official Contract Address (BSC)
              </span>
              <code className="font-mono text-sm sm:text-base text-slate-200 break-all select-all">
                0xBF6B0312f52fa8390Ec9393A9375BF05c8E40377
              </code>
            </div>

            <a
              href="https://bscscan.com/token/0xBF6B0312f52fa8390Ec9393A9375BF05c8E40377"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors shrink-0"
            >
              <span>View on BscScan</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* CTA Launch Card */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl p-10 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white shadow-2xl">
            <h2 className="font-heading text-3xl font-black mb-3">
              Start Stacking $OKN Now
            </h2>
            <p className="text-purple-100 max-w-md mx-auto mb-8 text-sm">
              Launch the Telegram mini app to begin completing daily tasks and climbing the leaderboard.
            </p>
            <a
              href="https://t.me/okntoken_bot?start=login"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-purple-900 font-extrabold text-sm shadow-xl hover:scale-105 transition-transform"
            >
              <Send className="w-4 h-4 text-purple-600" />
              <span>Launch Telegram App</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
