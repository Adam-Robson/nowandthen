import { describe, test, expect } from 'vitest';
import { getCurrentDate } from '../src/get-current-date';

describe('get current date', () => {
  test('should return the current date in YYYY-MM-DD format', () => {
    const date = new Date();
    const expectedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    expect(getCurrentDate()).toBe(expectedDate);
  });
});
