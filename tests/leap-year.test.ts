import { describe, test, expect } from 'vitest';
import { isLeapYear } from '../src/leap-year';

describe('isLeapYear', () => {
  test('should return true for leap years', () => {
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(2000)).toBe(true);
  });

  test('should return false for non-leap years', () => {
    expect(isLeapYear(2023)).toBe(false);
    expect(isLeapYear(1900)).toBe(false);
  });
});
