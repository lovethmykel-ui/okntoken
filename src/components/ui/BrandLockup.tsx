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
    sm: 28,
    md: 36,
    lg: 48,
  };

  const textSizes = {
    sm: "text-base tracking-wider",
    md: "text-xl tracking-wider",
    lg: "text-2xl tracking-widest",
  };

  return (
    <Link
      href="#hero"
      className={`inline-flex items-center gap-3 group transition-opacity hover:opacity-90 ${className}`}
    >
      <div className="relative flex items-center justify-center">
        <Image
          src="/brand/OKN_logo_mark_transparent.png"
          alt="OKN Token Mark"
          width={iconSizes[size]}
          height={iconSizes[size]}
          className="object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span
          className={`font-heading font-extrabold uppercase ${textSizes[size]} ${
            dark ? "text-white" : "text-slate-900 dark:text-white"
          }`}
        >
          OKN <span className="text-purple-600 dark:text-purple-400">TOKEN</span>
        </span>
      </div>
    </Link>
  );
}
