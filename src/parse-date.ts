/**
 * Parses a date string into a Date object. Supports multiple formats.
 * @param dateString The date string (e.g., "2024-12-11", "12/11/2024").
 * @returns A Date object or null if invalid.
 */
function parseDate(dateString: string): Date | null {
  const isoFormat = /^\d{4}-\d{2}-\d{2}$/;
  const slashFormat = /^\d{2}\/\d{2}\/\d{4}$/;

  if (isoFormat.test(dateString)) {
    return new Date(dateString);
  } else if (slashFormat.test(dateString)) {
    const [month, day, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day);
  }

  return null;
}

export { parseDate };
