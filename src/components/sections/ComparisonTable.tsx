"use client";

import React from "react";
import { siteContent } from "@/data/siteContent";
import { Check, Minus } from "lucide-react";

export function ComparisonTable() {
  const renderCellContent = (val: string, isOkn = false) => {
    if (val === "Yes") {
      return (
        <span
          className={`inline-flex items-center gap-1.5 font-medium ${
            isOkn
              ? "text-purple-700 dark:text-purple-300"
              : "text-[#0F172A] dark:text-slate-200"
          }`}
        >
          <Check className="w-4 h-4" />
          Yes
        </span>
      );
    }
    if (val === "No") {
      return (
        <span className="inline-flex items-center gap-1.5 text-[#94A3B8] dark:text-slate-500">
          <Minus className="w-3.5 h-3.5" />
          No
        </span>
      );
    }
    return <span className="tabular-nums">{val}</span>;
  };

  return (
    <section
      id="comparison"
      className="pt-4 pb-20 lg:pb-28 bg-white dark:bg-[#06070B] text-[#0F172A] dark:text-white transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-[1274px] mx-auto px-4">
        <div className="rounded-2xl bg-[#FAF9FF] dark:bg-[#0B0E17] border border-[#EAE7F4] dark:border-white/10 shadow-[0_14px_40px_rgba(124,58,237,0.05),0_2px_10px_rgba(15,23,42,0.03)] dark:shadow-none p-6 sm:p-10 lg:p-14">
          <div className="max-w-[680px] mb-10">
            <h2 className="text-3xl sm:text-5xl font-normal leading-[1.06] tracking-[-0.045em] text-[#0F172A] dark:text-white mb-4 text-balance">
              How OKN Token{" "}
              <span className="text-[#94A3B8] dark:text-slate-500">
                compares to AI blockchains
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-400 tracking-[-0.02em]">
              {siteContent.comparison.subhead}
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#111522] p-4 sm:p-6 border border-[#EAE7F4] dark:border-white/10 shadow-[0_8px_28px_rgba(15,23,42,0.04)] dark:shadow-none overflow-x-auto">
            <table className="w-full min-w-[700px] border-separate border-spacing-y-1 text-left text-sm">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-[13px] font-medium text-[#64748B] dark:text-slate-400">
                    {siteContent.comparison.headers[0]}
                  </th>
                  <th className="py-3 px-4 text-[13px] font-semibold text-purple-700 dark:text-purple-300 bg-[#F4F0FF] dark:bg-purple-500/15 rounded-t-md">
                    {siteContent.comparison.headers[1]}
                  </th>
                  <th className="py-3 px-4 text-[13px] font-medium text-[#64748B] dark:text-slate-400">
                    {siteContent.comparison.headers[2]}
                  </th>
                  <th className="py-3 px-4 text-[13px] font-medium text-[#64748B] dark:text-slate-400">
                    {siteContent.comparison.headers[3]}
                  </th>
                  <th className="py-3 px-4 text-[13px] font-medium text-[#64748B] dark:text-slate-400">
                    {siteContent.comparison.headers[4]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {siteContent.comparison.rows.map((row) => (
                  <tr key={row.category}>
                    <td className="py-3.5 px-4 bg-[#F9FAF9] dark:bg-white/[0.03] rounded-l-md font-medium text-[#0F172A] dark:text-white">
                      {row.category}
                    </td>
                    <td className="py-3.5 px-4 bg-[#F4F0FF]/80 dark:bg-purple-500/10 font-medium text-purple-950 dark:text-purple-200">
                      {renderCellContent(row.okn, true)}
                    </td>
                    <td className="py-3.5 px-4 bg-[#F9FAF9] dark:bg-white/[0.03] text-[#475569] dark:text-slate-300">
                      {renderCellContent(row.near)}
                    </td>
                    <td className="py-3.5 px-4 bg-[#F9FAF9] dark:bg-white/[0.03] text-[#475569] dark:text-slate-300">
                      {renderCellContent(row.render)}
                    </td>
                    <td className="py-3.5 px-4 bg-[#F9FAF9] dark:bg-white/[0.03] rounded-r-md text-[#475569] dark:text-slate-300">
                      {renderCellContent(row.bittensor)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
