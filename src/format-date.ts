/**
 *
 * Format a given Date object into the provided format.
 *
 * @param date  The date to format.
 * @param format  The format string. (e.g. "YYYY-MM-DD",
 *                    "MM/DD/YYYY")
 * @returns  Formatted date string.
 */

function formatDate(date: Date, format: string): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return format
    .replace('YYYY', year.toString())
    .replace('MM', month)
    .replace('DD', day);
}

export { formatDate };
