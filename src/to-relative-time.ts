/**
 * Returns a human-readable relative time string (e.g., "3 days ago", "in 2 hours").
 * @param date The date to compare against the current date.
 * @returns A relative time string.
 */
export function toRelativeTime(date: Date): string {
  const now = new Date();
  const diffInMs = date.getTime() - now.getTime();
  const diffInMinutes = Math.round(diffInMs / (1000 * 60));

  if (diffInMinutes === 0) return 'just now';
  if (diffInMinutes < 0) {
    const absMinutes = Math.abs(diffInMinutes);
    if (absMinutes < 60) return `${absMinutes} minutes ago`;
    const hours = Math.floor(absMinutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  } else {
    if (diffInMinutes < 60) return `in ${diffInMinutes} minutes`;
    const hours = Math.floor(diffInMinutes / 60);
    if (hours < 24) return `in ${hours} hours`;
    const days = Math.floor(hours / 24);
    return `in ${days} days`;
  }
}
