"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/data/siteContent";
import { ArrowRight, FileText, Sparkles, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 bg-[#06070B] text-white relative overflow-hidden scroll-mt-24">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-purple-600/35 via-fuchsia-600/25 to-cyan-500/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="up">
          <div className="rounded-3xl p-8 sm:p-14 glass-dark border border-purple-400/30 shadow-[0_30px_70px_-15px_rgba(124,58,237,0.45)] backdrop-blur-3xl text-center flex flex-col items-center relative overflow-hidden">
            {/* Ambient Radial Accent */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-600/25 rounded-full blur-3xl pointer-events-none" />

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6 border border-purple-500/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>Final Presale Stage Allocation</span>
            </div>

            {/* Floating 3D Coin Graphic */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6 flex items-center justify-center">
              <Image
                src="/brand/OKN_coin_transparent.png"
                alt="OKN Token 3D Coin"
                width={220}
                height={220}
                className="object-contain drop-shadow-[0_0_50px_rgba(124,58,237,0.85)] animate-float-subtle"
              />
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] max-w-2xl mb-4">
              {siteContent.finalCta.headlineLine1}{" "}
              <span className="gradient-text-brand block sm:inline">
                {siteContent.finalCta.headlineLine2}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-lg mb-8 leading-relaxed">
              {siteContent.finalCta.description}
            </p>

            {/* Countdown timer */}
            <div className="mb-10 p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-xl shadow-inner">
              <span className="text-xs uppercase font-bold tracking-wider text-purple-400 block mb-3 font-mono">
                Bonus Window Closes In
              </span>
              <CountdownTimer
                initialDays={2}
                initialHours={13}
                initialMinutes={53}
                initialSeconds={58}
                theme="dark"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                href="#presale"
                variant="primary"
                size="lg"
                className="font-bold shadow-xl shadow-purple-600/40 border-t border-white/30"
                icon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                {siteContent.finalCta.cta}
              </Button>

              <Button
                href="/whitepaper.pdf"
                variant="outline"
                size="lg"
                className="font-bold border border-white/20 bg-white/5 hover:bg-white/10 text-white"
                icon={<FileText className="w-4 h-4 ml-1 text-slate-300" />}
              >
                {siteContent.finalCta.secondaryCta}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
