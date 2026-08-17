"use client";

import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export function MediaStrip() {
  return (
    <section className="py-14 border-y border-slate-200/80 dark:border-white/10 bg-[#F8F9FE] dark:bg-[#06070B] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 mb-8">
          {siteContent.media.headline}
        </p>

        {/* Media Outlets Showcase */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 flex-wrap opacity-75 hover:opacity-100 transition-opacity">
          {siteContent.media.outlets.map((outlet) => (
            <div
              key={outlet.name}
              className="flex items-center gap-2 font-heading font-extrabold text-base sm:text-lg text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-default"
            >
              <span>{outlet.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
