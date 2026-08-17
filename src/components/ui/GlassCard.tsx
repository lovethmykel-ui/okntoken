"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: "light" | "dark" | "gradient-border" | "subtle" | "dark-subtle";
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  variant = "light",
  className = "",
  hoverEffect = true,
  ...motionProps
}: GlassCardProps) {
  const variantStyles = {
    light:
      "glass-light",
    dark:
      "glass-dark text-white",
    "gradient-border":
      "glass-light relative overflow-hidden before:absolute before:inset-0 before:p-[1px] before:rounded-3xl before:bg-gradient-to-tr before:from-purple-500/30 before:via-pink-500/20 before:to-cyan-500/30 before:pointer-events-none",
    subtle:
      "glass-light-subtle",
    "dark-subtle":
      "glass-dark-subtle text-white",
  };

  const hoverClass = hoverEffect
    ? "glass-interactive"
    : "";

  return (
    <motion.div
      className={`rounded-3xl p-6 sm:p-8 ${variantStyles[variant]} ${hoverClass} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
