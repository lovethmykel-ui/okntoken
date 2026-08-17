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
    md: "w-7 h-7 md:w-9 md:h-9",
    lg: "w-10 h-10 md:w-12 md:h-12",
  };

  const textSizes = {
    sm: "text-base tracking-wider",
    md: "text-lg md:text-xl tracking-wider",
    lg: "text-xl md:text-2xl tracking-widest",
  };

  return (
    <Link
      href="#hero"
      className={`inline-flex items-center gap-2 md:gap-3 group transition-opacity hover:opacity-90 ${className}`}
    >
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <Image
          src="/brand/OKN_logo_mark_transparent.png"
          alt="OKN Token Mark"
          fill
          className="object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        <span
          className={`font-heading font-extrabold uppercase whitespace-nowrap leading-none ${textSizes[size]} ${
            dark ? "text-white" : "text-slate-900 dark:text-white"
          }`}
        >
          OKN <span className="text-purple-600 dark:text-purple-400">TOKEN</span>
        </span>
      </div>
    </Link>
  );
}
