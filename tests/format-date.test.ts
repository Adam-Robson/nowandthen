import { describe, test, expect } from 'vitest';
import { formatDate } from '../src/format-date';

describe('function formatDate', () => {
  test('returns the date in the provided format', () => {
    const date = new Date(2024, 11, 11);
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('2024-12-11');
    expect(formatDate(date, 'MM/DD/YYYY')).toBe('12/11/2024');
  });
});
