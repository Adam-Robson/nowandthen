import { describe, test, expect } from 'vitest';

import { toRelativeTime } from '../src/to-relative-time';

describe('toRelativeTime', () => {
  test('should return "just now" for the current time', () => {
    expect(toRelativeTime(new Date())).toBe('just now');
  });
  test('should return "3 days ago" for a past date', () => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    expect(toRelativeTime(date)).toBe('3 days ago');
  });
  test('should return "in 3 days" for a future date', () => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    expect(toRelativeTime(date)).toBe('in 3 days');
  });
});
