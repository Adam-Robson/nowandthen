/**
 *
 * Returns the current date in YYYY-MM-DD format.
 *
 * @returns Current date in YYYY-MM-DD format.
 */

export function today(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 *
 * Returns the current time in HH:MM:SS format.
 *
 * @returns Current time in HH:MM:SS format.
 */
export function currentTime(): string {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}
