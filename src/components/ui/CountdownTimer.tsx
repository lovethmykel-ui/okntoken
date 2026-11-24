"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import {
  TimeRemaining,
  computeTimeRemaining,
  createTimeRemaining,
  decrementTimeRemaining,
  formatCountdownUnit,
} from "@/lib/countdown";

export interface CountdownTimerProps {
  targetDate?: string | Date;
  initialDays?: number;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  theme?: "light" | "dark" | "compact" | "banner";
  label?: string;
  sublabel?: string;
  completedLabel?: string;
  className?: string;
}

export function CountdownTimer({
  targetDate,
  initialDays = 14,
  initialHours = 13,
  initialMinutes = 53,
  initialSeconds = 58,
  theme = "light",
  label,
  sublabel,
  completedLabel = "TGE Live Now",
  className = "",
}: CountdownTimerProps) {
  const targetMs =
    targetDate instanceof Date
      ? targetDate.getTime()
      : typeof targetDate === "string"
      ? Date.parse(targetDate)
      : null;

  const hasValidTarget = targetMs !== null && Number.isFinite(targetMs);

  // Deterministic initial state prevents SSR/CSR hydration mismatches;
  // useEffect immediately syncs to live wall-clock targetMs on mount.
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(() =>
    createTimeRemaining(initialDays, initialHours, initialMinutes, initialSeconds)
  );

  useEffect(() => {
    if (hasValidTarget && targetMs !== null) {
      const sync = () => {
        setTimeLeft(computeTimeRemaining(targetMs, Date.now()));
      };
      sync();
      const timer = setInterval(sync, 1000);
      return () => clearInterval(timer);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => decrementTimeRemaining(prev));
    }, 1000);

    return () => clearInterval(timer);
  }, [hasValidTarget, targetMs]);

  const items = [
    { label: "Days", value: formatCountdownUnit(timeLeft.days), isSec: false },
    { label: "Hours", value: formatCountdownUnit(timeLeft.hours), isSec: false },
    { label: "Mins", value: formatCountdownUnit(timeLeft.minutes), isSec: false },
    { label: "Secs", value: formatCountdownUnit(timeLeft.seconds), isSec: true },
  ];

  if (theme === "compact") {
    return (
      <div
        role="timer"
        aria-live="off"
        aria-label={label ?? "TGE countdown"}
        data-testid="countdown-timer"
        className={`inline-flex items-center gap-1.5 font-mono tabular-nums text-sm font-semibold tracking-wide ${className}`}
      >
        {timeLeft.isExpired ? (
          <span className="text-purple-700 dark:text-purple-300">{completedLabel}</span>
        ) : (
          <>
            <span>{items[0].value}d</span>
            <span>:</span>
            <span>{items[1].value}h</span>
            <span>:</span>
            <span>{items[2].value}m</span>
            <span>:</span>
            <span data-testid="countdown-secs">{items[3].value}s</span>
          </>
        )}
      </div>
    );
  }

  if (theme === "banner") {
    return (
      <div
        role="timer"
        aria-live="off"
        aria-label={label ?? "TGE launch countdown"}
        data-testid="countdown-timer"
        className={`w-full max-w-[540px] mx-auto rounded-2xl border border-[#E6E3F1] dark:border-white/12 bg-white/95 dark:bg-[#0B0E17]/95 p-4 sm:p-5 shadow-[0_18px_46px_rgba(124,58,237,0.08),0_4px_14px_rgba(15,23,42,0.04)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.45)] ${className}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
          <div className="inline-flex items-center gap-2 text-left">
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600 dark:bg-purple-400" />
            </span>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.1em] text-purple-700 dark:text-purple-300">
              {label ?? "TGE Launch Countdown"}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#64748B] dark:text-slate-400">
            <Clock className="w-3 h-3 text-purple-600 dark:text-purple-400" aria-hidden="true" />
            <span>Target $0.30 Listing</span>
          </span>
        </div>

        {timeLeft.isExpired ? (
          <div className="py-3 text-center font-mono text-base font-bold text-purple-700 dark:text-purple-300">
            {completedLabel}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col items-center min-w-0">
                <div
                  data-testid={item.isSec ? "countdown-secs" : undefined}
                  className={`w-full py-2.5 sm:py-3 rounded-xl flex items-center justify-center font-mono tabular-nums text-lg sm:text-2xl font-semibold tracking-tight border transition-colors ${
                    item.isSec
                      ? "bg-[#F4F0FF] dark:bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-300/70 dark:border-purple-400/35"
                      : "bg-[#FAF9FF] dark:bg-white/[0.04] text-[#0F172A] dark:text-white border-[#EAE7F4] dark:border-white/10"
                  }`}
                >
                  {item.value}
                </div>
                <span
                  className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.06em] mt-1.5 ${
                    item.isSec
                      ? "text-purple-700 dark:text-purple-300 font-medium"
                      : "text-[#64748B] dark:text-slate-400"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {sublabel && (
          <p className="mt-3 pt-3 border-t border-[#ECEAF4] dark:border-white/10 text-[11px] sm:text-xs text-[#475569] dark:text-slate-400 text-center">
            {sublabel}
          </p>
        )}
      </div>
    );
  }

  const isDarkTheme = theme === "dark";

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label={label ?? "TGE countdown"}
      data-testid="countdown-timer"
      className={`w-full ${className}`}
    >
      {label && (
        <div className="flex items-center justify-between gap-2 mb-2">
          <span
            className={`text-[10px] font-mono font-semibold uppercase tracking-[0.09em] ${
              isDarkTheme
                ? "text-purple-300"
                : "text-purple-700 dark:text-purple-300"
            }`}
          >
            {label}
          </span>
          {sublabel && (
            <span
              className={`text-[10px] font-mono ${
                isDarkTheme ? "text-slate-400" : "text-[#64748B] dark:text-slate-400"
              }`}
            >
              {sublabel}
            </span>
          )}
        </div>
      )}

      {timeLeft.isExpired ? (
        <div
          className={`py-2.5 text-center font-mono text-sm font-semibold rounded-xl border ${
            isDarkTheme
              ? "bg-purple-500/15 text-purple-200 border-purple-400/30"
              : "bg-purple-50 dark:bg-purple-950/35 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/30"
          }`}
        >
          {completedLabel}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 w-full">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center min-w-0">
              <div
                data-testid={item.isSec ? "countdown-secs" : undefined}
                className={`w-full py-2 rounded-xl flex items-center justify-center font-mono tabular-nums text-base sm:text-lg font-bold tracking-tight border transition-colors ${
                  isDarkTheme
                    ? item.isSec
                      ? "bg-purple-500/15 text-purple-300 border-purple-400/30"
                      : "bg-white/[0.04] text-white border-white/10"
                    : item.isSec
                    ? "bg-white dark:bg-purple-950/45 text-purple-700 dark:text-purple-300 border-purple-300/80 dark:border-purple-500/35"
                    : "bg-white/90 dark:bg-white/[0.04] text-[#0F172A] dark:text-white border-[#E5E0F3] dark:border-white/10"
                }`}
              >
                {item.value}
              </div>
              <span
                className={`text-[10px] font-mono uppercase tracking-[0.05em] mt-1 ${
                  isDarkTheme
                    ? item.isSec
                      ? "text-purple-300"
                      : "text-slate-400"
                    : item.isSec
                    ? "text-purple-700 dark:text-purple-400"
                    : "text-[#64748B] dark:text-slate-400"
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
