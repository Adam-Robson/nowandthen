/**
 * Returns the next business day for a given date, skipping weekends.
 * @param date The starting date.
 * @returns The next business day as a new Date object.
 */
export function nextBusinessDay(date: Date): Date {
  const newDate = new Date(date);
  do {
    newDate.setDate(newDate.getDate() + 1);
  } while (newDate.getDay() === 0 || newDate.getDay() === 6); // Skip Sunday (0) and Saturday (6)
  return newDate;
}
