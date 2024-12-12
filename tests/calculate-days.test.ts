import { describe, test, expect } from 'vitest';
import { calculateDays } from '../src/calculate-days';

describe('function addDays', () => {
  test('addDays should correctly add days to a date', () => {
    const date = new Date(2024, 11, 11);
    expect(calculateDays(date, 5).toISOString().startsWith('2024-12-16')).toBe(
      true
    );
    expect(calculateDays(date, -5).toISOString().startsWith('2024-12-06')).toBe(
      true
    );
  });
});
