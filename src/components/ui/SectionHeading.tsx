"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-3 ${
        centered ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/20 dark:border-purple-500/30 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse" />
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.12] ${
          dark ? "text-white" : "text-slate-950 dark:text-white"
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
            dark ? "text-slate-300" : "text-slate-600 dark:text-slate-300"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
