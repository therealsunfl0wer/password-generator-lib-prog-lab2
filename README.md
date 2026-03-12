# Generators Library

A utility library providing generator functions and iterator utilities for working with infinite streams of data. Made for lab assignment 2 of Fundamentals of Programming.

## Features

- **String Random Generator**: Generate random strings using a generator function
- **Iterator Timeout**: Process iterators with timeout constraints

## Installation (as a local dependency)

```bash
git clone https://github.com/therealsunfl0wer/password-generator-lib-prog-lab2
npm install ./password-generator-lib-prog-lab2
```

## Usage

```javascript
import {
  stringRandom,
  iteratorTimeout,
} from "password-generator-lib-prog-lab2";

// Generate random strings using the generator
const generator = stringRandom(10, "");
console.log(generator.next().value);

// Use iterator with timeout (pass the generator)
iteratorTimeout(generator, 5, 100); // 5 seconds, 100ms intervals
```

## API

### `stringRandom(length, characters)`

Generator function that yields progressively longer random strings.

- `length`: Maximum length of the string
- `characters`: String of characters to use (optional)

### `iteratorTimeout(iterator, timeout, intervalMs)`

Processes an iterator with a timeout constraint.

- `iterator`: A generator or iterable object
- `timeout`: Timeout in seconds
- `intervalMs`: Interval between iterations in milliseconds

## License

MIT
