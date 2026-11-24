import test from "node:test";
import assert from "node:assert/strict";
import {
  clampTooltipPosition,
  computeDonutSlices,
  createArcPath,
  estimatePresaleAllocation,
  roundCoord,
  splitSliceTitle,
} from "./tokenomicsMath";

test("roundCoord produces fixed 3-decimal strings and normalizes -0", () => {
  assert.equal(roundCoord(335.20590944932474), "335.206");
  assert.equal(roundCoord(-0), "0.000");
  assert.equal(roundCoord(220), "220.000");
});

test("computeDonutSlices covers 360 degrees for 100% allocations", () => {
  const slices = computeDonutSlices([
    { percentage: 45 },
    { percentage: 15 },
    { percentage: 15 },
    { percentage: 10 },
    { percentage: 10 },
    { percentage: 5 },
  ]);

  assert.equal(slices.length, 6);
  assert.equal(slices[0].startAngle, -90);
  assert.equal(slices[slices.length - 1].endAngle, 270);
  assert.equal(slices[slices.length - 1].endAngle - slices[0].startAngle, 360);
});

test("createArcPath emits deterministic rounded SVG path commands without long floats", () => {
  const path = createArcPath(220, -90, 72, 120, 196);
  assert.ok(path.startsWith("M "));
  assert.ok(path.endsWith(" Z"));
  // Verify no coordinate exceeds 3 decimal places
  const floatMatches = path.match(/\d+\.\d+/g) ?? [];
  assert.ok(floatMatches.length > 0);
  for (const numStr of floatMatches) {
    const decimals = numStr.split(".")[1] ?? "";
    assert.equal(decimals.length, 3, `Expected 3 decimals in ${numStr}`);
  }
});

test("splitSliceTitle splits long labels cleanly", () => {
  assert.deepEqual(splitSliceTitle("Public Sale"), ["Public Sale"]);
  assert.deepEqual(splitSliceTitle("Community Rewards"), ["Community", "Rewards"]);
  assert.deepEqual(splitSliceTitle("Ecosystem & Community"), ["Ecosystem &", "Community"]);
});

test("estimatePresaleAllocation computes USDT and BNB allocations accurately", () => {
  const usdtRes = estimatePresaleAllocation("500", "USDT");
  assert.equal(usdtRes.usdValue, 500);
  assert.equal(usdtRes.estimatedOkn, 10000);
  assert.equal(usdtRes.listingValue, 3000);

  const bnbRes = estimatePresaleAllocation("2", "BNB");
  assert.equal(bnbRes.usdValue, 1200);
  assert.equal(bnbRes.estimatedOkn, 24000);
  assert.equal(bnbRes.listingValue, 7200);

  const invalidRes = estimatePresaleAllocation("-5", "USDT");
  assert.equal(invalidRes.estimatedOkn, 0);
});

test("clampTooltipPosition never clips outside container bounds", () => {
  const rightHover = clampTooltipPosition(340, 210, 400, 400, 256, 186);
  assert.ok(rightHover.x >= 0 && rightHover.x + 256 <= 400);
  assert.ok(rightHover.y >= 0 && rightHover.y + 186 <= 400);

  const topLeftHover = clampTooltipPosition(10, 10, 400, 400, 256, 186);
  assert.ok(topLeftHover.x >= 0 && topLeftHover.x + 256 <= 400);
  assert.ok(topLeftHover.y >= 0 && topLeftHover.y + 186 <= 400);
});
