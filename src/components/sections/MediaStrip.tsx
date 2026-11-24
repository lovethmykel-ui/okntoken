"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";

function OutletLogo({ name }: { name: string }) {
  switch (name) {
    case "CoinSniper":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8" className="stroke-purple-600 dark:stroke-purple-400" strokeWidth="1.9" />
          <circle cx="12" cy="12" r="2.6" className="fill-purple-600 dark:fill-purple-400" />
          <path d="M12 2V5M12 19V22M2 12H5M19 12H22" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "BscScan":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" aria-hidden="true">
          <rect x="4" y="5" width="4" height="14" rx="1.5" className="fill-current" />
          <rect x="10" y="3" width="4" height="18" rx="1.5" className="fill-purple-600 dark:fill-purple-400" />
          <rect x="16" y="7" width="4" height="10" rx="1.5" className="fill-current" />
        </svg>
      );
    case "AssureDeFi":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" aria-hidden="true">
          <path d="M12 3L19 6.5V12C19 16.5 15.8 19.6 12 21C8.2 19.6 5 16.5 5 12V6.5L12 3Z" className="stroke-current" strokeWidth="1.8" />
          <path d="M9.2 12.2L11.2 14.2L15 10" className="stroke-purple-600 dark:stroke-purple-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "BNB Smart Chain":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" aria-hidden="true">
          <polygon points="12,4 16,8 12,12 8,8" className="fill-purple-600 dark:fill-purple-400" />
          <polygon points="6,12 9,9 12,12 9,15" className="fill-current" />
          <polygon points="18,12 15,9 12,12 15,15" className="fill-current" />
          <polygon points="12,20 16,16 12,12 8,16" className="fill-purple-600 dark:fill-purple-400" />
        </svg>
      );
    case "OKNexus Exchange":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="4" className="stroke-current" strokeWidth="1.8" />
          <path d="M8 14L11.5 10.5L14 13L17 9.5" className="stroke-cyan-600 dark:stroke-cyan-400" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Telegram Mini-App":
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" aria-hidden="true">
          <path d="M20 5L3.5 11.4L9.5 13.7L17.5 7.5L11.5 14.8L16.5 18.6L20 5Z" className="stroke-purple-600 dark:stroke-purple-400" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function MediaStrip() {
  const outlets = siteContent.media.outlets;

  return (
    <section
      id="featured"
      className="pb-20 lg:pb-28 bg-white dark:bg-[#06070B] text-[#0F172A] dark:text-white tracking-[-0.045em] overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1380px] mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-[40px] font-medium leading-[1.3] tracking-[-0.045em] mb-8">
          Featured &amp; verified on
        </h2>

        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-featured-scroll flex items-center gap-12 sm:gap-16 py-2">
            {[...outlets, ...outlets, ...outlets, ...outlets].map((outlet, idx) => (
              <a
                key={`${outlet.name}-${idx}`}
                href={outlet.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[#475569] dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 transition-colors whitespace-nowrap shrink-0"
              >
                <OutletLogo name={outlet.name} />
                <span className="text-lg sm:text-2xl font-medium tracking-[-0.04em]">
                  {outlet.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
