import { describe, test, expect } from 'vitest';
import { startOfWeek } from '../src/start-of-week';

describe('function startOfWeek', () => {
  test('startOfWeek should return the start of the week (Monday)', () => {
    const date = new Date(2024, 11, 11); // December 11, 2024 (Wednesday)
    const startOfWeekDate = startOfWeek(date);
    expect(startOfWeekDate.toISOString().startsWith('2024-12-09')).toBe(true); // Monday, December 9, 2024
  });
});
