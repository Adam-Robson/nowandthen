import { describe, test, expect } from 'vitest';
import { differenceInDays } from '../src/difference-in-days';

describe('function differenceInDays', () => {
  test('differenceInDays should return the correct number of days between dates', () => {
    const date1 = new Date(2024, 11, 10); // December 10, 2024
    const date2 = new Date(2024, 11, 20); // December 20, 2024
    expect(differenceInDays(date1, date2)).toBe(10);
    expect(differenceInDays(date2, date1)).toBe(10);
  });
});
