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
      <div className={`inline-flex items-center gap-1.5 font-mono text-sm font-semibold tracking-wide ${className}`}>
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

  const isDark = theme === "dark";

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {/* Days */}
      <div className="flex flex-col items-center">
        <div
          className={`flex items-center justify-center min-w-[50px] sm:min-w-[62px] h-[52px] sm:h-[64px] rounded-2xl font-mono text-xl sm:text-2xl font-bold shadow-inner ${
            isDark
              ? "bg-white/10 text-white border border-white/15"
              : "bg-slate-100 text-slate-900 border border-slate-200"
          }`}
        >
          {formatNumber(timeLeft.days)}
        </div>
        <span className={`text-[10px] sm:text-xs uppercase tracking-wider font-medium mt-1.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          Days
        </span>
      </div>

      <span className={`text-xl font-bold self-start mt-3 sm:mt-4 ${isDark ? "text-slate-500" : "text-slate-400"}`}>:</span>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <div
          className={`flex items-center justify-center min-w-[50px] sm:min-w-[62px] h-[52px] sm:h-[64px] rounded-2xl font-mono text-xl sm:text-2xl font-bold shadow-inner ${
            isDark
              ? "bg-white/10 text-white border border-white/15"
              : "bg-slate-100 text-slate-900 border border-slate-200"
          }`}
        >
          {formatNumber(timeLeft.hours)}
        </div>
        <span className={`text-[10px] sm:text-xs uppercase tracking-wider font-medium mt-1.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          Hours
        </span>
      </div>

      <span className={`text-xl font-bold self-start mt-3 sm:mt-4 ${isDark ? "text-slate-500" : "text-slate-400"}`}>:</span>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div
          className={`flex items-center justify-center min-w-[50px] sm:min-w-[62px] h-[52px] sm:h-[64px] rounded-2xl font-mono text-xl sm:text-2xl font-bold shadow-inner ${
            isDark
              ? "bg-white/10 text-white border border-white/15"
              : "bg-slate-100 text-slate-900 border border-slate-200"
          }`}
        >
          {formatNumber(timeLeft.minutes)}
        </div>
        <span className={`text-[10px] sm:text-xs uppercase tracking-wider font-medium mt-1.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          Mins
        </span>
      </div>

      <span className={`text-xl font-bold self-start mt-3 sm:mt-4 ${isDark ? "text-slate-500" : "text-slate-400"}`}>:</span>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div
          className={`flex items-center justify-center min-w-[50px] sm:min-w-[62px] h-[52px] sm:h-[64px] rounded-2xl font-mono text-xl sm:text-2xl font-bold shadow-inner ${
            isDark
              ? "bg-white/10 text-purple-400 border border-purple-500/30"
              : "bg-purple-50 text-purple-600 border border-purple-200"
          }`}
        >
          {formatNumber(timeLeft.seconds)}
        </div>
        <span className={`text-[10px] sm:text-xs uppercase tracking-wider font-medium mt-1.5 ${isDark ? "text-purple-400" : "text-purple-600"}`}>
          Secs
        </span>
      </div>
    </div>
  );
}
