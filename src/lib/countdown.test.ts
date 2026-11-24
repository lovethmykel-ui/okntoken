import test from "node:test";
import assert from "node:assert/strict";
import {
  computeTimeRemaining,
  createTimeRemaining,
  decrementTimeRemaining,
  formatCountdownUnit,
} from "./countdown";

test("formatCountdownUnit zero-pads single digits and clamps negatives", () => {
  assert.equal(formatCountdownUnit(0), "00");
  assert.equal(formatCountdownUnit(7), "07");
  assert.equal(formatCountdownUnit(42), "42");
  assert.equal(formatCountdownUnit(120), "120");
  assert.equal(formatCountdownUnit(-5), "00");
});

test("computeTimeRemaining splits days, hours, minutes, and seconds accurately", () => {
  const now = Date.UTC(2026, 10, 24, 12, 0, 0);
  const target = now + (3 * 86400 + 4 * 3600 + 5 * 60 + 6) * 1000;
  const res = computeTimeRemaining(target, now);

  assert.equal(res.days, 3);
  assert.equal(res.hours, 4);
  assert.equal(res.minutes, 5);
  assert.equal(res.seconds, 6);
  assert.equal(res.isExpired, false);
});

test("computeTimeRemaining marks past timestamps as expired without negative units", () => {
  const now = Date.UTC(2026, 11, 31, 20, 0, 0);
  const target = Date.UTC(2026, 11, 31, 18, 0, 0);
  const res = computeTimeRemaining(target, now);

  assert.equal(res.days, 0);
  assert.equal(res.hours, 0);
  assert.equal(res.minutes, 0);
  assert.equal(res.seconds, 0);
  assert.equal(res.totalSeconds, 0);
  assert.equal(res.isExpired, true);
});

test("decrementTimeRemaining handles minute, hour, and day rollovers cleanly", () => {
  const start = createTimeRemaining(1, 0, 0, 0);
  const next = decrementTimeRemaining(start);

  assert.equal(next.days, 0);
  assert.equal(next.hours, 23);
  assert.equal(next.minutes, 59);
  assert.equal(next.seconds, 59);
  assert.equal(next.isExpired, false);

  const lastSecond = createTimeRemaining(0, 0, 0, 1);
  const done = decrementTimeRemaining(lastSecond);
  assert.equal(done.totalSeconds, 0);
  assert.equal(done.isExpired, true);

  const clamped = decrementTimeRemaining(done);
  assert.equal(clamped.totalSeconds, 0);
  assert.equal(clamped.isExpired, true);
});
