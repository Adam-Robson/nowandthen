/**
 * Returns the next month and year from a given month and year.
 * @param year The starting year.
 * @param month The starting month (1 = January, 12 = December).
 * @returns An object with the next month and year.
 */

export function getNextMonth(
  year: number,
  month: number
): { year: number; month: number } {
  if (month < 1 || month > 12) {
    throw new Error('Month must be between 1 and 12.');
  }
  if (month === 12) {
    return { year: year + 1, month: 1 };
  }
  return { year, month: month + 1 };
}
