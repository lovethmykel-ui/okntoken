"use client";

import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  mutedTitle?: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  mutedTitle,
  description,
  centered = false,
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        centered ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <span className="text-xs font-medium tracking-[-0.02em] text-purple-600 dark:text-purple-400">
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-[-0.045em] leading-[1.06] [text-wrap:balance] ${
          dark ? "text-white" : "text-[#0F172A] dark:text-white"
        }`}
      >
        {title}
        {mutedTitle && (
          <>
            {" "}
            <span className={dark ? "text-slate-400" : "text-[#94A3B8] dark:text-slate-500"}>
              {mutedTitle}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p
          className={`text-sm sm:text-base max-w-[460px] leading-[1.45] tracking-[-0.03em] font-normal ${
            dark ? "text-slate-400" : "text-[#64748B] dark:text-slate-400"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
