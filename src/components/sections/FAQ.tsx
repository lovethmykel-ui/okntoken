"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent, FaqItem } from "@/data/siteContent";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="pt-4 px-4 pb-20 lg:pb-28 bg-white dark:bg-[#06070B] text-[#0F172A] dark:text-white tracking-[-0.045em] transition-colors duration-300 scroll-mt-24"
    >
      <div className="max-w-[540px] mx-auto">
        {/* Centered Giant Light-Weight Display Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="max-w-[488px] mx-auto text-4xl sm:text-[68px] font-normal leading-[0.98] tracking-[-0.045em] mb-7 sm:mb-9 text-balance">
            Frequently asked questions
          </h2>

          <p className="max-w-[380px] mx-auto text-sm sm:text-base leading-[1.45] tracking-[-0.03em] text-[#0F172A] dark:text-slate-200">
            Everything you need to know about OKN{" "}
            <span className="text-[#94A3B8] dark:text-slate-500">
              and the presale.
            </span>
          </p>
        </div>

        {/* Clean Borderless Accordion Rows with Directional Arrow Circle Toggle (IMG_6460) */}
        <div className="flex flex-col gap-1">
          {siteContent.faq.items.map((item: FaqItem, idx: number) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isExpanded}
                  className="w-full min-h-[54px] py-2.5 text-left grid grid-cols-[1fr_26px] items-center gap-4 cursor-pointer focus-visible:outline-none group"
                >
                  <h3 className="text-base sm:text-xl font-normal leading-[1.4] tracking-[-0.035em] text-[#0F172A] dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                    {item.question}
                  </h3>

                  <span
                    className={`w-[26px] h-[26px] rounded-full border flex items-center justify-center transition-colors ${
                      isExpanded
                        ? "bg-[#0F172A] border-[#0F172A] text-white dark:bg-white dark:border-white dark:text-[#0F172A]"
                        : "bg-white border-[#0F172A] text-[#0F172A] dark:bg-[#06070B] dark:border-white/50 dark:text-white"
                    }`}
                  >
                    {isExpanded ? (
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pr-10 pb-5 text-sm leading-[1.45] tracking-[-0.02em] text-[#848484] dark:text-slate-400">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
