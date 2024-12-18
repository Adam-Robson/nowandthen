import { describe, test, expect } from 'vitest';
import { nextBusinessDay } from '../src/next-business-day';

describe('nextBusinessDay', () => {
  test('should return the next Monday if the date is a Friday', () => {
    const friday = new Date('2024-12-13');
    expect(nextBusinessDay(friday).toISOString().startsWith('2024-12-16')).toBe(
      true
    );
  });
  test('should return the next day if it is a weekday', () => {
    const tuesday = new Date('2024-12-10');
    expect(
      nextBusinessDay(tuesday).toISOString().startsWith('2024-12-11')
    ).toBe(true);
  });
});
