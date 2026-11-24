"use client";

import React from "react";
import Image from "next/image";

function PartnerMark({ id }: { id: string }) {
  switch (id) {
    case "bscscan":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" aria-hidden="true">
          <rect x="4" y="5" width="4" height="14" rx="1.5" fill="currentColor" />
          <rect x="10" y="3" width="4" height="18" rx="1.5" fill="currentColor" opacity="0.6" />
          <rect x="16" y="7" width="4" height="10" rx="1.5" fill="currentColor" />
        </svg>
      );
    case "chainlink":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" aria-hidden="true">
          <polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
        </svg>
      );
    case "openzeppelin":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" aria-hidden="true">
          <path d="M12 3L19 6.5V12C19 16.5 15.8 19.6 12 21C8.2 19.6 5 16.5 5 12V6.5L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9.5 12.2L11.2 14L14.8 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "coinsniper":
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}

export function TrustStrip() {
  const partners = [
    { id: "bsc", name: "Binance Smart Chain" },
    { id: "assuredefi", name: "AssureDeFi KYC" },
    { id: "bscscan", name: "BscScan" },
    { id: "chainlink", name: "Chainlink" },
    { id: "openzeppelin", name: "OpenZeppelin" },
    { id: "coinsniper", name: "CoinSniper" },
  ];

  return (
    <section
      id="partners"
      className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-[#06070B] text-[#0F172A] dark:text-white tracking-[-0.045em] transition-colors duration-300"
    >
      <div className="max-w-[1160px] mx-auto px-4 flex flex-col items-center gap-7">
        <span className="text-sm font-medium text-[#0F172A] dark:text-slate-200 tracking-[-0.03em]">
          Powered by Binance Smart Chain &amp; Verified Infrastructure
        </span>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:items-center lg:justify-between gap-x-6 gap-y-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center gap-2.5 text-[#475569] dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white transition-colors whitespace-nowrap"
            >
              {partner.id === "bsc" ? (
                <Image
                  src="/brand/bnb_chain_logo.webp"
                  alt="Binance Smart Chain"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              ) : partner.id === "assuredefi" ? (
                <Image
                  src="/brand/assure_defi_badge.webp"
                  alt="AssureDeFi KYC"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              ) : (
                <PartnerMark id={partner.id} />
              )}
              <span className="text-sm sm:text-lg font-normal tracking-[-0.04em]">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <p className="max-w-[560px] text-center text-sm sm:text-base leading-[1.45] tracking-[-0.03em] text-[#0F172A] dark:text-slate-200">
          OKNexus connects Binance Smart Chain security,{" "}
          <span className="text-[#94A3B8] dark:text-slate-500">
            AssureDeFi KYC compliance, and AI-assisted Web3 execution into one ecosystem.
          </span>
        </p>
      </div>
    </section>
  );
}
