"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function TrustStrip() {
  const infraPartners = [
    { name: "BLOCKSCOUT", color: "text-[#5B45FF] dark:text-[#8B7CFF]" },
    { name: "RELAY", color: "text-[#2B6CB0] dark:text-[#63B3ED]" },
    { name: "CELESTIA", color: "text-[#7C3AED] dark:text-[#A78BFA]" },
    { name: "ARBITRUM", color: "text-[#28A0F0] dark:text-[#70C7FA]" },
    { name: "CALDERA", color: "text-[#E53E3E] dark:text-[#FC8181]" },
  ];

  return (
    <section className="py-10 bg-white/70 dark:bg-[#080B15]/75 border-y border-slate-200/80 dark:border-white/10 backdrop-blur-2xl relative z-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Security Audits Pill Block */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center lg:justify-start">
            {/* CertiK */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-light shadow-md">
              <ShieldCheck className="w-5 h-5 text-slate-800 dark:text-slate-100" />
              <div className="flex flex-col">
                <span className="text-xs font-heading font-black text-slate-900 dark:text-white leading-tight">
                  CertiK
                </span>
                <span className="text-[9px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">
                  SECURITY LEADER
                </span>
              </div>
            </div>

            {/* SolidProof */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-light shadow-md">
              <ShieldCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <div className="flex flex-col">
                <span className="text-xs font-heading font-black text-slate-900 dark:text-white leading-tight">
                  SOLIDProof
                </span>
                <span className="text-[9px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>

          {/* Center: Powered by Binance Smart Chain with Official BSC Logo */}
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl glass-light border border-amber-400/50 dark:border-amber-500/30 shadow-md shadow-amber-500/5">
            <span className="text-xs text-slate-600 dark:text-slate-300 font-semibold">Powered by</span>
            <div className="flex items-center gap-2 font-heading font-extrabold text-sm text-slate-900 dark:text-white">
              <Image
                src="/brand/bnb_chain_logo.png"
                alt="Binance Smart Chain Logo"
                width={22}
                height={22}
                className="object-contain drop-shadow-[0_0_8px_rgba(243,186,47,0.6)]"
              />
              <span className="text-slate-950 dark:text-amber-300 font-extrabold tracking-wide">
                BINANCE SMART CHAIN
              </span>
            </div>
          </div>

          {/* Right: Infrastructure Partners */}
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center text-xs font-heading font-bold text-slate-700 dark:text-slate-200">
            {infraPartners.map((partner) => (
              <span
                key={partner.name}
                className="tracking-tight hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-default"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>

        {/* Narrative Caption */}
        <p className="text-center text-xs text-slate-500 dark:text-slate-400 font-medium mt-6 max-w-2xl mx-auto leading-relaxed">
          OKNexus connects proven infrastructure, open tooling, and AI-native blockchain execution into one unified ecosystem.
        </p>
      </div>
    </section>
  );
}
