"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteContent, FaqItem } from "@/data/siteContent";
import { ChevronDown, Search } from "lucide-react";

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const filteredItems = siteContent.faq.items.filter((item: FaqItem) => {
    return (
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const toggleItem = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-[#EFF3FD] via-[#F8F9FE] to-[#EFF3FD] dark:from-[#06070B] dark:via-[#090C16] dark:to-[#06070B] border-t border-slate-200/80 dark:border-white/10 relative overflow-hidden scroll-mt-24 transition-colors duration-500"
    >
      {/* Refractive Ambient Mesh */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/15 dark:bg-purple-600/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal direction="up">
          <SectionHeading
            eyebrow={siteContent.faq.eyebrow}
            title={siteContent.faq.headline}
            description={siteContent.faq.description}
            centered
            className="mb-12"
          />
        </Reveal>

        {/* Search Bar with Liquid Glass */}
        <Reveal direction="up" delay={0.1}>
          <div className="flex items-center justify-center mb-10">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-600 dark:text-purple-400" />
              <input
                type="text"
                placeholder="Search questions & answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-5 py-3 rounded-full glass-light text-sm text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 shadow-md"
              />
            </div>
          </div>
        </Reveal>

        {/* Accordion Stack with Apple Liquid Glass OS */}
        <Reveal direction="up" delay={0.15}>
          <div className="space-y-4">
            {filteredItems.map((item: FaqItem, idx: number) => {
              const isExpanded = expandedIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-3xl glass-light shadow-md overflow-hidden transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-400/60"
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <span className="font-heading text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                      {item.question}
                    </span>
                    <span
                      className={`w-9 h-9 rounded-full bg-purple-500/10 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0 border border-purple-500/20 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 bg-purple-600 text-white dark:bg-purple-600" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-white/10">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="p-12 text-center text-slate-500 glass-light rounded-3xl">
                No questions found matching your query.
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
