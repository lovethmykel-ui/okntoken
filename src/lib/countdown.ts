export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
  isExpired: boolean;
}

export const DEFAULT_TGE_TARGET_ISO = "2026-12-31T18:00:00Z";

export function formatCountdownUnit(value: number): string {
  const safe = Math.max(0, Math.floor(Number.isFinite(value) ? value : 0));
  return safe.toString().padStart(2, "0");
}

export function createTimeRemaining(
  days: number,
  hours: number,
  minutes: number,
  seconds: number
): TimeRemaining {
  const safeDays = Math.max(0, Math.floor(days));
  const safeHours = Math.max(0, Math.floor(hours));
  const safeMinutes = Math.max(0, Math.floor(minutes));
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const totalSeconds =
    safeDays * 86400 + safeHours * 3600 + safeMinutes * 60 + safeSeconds;

  return {
    days: safeDays,
    hours: safeHours,
    minutes: safeMinutes,
    seconds: safeSeconds,
    totalSeconds,
    isExpired: totalSeconds <= 0,
  };
}

export function computeTimeRemaining(
  targetTimestampMs: number,
  nowMs: number
): TimeRemaining {
  if (!Number.isFinite(targetTimestampMs) || !Number.isFinite(nowMs)) {
    return createTimeRemaining(0, 0, 0, 0);
  }

  const diffSeconds = Math.max(0, Math.floor((targetTimestampMs - nowMs) / 1000));
  if (diffSeconds <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalSeconds: 0,
      isExpired: true,
    };
  }

  const days = Math.floor(diffSeconds / 86400);
  const hours = Math.floor((diffSeconds % 86400) / 3600);
  const minutes = Math.floor((diffSeconds % 3600) / 60);
  const seconds = diffSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    totalSeconds: diffSeconds,
    isExpired: false,
  };
}

export function decrementTimeRemaining(prev: TimeRemaining): TimeRemaining {
  if (prev.totalSeconds <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalSeconds: 0,
      isExpired: true,
    };
  }

  const nextTotal = prev.totalSeconds - 1;
  const days = Math.floor(nextTotal / 86400);
  const hours = Math.floor((nextTotal % 86400) / 3600);
  const minutes = Math.floor((nextTotal % 3600) / 60);
  const seconds = nextTotal % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    totalSeconds: nextTotal,
    isExpired: nextTotal <= 0,
  };
}
