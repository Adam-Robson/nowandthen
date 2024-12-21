import Benchmark from 'benchmark';
import {
  getCurrentDate,
  formatDate,
  addDays,
  isWeekend,
  differenceInDays,
  startOfWeek,
  isLeapYear,
  getDaysInMonth,
  getNextMonth,
  toRelativeTime
} from '../dist/index.mjs'; // Adjust the path as needed

const suite = new Benchmark.Suite();

console.log('Starting benchmarks...\n');

// Benchmark for `getCurrentDate`
suite.add('getCurrentDate', () => {
  getCurrentDate();
});

// Benchmark for `formatDate`
suite.add('formatDate', () => {
  formatDate(new Date(), 'YYYY-MM-DD');
});

// Benchmark for `addDays`
suite.add('addDays', () => {
  addDays(new Date(), 10);
});

// Benchmark for `isWeekend`
suite.add('isWeekend', () => {
  isWeekend(new Date('2024-12-14')); // Saturday
});

// Benchmark for `differenceInDays`
suite.add('differenceInDays', () => {
  differenceInDays(new Date('2024-12-01'), new Date('2024-12-11'));
});

// Benchmark for `startOfWeek`
suite.add('startOfWeek', () => {
  startOfWeek(new Date('2024-12-11'));
});

// Benchmark for `isLeapYear`
suite.add('isLeapYear', () => {
  isLeapYear(2024);
});

// Benchmark for `getDaysInMonth`
suite.add('getDaysInMonth', () => {
  getDaysInMonth(2024, 2); // February
});

// Benchmark for `getNextMonth`
suite.add('getNextMonth', () => {
  getNextMonth(2024, 12); // December -> January 2025
});

// Benchmark for `toRelativeTime`
suite.add('toRelativeTime', () => {
  toRelativeTime(new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)); // 3 days in the future
});

// Event listeners for benchmark lifecycle
suite
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log('\nFastest is ' + suite.filter('fastest').map('name'));
  });

// Run the suite
suite.run({ async: true });
