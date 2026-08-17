"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/data/siteContent";
import { Check, X, Sparkles } from "lucide-react";

export function ComparisonTable() {
  const renderCellContent = (val: string) => {
    if (val === "Yes") {
      return (
        <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
          <Check className="w-4 h-4" /> Yes
        </span>
      );
    }
    if (val === "No") {
      return (
        <span className="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500">
          <X className="w-4 h-4" /> No
        </span>
      );
    }
    return <span>{val}</span>;
  };

  return (
    <section id="comparison" className="py-24 bg-gradient-to-b from-[#F8F9FE] to-[#EFF3FD] dark:from-[#06070B] dark:to-[#090C16] border-t border-slate-200/80 dark:border-white/10 relative overflow-hidden scroll-mt-24 transition-colors duration-500">
      {/* Background ambient lighting mesh for refraction */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 dark:bg-purple-600/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="up">
          <SectionHeading
            eyebrow={siteContent.comparison.eyebrow}
            title={siteContent.comparison.headline}
            description={siteContent.comparison.subhead}
            centered
            className="mb-14"
          />
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <div className="w-full overflow-x-auto rounded-3xl glass-light shadow-2xl">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-white/5">
                  <th className="py-5 px-6 font-heading text-xs uppercase tracking-wider text-slate-600 dark:text-slate-300 font-bold">
                    {siteContent.comparison.headers[0]}
                  </th>
                  <th className="py-5 px-6 font-heading text-sm font-black text-purple-700 dark:text-purple-300 bg-purple-500/15 dark:bg-purple-600/20 border-x border-purple-200/80 dark:border-purple-500/30">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span>{siteContent.comparison.headers[1]}</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 font-heading text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200 font-bold">
                    {siteContent.comparison.headers[2]}
                  </th>
                  <th className="py-5 px-6 font-heading text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200 font-bold">
                    {siteContent.comparison.headers[3]}
                  </th>
                  <th className="py-5 px-6 font-heading text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200 font-bold">
                    {siteContent.comparison.headers[4]}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/60 dark:divide-white/10 text-sm">
                {siteContent.comparison.rows.map((row) => (
                  <tr
                    key={row.category}
                    className="hover:bg-purple-500/5 dark:hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white">
                      {row.category}
                    </td>
                    <td className="py-4 px-6 font-bold text-purple-950 dark:text-purple-200 bg-purple-500/10 dark:bg-purple-600/15 border-x border-purple-200/80 dark:border-purple-500/30">
                      {renderCellContent(row.okn)}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-300">
                      {renderCellContent(row.near)}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-300">
                      {renderCellContent(row.render)}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-300">
                      {renderCellContent(row.bittensor)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
