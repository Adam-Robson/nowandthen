/**
 *
 * Returns the start of the week (Monday) for a given date.
 *
 * @param date The date to find the Monday for.
 * @returns A new Date object for the Monday before.
 */

function startOfWeek(date: Date): Date {
  const day = date.getDay();
  const diff = (day === 0 ? -6 : 1) - day;
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + diff);
  return newDate;
}

export { startOfWeek };
