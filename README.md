[top](#readme-top)

---

---

![logo](./nowandthen.svg "nowandthen logo")

# nowandthen

## Description

A lightweight library for working with dates. Supports Common & ES Modules. Written in TypeScript.

---

## Features

- format dates
- get the current date
- calculate days difference
- Add or subtract days from a date.
- Identify weekends.
- Start of the week calculation.

---

## Installation

Install via npm:

```sh
npm install nowandthen
```

---

## Usage

### ES Modules

```js
import { currentDate, formatDate } from "nowandthen";

console.log(getCurrentDate()); // "2024-12-11"
console.log(formatDate(new Date(), "MM/DD/YYYY")); // "12/11/2024"
```

### CommonJS

```js
const { currentDate, formatDate } = require("nowandthen");

console.log(getCurrentDate()); // "2024-12-11"
console.log(formatDate(new Date(), "MM/DD/YYYY")); // "12/11/2024"
```

---

## API Reference

`currentDate()`: Returns the current date in YYYY-MM-DD format.

`formatDate(date: Date, format: string)`: Formats a Date object into a
specific format.

Supported tokens:
• YYYY: Year
• MM: Month
• DD: Day

Example:

```js
formatDate(new Date(), "MM/DD/YYYY"); // "12/11/2024"
```

`differenceInDays(date1: Date, date2: Date)`: Returns the number of days
between two dates.

`addDays(date: Date, days: number)`: Adds a specified number of days to a date.

---

## Benchmarks

Run benchmarks to measure performance:

```sh
node benchmarks/benchmark.js
```

---

## Contributing

Feel free to open issues or submit pull requests.

## License

MIT

---
