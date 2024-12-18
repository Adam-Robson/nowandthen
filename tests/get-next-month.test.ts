import { describe, test, expect } from 'vitest';
import { getNextMonth } from '../src/get-next-month';

describe('getNextMonth', () => {
  test('should return the next month in the same year', () => {
    expect(getNextMonth(2024, 1)).toEqual({ year: 2024, month: 2 });
    expect(getNextMonth(2024, 11)).toEqual({ year: 2024, month: 12 });
  });

  test('should return the next month in the next year for December', () => {
    expect(getNextMonth(2024, 12)).toEqual({ year: 2025, month: 1 });
  });

  test('should throw an error for invalid months', () => {
    expect(() => getNextMonth(2024, 0)).toThrow(
      'Month must be between 1 and 12.'
    );
    expect(() => getNextMonth(2024, 13)).toThrow(
      'Month must be between 1 and 12.'
    );
  });
});
