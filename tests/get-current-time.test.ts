import { describe, test, expect } from 'vitest';
import { getCurrentTime } from '../src/get-current-time';

describe('currentTime', () => {
  test('should return the current time in HH:MM:SS format', () => {
    const date = new Date();
    const expectedTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
    expect(getCurrentTime()).toBe(expectedTime);
  });
});
