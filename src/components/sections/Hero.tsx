"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ShinyText } from "@/components/ui/ShinyText";
import { ArrowRight, Package, CheckCircle2, Sparkles } from "lucide-react";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 14;
    const y = ((clientY - top) / height - 0.5) * 14;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F8F9FE] via-[#F0F3FD] to-[#E8EDFC] dark:from-[#06070B] dark:via-[#090C16] dark:to-[#0D101E] transition-colors duration-500 scroll-mt-24"
    >
      {/* Background Graphic System: Luminous Ambient Light Meshes & Liquid Refraction Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Tech Grid with Liquid Depth */}
        <div className="absolute inset-0 bg-grid-subtle opacity-40 dark:opacity-25" />

        {/* Central Luminous Radial Orbs for Real Frosted Glass Refraction */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[900px] h-[750px] sm:h-[900px] bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-cyan-400/30 dark:from-purple-600/40 dark:via-fuchsia-600/30 dark:to-cyan-400/30 rounded-full blur-[150px] animate-pulse-subtle" />
        <div className="absolute top-1/6 left-6 w-96 h-96 bg-purple-500/20 dark:bg-purple-600/25 rounded-full blur-[130px]" />
        <div className="absolute top-1/4 right-6 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/25 rounded-full blur-[130px]" />

        {/* Holographic Dotted Globe Wireframe in Background */}
        <svg
          viewBox="0 0 1000 600"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[720px] opacity-35 dark:opacity-30 text-purple-500/60 dark:text-purple-400/50"
          fill="none"
          stroke="currentColor"
        >
          <ellipse cx="500" cy="300" rx="430" ry="240" strokeWidth="1" strokeDasharray="4 4" />
          <ellipse cx="500" cy="300" rx="350" ry="190" strokeWidth="1" strokeDasharray="6 6" />
          <ellipse cx="500" cy="300" rx="260" ry="140" strokeWidth="1.2" />
          <path d="M 70 300 Q 500 110 930 300" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M 70 300 Q 500 490 930 300" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="500" y1="50" x2="500" y2="550" strokeWidth="1" strokeDasharray="2 4" />
        </svg>

        {/* Soft Glass Horizon Glow at Bottom */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white/95 dark:from-[#06070B] via-white/50 dark:via-[#06070B]/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Master Headline, Subtitle, CTAs & BSC/KYC Badges
              ======================================================== */}
          <div className="lg:col-span-4 flex flex-col items-start z-20">
            {/* Powered by Binance Smart Chain Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-amber-400/40 dark:border-amber-500/30 mb-4 shadow-sm"
            >
              <Image
                src="/brand/bnb_chain_logo.png"
                alt="Binance Smart Chain"
                width={16}
                height={16}
                className="object-contain"
              />
              <span className="text-[11px] font-mono font-bold tracking-wide text-slate-800 dark:text-amber-300 uppercase">
                BNB Smart Chain Network
              </span>
            </motion.div>

            {/* Primary Master Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.02] mb-2"
            >
              OKN{" "}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 dark:from-purple-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
                TOKEN
              </span>
            </motion.h1>

            {/* Sub-Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-2xl sm:text-3xl lg:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-snug mb-4"
            >
              Powering the OKNexus Ecosystem
            </motion.h2>

            {/* Subtitle / Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-sm font-normal leading-relaxed mb-8"
            >
              OKN Token powers a secure, transparent and AI-powered ecosystem built for the future of digital finance on Binance Smart Chain.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 mb-8"
            >
              <Link
                href="#presale"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white font-bold text-sm shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] transition-all border-t border-white/25"
              >
                <span>Buy OKN</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#ecosystem"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl glass-light text-slate-800 dark:text-white font-bold text-sm hover:border-purple-400 dark:hover:border-purple-400/80 transition-all shadow-md"
              >
                <span>Explore Ecosystem</span>
                <Package className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </Link>
            </motion.div>

            {/* Official Assure DeFi KYC Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3.5 p-3 px-4 rounded-2xl glass-light border border-amber-300/60 dark:border-amber-500/30 shadow-md hover:border-amber-400 transition-colors"
            >
              <Image
                src="/brand/assure_defi_badge.webp"
                alt="Verified by Assure DeFi"
                width={36}
                height={36}
                className="object-contain drop-shadow-sm"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    KYC VERIFIED PROJECT
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <a
                  href="https://assuredefi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-extrabold text-amber-700 dark:text-amber-400 hover:underline"
                >
                  @AssureDeFi
                </a>
              </div>
            </motion.div>
          </div>

          {/* ========================================================
              CENTER COLUMN: 3D Master Coin on Glowing Liquid Pedestal
              ======================================================== */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] my-6 lg:my-0">
            {/* Ambient Radial Halo & Concentric Neon Pedestal Rings */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-32 sm:h-44 pointer-events-none">
              <div className="absolute inset-0 rounded-[100%] bg-gradient-to-r from-purple-500/35 via-fuchsia-500/45 to-cyan-500/35 dark:from-purple-500/50 dark:via-fuchsia-500/60 dark:to-cyan-500/50 border border-purple-400/60 blur-xs shadow-[0_0_80px_rgba(124,58,237,0.65)]" />
              <div className="absolute inset-2 sm:inset-3 rounded-[100%] bg-gradient-to-b from-white/70 dark:from-white/30 to-purple-600/30 border border-white/95 dark:border-white/40 backdrop-blur-xl shadow-inner" />
              <div className="absolute inset-6 rounded-[100%] bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 opacity-85 blur-md animate-pulse" />
            </div>

            {/* Orbiting Satellite Token 1 (Top-Left) */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                x: [0, 8, 0],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-4 sm:left-6 w-11 h-11 rounded-full z-10 opacity-95 drop-shadow-[0_0_20px_rgba(124,58,237,0.9)]"
            >
              <Image
                src="/brand/OKN_coin_transparent.png"
                alt="Mini Token Orbiter"
                width={44}
                height={44}
                className="object-contain"
              />
            </motion.div>

            {/* Orbiting Satellite Token 2 (Bottom-Right) */}
            <motion.div
              animate={{
                y: [0, 12, 0],
                x: [0, -8, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-14 right-4 sm:right-6 w-9 h-9 rounded-full z-10 opacity-90 drop-shadow-[0_0_16px_rgba(6,182,212,0.9)]"
            >
              <Image
                src="/brand/OKN_coin_transparent.png"
                alt="Mini Token Orbiter"
                width={36}
                height={36}
                className="object-contain"
              />
            </motion.div>

            {/* Master 3D Coin Showcase with Interactive 3D Perspective Tilt */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
              }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 xl:w-96 xl:h-96 z-20 transition-transform duration-200 ease-out flex items-center justify-center"
            >
              <Image
                src="/brand/OKN_coin_transparent.png"
                alt="OKN 3D Master Coin"
                width={400}
                height={400}
                className="object-contain drop-shadow-[0_30px_60px_rgba(124,58,237,0.5)] dark:drop-shadow-[0_30px_70px_rgba(124,58,237,0.85)] animate-float-subtle relative z-20"
                priority
              />
            </motion.div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Dedicated ReactBits Spotlight Presale Card
              ======================================================== */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end z-20">
            <SpotlightCard
              id="presale"
              spotlightColor="rgba(124, 58, 237, 0.25)"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-sm rounded-3xl p-6 sm:p-7 relative overflow-hidden backdrop-blur-3xl"
            >
              {/* Card Top Title */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  $0.05 ENTRY WINDOW
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold border border-emerald-200 dark:border-emerald-500/30">
                  Live Stage
                </span>
              </div>

              {/* Inner Stage Card Box */}
              <div className="p-4 rounded-2xl bg-white/90 dark:bg-white/10 border border-purple-200/60 dark:border-white/15 shadow-sm mb-4">
                <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300 block mb-0.5">
                  Current Entry
                </span>
                <div className="text-xl font-heading font-black text-slate-900 dark:text-white leading-tight">
                  $0.05{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-300 bg-clip-text text-transparent">
                    ENTRY WINDOW
                  </span>
                </div>
              </div>

              {/* 3-Column Price Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 mb-4 text-center">
                <div className="flex flex-col">
                  <span className="text-base font-mono font-black text-slate-900 dark:text-white">
                    $0.05
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                    Current stage
                  </span>
                </div>

                <div className="flex flex-col border-x border-slate-200 dark:border-white/15">
                  <span className="text-base font-mono font-black text-slate-900 dark:text-white">
                    $0.08
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                    Next stage
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-base font-mono font-black text-purple-700 dark:text-purple-300">
                    +$0.30
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 leading-tight">
                    +500% Gain
                  </span>
                </div>
              </div>

              {/* Countdown Timer Block */}
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/5 border border-purple-100 dark:border-white/10 mb-5">
                <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300 block mb-2">
                  Ends in
                </span>
                <CountdownTimer
                  initialDays={2}
                  initialHours={13}
                  initialMinutes={53}
                  initialSeconds={58}
                  theme="light"
                />
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 font-medium mt-3 pt-3 border-t border-slate-200/70 dark:border-white/10">
                  <span className="text-purple-700 dark:text-purple-300 font-bold">$17M+ raised</span>
                  <span>19,523 investors</span>
                </div>
              </div>

              {/* Join Presale CTA Button */}
              <Button
                href="#presale"
                variant="primary"
                size="lg"
                className="w-full rounded-2xl py-3.5 font-bold shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 border-t border-white/25"
              >
                Join Presale
              </Button>
            </SpotlightCard>
          </div>

        </div>
      </div>
    </section>
  );
}
