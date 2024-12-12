import { describe, test, expect } from 'vitest';
import { currentDate } from '../src/current-date';

describe('function today', () => {
  test('returns the current date in YYYY-MM-DD format', () => {
    const result = currentDate();
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const expected = `${year}-${month}-${day}`;
    expect(result).toBe(expected);
  });
});
