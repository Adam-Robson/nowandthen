import { describe, test, expect } from 'vitest';
import { getDaysInMonth } from '../src/get-days-in-month';

describe('getDaysInMonth', () => {
  test('should return the correct number of days for each month', () => {
    expect(getDaysInMonth(2024, 1)).toBe(31); // January
    expect(getDaysInMonth(2024, 2)).toBe(29); // February (leap year)
    expect(getDaysInMonth(2023, 2)).toBe(28); // February (non-leap year)
    expect(getDaysInMonth(2023, 4)).toBe(30); // April
  });

  test('should throw an error for invalid months', () => {
    expect(() => getDaysInMonth(2024, 0)).toThrow(
      'Month must be between 1 and 12.'
    );
    expect(() => getDaysInMonth(2024, 13)).toThrow(
      'Month must be between 1 and 12.'
    );
  });
});
