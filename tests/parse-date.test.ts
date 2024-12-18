import { describe, test, expect } from 'vitest';
import { parseDate } from '../src/parse-date';

describe('parseDate', () => {
  test('should correctly parse ISO format', () => {
    expect(
      parseDate('2024-12-11')?.toISOString().startsWith('2024-12-11')
    ).toBe(true);
  });
  test('should correctly parse MM/DD/YYYY format', () => {
    expect(
      parseDate('12/11/2024')?.toISOString().startsWith('2024-12-11')
    ).toBe(true);
  });
  test('should return null for invalid format', () => {
    expect(parseDate('invalid-date')).toBeNull();
  });
});
