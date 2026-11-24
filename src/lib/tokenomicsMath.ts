export interface SliceInput {
  percentage: number;
}

export interface ComputedSlice<T extends SliceInput> {
  item: T;
  index: number;
  startAngle: number;
  endAngle: number;
}

export function roundCoord(value: number): string {
  const rounded = Math.round(value * 1000) / 1000;
  // Normalize -0 to 0 to keep SSR and browser serialization identical
  return (Object.is(rounded, -0) ? 0 : rounded).toFixed(3);
}

export function getCoordinatesForAngle(
  center: number,
  angleInDegrees: number,
  radius: number
): { x: number; y: number } {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: Math.round((center + radius * Math.cos(angleInRadians)) * 1000) / 1000,
    y: Math.round((center + radius * Math.sin(angleInRadians)) * 1000) / 1000,
  };
}

export function computeDonutSlices<T extends SliceInput>(
  items: T[]
): Array<ComputedSlice<T>> {
  return items.reduce<Array<ComputedSlice<T>>>((acc, item, index) => {
    const startAngle = index === 0 ? -90 : acc[index - 1].endAngle;
    const endAngle = startAngle + (item.percentage / 100) * 360;
    acc.push({ item, index, startAngle, endAngle });
    return acc;
  }, []);
}

export function createArcPath(
  center: number,
  startAngle: number,
  endAngle: number,
  innerRadius: number,
  outerRadius: number
): string {
  const adjustedEnd = endAngle - startAngle >= 360 ? startAngle + 359.99 : endAngle;
  const largeArcFlag = adjustedEnd - startAngle <= 180 ? "0" : "1";

  const outerStart = getCoordinatesForAngle(center, startAngle, outerRadius);
  const outerEnd = getCoordinatesForAngle(center, adjustedEnd, outerRadius);
  const innerStart = getCoordinatesForAngle(center, adjustedEnd, innerRadius);
  const innerEnd = getCoordinatesForAngle(center, startAngle, innerRadius);

  return [
    `M ${roundCoord(outerStart.x)} ${roundCoord(outerStart.y)}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${roundCoord(outerEnd.x)} ${roundCoord(outerEnd.y)}`,
    `L ${roundCoord(innerStart.x)} ${roundCoord(innerStart.y)}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${roundCoord(innerEnd.x)} ${roundCoord(innerEnd.y)}`,
    "Z",
  ].join(" ");
}

export function splitSliceTitle(title: string): string[] {
  if (title.length <= 16) return [title];
  if (title.includes(" & ")) {
    const parts = title.split(" & ");
    return [`${parts[0]} &`, parts[1]];
  }
  const words = title.split(" ");
  if (words.length >= 2) {
    const mid = Math.ceil(words.length / 2);
    return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
  }
  return [title];
}

export function estimatePresaleAllocation(
  amountInput: string,
  currency: "USDT" | "BNB",
  bnbUsdPrice = 600,
  stagePrice = 0.05,
  listingPrice = 0.3
): { usdValue: number; estimatedOkn: number; listingValue: number } {
  const parsed = Number.parseFloat(amountInput);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return { usdValue: 0, estimatedOkn: 0, listingValue: 0 };
  }
  const usdValue = currency === "BNB" ? parsed * bnbUsdPrice : parsed;
  const estimatedOkn = usdValue / stagePrice;
  const listingValue = estimatedOkn * listingPrice;
  return { usdValue, estimatedOkn, listingValue };
}

export function clampTooltipPosition(
  relX: number,
  relY: number,
  containerWidth: number,
  containerHeight: number,
  tooltipWidth = 256,
  tooltipHeight = 186,
  offset = 14
): { x: number; y: number } {
  const maxX = Math.max(0, containerWidth - tooltipWidth);
  const maxY = Math.max(0, containerHeight - tooltipHeight);

  const preferredX =
    relX > containerWidth * 0.52
      ? relX - tooltipWidth - offset
      : relX + offset;
  const preferredY =
    relY > containerHeight * 0.45
      ? relY - tooltipHeight - offset
      : relY + offset;

  return {
    x: Math.round(Math.min(maxX, Math.max(0, preferredX))),
    y: Math.round(Math.min(maxY, Math.max(0, preferredY))),
  };
}
