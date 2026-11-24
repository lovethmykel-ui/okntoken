"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "white" | "violet" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  external?: boolean;
  withArrowCircle?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  icon,
  disabled = false,
  external = false,
  withArrowCircle = true,
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-between font-medium rounded-full transition-all duration-200 cursor-pointer select-none whitespace-nowrap shrink-0 tracking-[-0.03em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const paddingStyles = withArrowCircle
    ? {
        sm: "text-sm pl-4 pr-1.5 py-1.5 gap-3",
        md: "text-[15px] pl-5 pr-2 py-2 gap-3.5",
        lg: "text-base pl-6 pr-2.5 py-2.5 gap-4",
      }
    : {
        sm: "text-sm px-4 py-2 gap-2 justify-center",
        md: "text-[15px] px-5 py-2.5 gap-2 justify-center",
        lg: "text-base px-6 py-3 gap-2 justify-center",
      };

  const circleSizes = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-9 h-9",
  };

  const variantStyles = {
    primary:
      "bg-[#0F172A] text-white border border-[#0F172A] hover:bg-purple-700 hover:border-purple-700 dark:bg-white dark:text-[#0F172A] dark:border-white dark:hover:bg-purple-100",
    dark:
      "bg-[#0F172A] text-white border border-[#0F172A] hover:bg-slate-800 dark:bg-white dark:text-[#0F172A] dark:border-white dark:hover:bg-slate-200",
    white:
      "bg-white text-[#0F172A] border border-[#E8E8E8] hover:bg-slate-100",
    violet:
      "bg-purple-600 text-white border border-purple-600 hover:bg-purple-500 hover:border-purple-500",
    secondary:
      "bg-[#F9FAF9] dark:bg-white/[0.06] text-[#0F172A] dark:text-white border border-[#E8E8E8] dark:border-white/15 hover:bg-slate-100 dark:hover:bg-white/12",
    outline:
      "bg-transparent text-white border border-white/25 hover:bg-white/10 hover:border-white/40",
    ghost:
      "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5",
  };

  const circleColors = {
    primary:
      "bg-white text-[#0F172A] dark:bg-[#0F172A] dark:text-white",
    dark:
      "bg-white text-[#0F172A] dark:bg-[#0F172A] dark:text-white",
    white: "bg-[#0F172A] text-white",
    violet: "bg-white text-purple-700",
    secondary:
      "bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A]",
    outline: "bg-white text-[#0F172A]",
    ghost: "bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A]",
  };

  const combinedClass = `${baseStyles} ${paddingStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span className="flex-1 text-center">{children}</span>
      {withArrowCircle ? (
        <span
          className={`rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${circleSizes[size]} ${circleColors[variant]}`}
        >
          {icon ?? <ArrowRight className="w-3.5 h-3.5" />}
        </span>
      ) : (
        icon && <span className="shrink-0">{icon}</span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
    >
      {content}
    </button>
  );
}
