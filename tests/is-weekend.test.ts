import { describe, test, expect } from 'vitest';
import { isWeekend } from '../src/is-weekend';

describe('function isWeekend', () => {
  test('correctly identify weekends', () => {
    const saturday = new Date(2024, 11, 14);
    expect(isWeekend(saturday)).toBe(true);

    const sunday = new Date(2024, 11, 15);
    expect(isWeekend(sunday)).toBe(true);

    const monday = new Date(2024, 11, 16);
    expect(isWeekend(monday)).toBe(false);
  });
});
