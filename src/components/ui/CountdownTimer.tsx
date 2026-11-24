"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  initialDays?: number;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  theme?: "light" | "dark" | "compact";
  className?: string;
}

export function CountdownTimer({
  initialDays = 2,
  initialHours = 13,
  initialMinutes = 53,
  initialSeconds = 58,
  theme = "light",
  className = "",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: initialDays,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  if (theme === "compact") {
    return (
      <div className={`inline-flex items-center gap-1.5 font-mono tabular-nums text-sm font-semibold tracking-wide ${className}`}>
        <span>{formatNumber(timeLeft.days)}d</span>
        <span>:</span>
        <span>{formatNumber(timeLeft.hours)}h</span>
        <span>:</span>
        <span>{formatNumber(timeLeft.minutes)}m</span>
        <span>:</span>
        <span>{formatNumber(timeLeft.seconds)}s</span>
      </div>
    );
  }

  const isDarkTheme = theme === "dark";

  const items = [
    { label: "Days", value: formatNumber(timeLeft.days), isSec: false },
    { label: "Hours", value: formatNumber(timeLeft.hours), isSec: false },
    { label: "Mins", value: formatNumber(timeLeft.minutes), isSec: false },
    { label: "Secs", value: formatNumber(timeLeft.seconds), isSec: true },
  ];

  return (
    <div className={`grid grid-cols-4 gap-2 w-full ${className}`}>
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center min-w-0">
          <div
            className={`w-full py-2.5 rounded-xl flex items-center justify-center font-mono tabular-nums text-base sm:text-lg font-bold tracking-tight border transition-colors ${
              isDarkTheme
                ? item.isSec
                  ? "bg-purple-500/15 text-purple-300 border-purple-400/30"
                  : "bg-white/[0.04] text-white border-white/10"
                : item.isSec
                ? "bg-purple-50 dark:bg-purple-950/35 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/30"
                : "bg-slate-50 dark:bg-white/[0.03] text-slate-950 dark:text-white border-slate-200/90 dark:border-white/10"
            }`}
          >
            {item.value}
          </div>
          <span
            className={`text-[11px] font-medium mt-1.5 ${
              isDarkTheme
                ? item.isSec
                  ? "text-purple-300"
                  : "text-slate-400"
                : item.isSec
                ? "text-purple-600 dark:text-purple-400"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
