"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
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
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-500 text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:brightness-105 active:scale-[0.98]",
    secondary:
      "bg-white/80 backdrop-blur-md text-slate-800 border border-slate-200/80 shadow-sm hover:bg-white hover:border-slate-300 hover:text-slate-900 active:scale-[0.98]",
    dark:
      "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/30 hover:brightness-110 active:scale-[0.98]",
    outline:
      "border border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30 active:scale-[0.98]",
    ghost:
      "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 active:scale-[0.98]",
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        <span>{children}</span>
        {icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
    >
      <span>{children}</span>
      {icon && <span>{icon}</span>}
    </motion.button>
  );
}
