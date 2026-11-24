"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ExternalLink, ShieldCheck } from "lucide-react";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { estimatePresaleAllocation } from "@/lib/tokenomicsMath";

const SHIMMER_CELLS = [
  { col: 1, row: 0, delay: "0s" },
  { col: 3, row: 1, delay: "1.4s" },
  { col: 5, row: 0, delay: "2.8s" },
  { col: 2, row: 2, delay: "0.7s" },
  { col: 4, row: 2, delay: "2.1s" },
  { col: 0, row: 1, delay: "3.5s" },
];

export function Hero() {
  const [showEstimator, setShowEstimator] = useState(false);
  const [payCurrency, setPayCurrency] = useState<"USDT" | "BNB">("USDT");
  const [amountInput, setAmountInput] = useState<string>("500");

  const { estimatedOkn, listingValue } = estimatePresaleAllocation(amountInput, payCurrency);

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100dvh-70px)] py-8 sm:py-12 bg-gradient-to-b from-white via-[#FAF9FF] to-white dark:bg-[#06070B] dark:from-[#06070B] dark:via-[#06070B] dark:to-[#06070B] border-t border-[#ECEAEF] dark:border-white/10 border-b flex items-center overflow-hidden transition-colors duration-300"
    >
      {/* Full-bleed 235px architectural grid + subtle shimmering purple cells */}
      <div className="absolute inset-0 pointer-events-none hero-grid-pattern" aria-hidden="true">
        <div className="hidden lg:grid grid-cols-6 grid-rows-3 w-full h-full">
          {Array.from({ length: 18 }).map((_, idx) => {
            const col = idx % 6;
            const row = Math.floor(idx / 6);
            const match = SHIMMER_CELLS.find((c) => c.col === col && c.row === row);
            return (
              <div
                key={idx}
                className={match ? "hero-cell-pulse" : ""}
                style={match ? { animationDelay: match.delay } : undefined}
              />
            );
          })}
        </div>
      </div>

      {/* Luminous Soft Lavender & Cyan Corner Glows for Tactile Depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 46% 74% at 8% 18%, rgba(124, 58, 237, 0.13) 0%, rgba(124, 58, 237, 0.05) 36%, transparent 68%), radial-gradient(ellipse 46% 76% at 92% 18%, rgba(6, 182, 212, 0.13) 0%, rgba(99, 102, 241, 0.06) 36%, transparent 68%)",
        }}
      />

      {/* Flanking 3D OKN Tokens on Wide Desktops */}
      <div
        aria-hidden="true"
        className="hidden xl:block pointer-events-none absolute left-[7%] bottom-[14%] w-28 h-28 opacity-90"
      >
        <Image
          src="/brand/OKN_coin_transparent.webp"
          alt=""
          width={112}
          height={112}
          priority
          className="object-contain -rotate-12 animate-float-subtle drop-shadow-[0_22px_36px_rgba(124,58,237,0.22)]"
        />
      </div>
      <div
        aria-hidden="true"
        className="hidden xl:block pointer-events-none absolute right-[7%] top-[18%] w-24 h-24 opacity-85"
      >
        <Image
          src="/brand/OKN_coin_transparent.webp"
          alt=""
          width={96}
          height={96}
          priority
          className="object-contain rotate-12 animate-float-subtle drop-shadow-[0_22px_36px_rgba(6,182,212,0.22)]"
        />
      </div>

      {/* Centered Narrow Editorial Stack */}
      <div className="w-full max-w-[820px] mx-auto px-4 relative z-10 flex flex-col items-center gap-4 sm:gap-5">
        {/* Clean Unboxed Editorial Kicker */}
        <p className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-[0.14em] text-purple-700 dark:text-purple-300">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" aria-hidden="true" />
          Stage 1 Live · $0.05 Entry Window
        </p>

        {/* Centered Stacked Display Headline */}
        <div className="flex flex-col items-center gap-3.5 sm:gap-4 text-center">
          <h1 className="text-[42px] sm:text-[62px] font-medium leading-[0.98] tracking-[-0.045em] text-[#0F172A] dark:text-white text-balance">
            <span className="block">OKN Token</span>
            <span className="block">AI-Native Ecosystem</span>
          </h1>

          <p className="max-w-[520px] text-sm sm:text-base font-normal leading-[1.48] tracking-[-0.02em] text-[#475569] dark:text-slate-300 text-balance">
            Powered by Binance Smart Chain and KYC verified by AssureDeFi — uniting OKNexus Exchange, 24/7 AI trading agents, and a 28K+ Telegram community.
          </p>
        </div>

        {/* Elevated Light-Mode Presale Card with Layered Depth */}
        <div
          id="presale"
          className="w-full max-w-[488px] mt-1 p-5 sm:p-6 rounded-2xl border border-[#E6E3F1] dark:border-white/12 bg-white dark:bg-[#0B0E17]/95 shadow-[0_24px_60px_rgba(124,58,237,0.09),0_6px_18px_rgba(15,23,42,0.04)] dark:shadow-[0_18px_70px_rgba(0,0,0,0.45)] scroll-mt-24"
        >
          {/* Card Header */}
          <div className="flex items-center justify-between gap-3 mb-3.5">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.08em] text-purple-700 dark:text-purple-300">
              Current Entry
            </span>

            <div className="flex items-center gap-1.5 text-xs text-[#64748B] dark:text-slate-400">
              <Image
                src="/brand/bnb_chain_logo.webp"
                alt="Binance Smart Chain"
                width={15}
                height={15}
                priority
                className="object-contain"
              />
              <span className="font-medium text-[#0F172A] dark:text-slate-200">
                Binance Smart Chain
              </span>
            </div>
          </div>

          {/* Soft Lavender Highlight Price Box */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#F5F2FF] via-[#F2F0FF] to-[#EEF6FF] dark:bg-purple-500/12 border border-purple-500/18 dark:border-purple-400/25">
            <span className="block text-[11px] font-medium uppercase tracking-[0.03em] text-[#475569] dark:text-purple-200/80">
              $0.05 Entry · Next $0.08 · Listing $0.30
            </span>

            <div className="flex items-end justify-between gap-4 mt-2.5">
              <strong className="text-[40px] leading-[0.9] font-medium tracking-[-0.03em] tabular-nums text-[#0F172A] dark:text-white">
                $0.05
              </strong>

              <div className="text-right tabular-nums leading-snug">
                <span className="block text-sm font-medium text-[#0F172A] dark:text-white">
                  ~$17M+ <span className="font-normal text-[#64748B] dark:text-slate-400">raised</span>
                </span>
                <span className="block text-xs font-medium text-[#0F172A] dark:text-slate-200">
                  19,523 <span className="font-normal text-[#64748B] dark:text-slate-400">investors</span>
                </span>
              </div>
            </div>

            {/* Clean Progress Hairline */}
            <div className="mt-3.5 w-full h-1.5 rounded-full bg-purple-950/10 dark:bg-white/10 overflow-hidden">
              <div className="w-[74%] h-full rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-500" />
            </div>

            <div className="mt-3 flex items-center justify-between gap-2 text-[11px] text-[#475569] dark:text-purple-200/80">
              <span>Stage window ends in</span>
              <CountdownTimer theme="compact" className="text-xs text-[#0F172A] dark:text-white" />
            </div>
          </div>

          {/* Interactive Allocation Estimator Toggle */}
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setShowEstimator(!showEstimator)}
              aria-expanded={showEstimator}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium text-[#475569] dark:text-slate-300 hover:bg-[#FAF9FF] dark:hover:bg-white/[0.04] transition-colors cursor-pointer"
            >
              <span>Calculate OKN allocation &amp; TGE value</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  showEstimator ? "rotate-180" : ""
                }`}
              />
            </button>

            {showEstimator && (
              <div className="mt-2 p-3 rounded-xl border border-[#E6E3F1] dark:border-white/10 bg-[#FAF9FF] dark:bg-white/[0.03] space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <input
                    type="number"
                    min="0"
                    step="any"
                    value={amountInput}
                    onChange={(e) => setAmountInput(e.target.value)}
                    aria-label={`Amount in ${payCurrency}`}
                    className="w-full bg-white dark:bg-[#06070B] border border-[#E2DFEE] dark:border-white/10 rounded-lg px-3 py-1.5 text-sm font-medium tabular-nums text-[#0F172A] dark:text-white focus:outline-none focus:border-purple-500"
                    placeholder="500"
                  />
                  <div className="inline-flex rounded-lg border border-[#E2DFEE] dark:border-white/10 bg-white dark:bg-[#06070B] p-0.5 shrink-0">
                    {(["USDT", "BNB"] as const).map((cur) => (
                      <button
                        key={cur}
                        type="button"
                        onClick={() => setPayCurrency(cur)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                          payCurrency === cur
                            ? "bg-[#0F172A] text-white dark:bg-purple-600"
                            : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        {cur}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs tabular-nums">
                  <span className="text-[#64748B] dark:text-slate-400">
                    Estimated tokens
                  </span>
                  <span className="font-medium text-[#0F172A] dark:text-white">
                    {estimatedOkn.toLocaleString(undefined, { maximumFractionDigits: 0 })} OKN{" "}
                    <span className="text-purple-700 dark:text-purple-300">
                      (${listingValue.toLocaleString(undefined, { maximumFractionDigits: 0 })} at TGE)
                    </span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Single Dominant Primary CTA */}
          <div className="mt-3">
            <a
              href="https://t.me/okntoken_bot?start=login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-full bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] text-[15px] font-medium shadow-[0_8px_20px_rgba(15,23,42,0.16)] hover:bg-purple-700 dark:hover:bg-purple-100 transition-colors group"
            >
              <span>Join Presale</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <div className="mt-2.5 flex items-center justify-center gap-4 text-xs text-[#475569] dark:text-slate-400">
              <Link
                href="#ecosystem"
                className="hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
              >
                Explore Ecosystem
              </Link>
              <span aria-hidden="true" className="text-[#CBD5E1] dark:text-slate-700">·</span>
              <Link
                href="/how-to-claim"
                className="hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
              >
                How to Claim
              </Link>
            </div>
          </div>

          {/* Unified Single-Row Verification Strip (AssureDeFi KYC · BscScan · CoinSniper) */}
          <div className="mt-4 pt-3.5 border-t border-[#ECEAF4] dark:border-white/10 grid grid-cols-3 divide-x divide-[#ECEAF4] dark:divide-white/10 text-center">
            <a
              href="https://assuredefi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-1.5 text-[11px] text-[#475569] dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 transition-colors whitespace-nowrap"
            >
              <Image
                src="/brand/assure_defi_badge.webp"
                alt="AssureDeFi KYC"
                width={13}
                height={13}
                className="object-contain shrink-0"
              />
              <span className="font-medium text-[#0F172A] dark:text-white">AssureDeFi</span>
            </a>

            <a
              href="https://bscscan.com/token/0xBF6B0312f52fa8390Ec9393A9375BF05c8E40377"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-1.5 text-[11px] text-[#475569] dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 transition-colors whitespace-nowrap"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
              <span className="font-medium text-[#0F172A] dark:text-white">BscScan</span>
            </a>

            <a
              href="https://coinsniper.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 px-1.5 text-[11px] text-[#475569] dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 transition-colors whitespace-nowrap"
            >
              <span className="font-medium text-[#0F172A] dark:text-white">CoinSniper</span>
              <ExternalLink className="w-3 h-3 text-[#64748B] shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
