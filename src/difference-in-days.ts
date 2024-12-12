/**
 * Calculates the number of days between two dates.
 * @param startDate The first date.
 * @param endDate The second date.
 * @returns The number of days between the two dates.
 */
export function differenceInDays(startDate: Date, endDate: Date): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  const diffInMs = Math.abs(startDate.getTime() - endDate.getTime());
  return Math.floor(diffInMs / msPerDay);
}
