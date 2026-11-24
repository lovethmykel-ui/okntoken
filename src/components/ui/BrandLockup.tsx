"use client";

import Image from "next/image";
import Link from "next/link";

interface BrandLockupProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}

export function BrandLockup({ className = "", size = "md", dark = false }: BrandLockupProps) {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-7 h-7",
    lg: "w-9 h-9",
  };

  const textSizes = {
    sm: "text-sm tracking-wide",
    md: "text-base tracking-wide",
    lg: "text-lg tracking-wider",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group transition-opacity hover:opacity-90 whitespace-nowrap shrink-0 ${className}`}
    >
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <Image
          src="/brand/OKN_logo_mark_transparent.webp"
          alt="OKN Token Mark"
          fill
          sizes="36px"
          className="object-contain transition-transform duration-200 group-hover:scale-105"
          priority
        />
      </div>
      <span
        className={`font-heading font-extrabold uppercase whitespace-nowrap leading-none ${textSizes[size]} ${
          dark ? "text-white" : "text-slate-950 dark:text-white"
        }`}
      >
        OKN <span className="text-purple-600 dark:text-purple-400">TOKEN</span>
      </span>
    </Link>
  );
}
