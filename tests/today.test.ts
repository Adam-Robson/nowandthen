import { describe, test, expect } from 'vitest';
import { today, currentTime } from '../src/today';

describe('today', () => {
  test('should return the current date in YYYY-MM-DD format', () => {
    const date = new Date();
    const expectedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    expect(today()).toBe(expectedDate);
  });
});

describe('currentTime', () => {
  test('should return the current time in HH:MM:SS format', () => {
    const date = new Date();
    const expectedTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
    expect(currentTime()).toBe(expectedTime);
  });
});
