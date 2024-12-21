/**
 * This function checks if a given date is a weekend.
 * @param date
 * @returns boolean True if the date is a weekend, false otherwise.
 */
function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

export { isWeekend };
