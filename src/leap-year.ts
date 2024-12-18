/**
 *
 * This function checks if a given year is a leap year.
 * @param year The year to check.
 * @returns True if the year is a leap year, false otherwise.
 *
 */

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
