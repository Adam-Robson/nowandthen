/**
 *
 * Returns the current date in YYYY-MM-DD format.
 *
 * @returns Current date in YYYY-MM-DD format.
 */

function getCurrentDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export { getCurrentDate };
