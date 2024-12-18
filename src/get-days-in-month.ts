import { isLeapYear } from './leap-year';
/**
 * Returns the number of days in a specific month of a given year.
 * @param year The year of the date.
 * @param month The month of the date (1 = January, 12 = December).
 * @returns The number of days in the specified month.
 */

export function getDaysInMonth(year: number, month: number): number {
  if (month < 1 || month > 12) {
    throw new Error('Month must be between 1 and 12.');
  }
  const daysInMonth = [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];
  return daysInMonth[month - 1];
}
