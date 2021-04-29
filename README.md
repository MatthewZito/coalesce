# coalesce-x

## Highly performant implementation of SQL `COALESCE` for JavaScript. Return the first value that is not null or undefined

[![Build Status](https://travis-ci.com/MatthewZito/coalesce.svg?branch=master)](https://travis-ci.com/MatthewZito/coalesce)
[![npm version](https://badge.fury.io/js/coalesce-x.svg)](https://badge.fury.io/js/coalesce-x)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Why?

JavaScript evaluates 'falsy' values such as 0 and '' as false, ergo the logical OR `||` operator cannot be reliably employed to tender fallback values. `coalesce` provides a fast interface for resolving fallback values in a single line of code.

## Table of Contents

- [Supported Environments](#builds)
- [Installation + Usage](#usage)

## <a name="builds"></a> Supported Environments

`coalesce-x` currently supports UMD, CommonJS, and ESM build-targets.

## <a name="usage"></a> Installation + Usage

```bash
npm install coalesce-x

# OR

yarn add coalesce-x
```

```js
const coalesce = require('coalesce-x');

(function t (num) {
  num = coalesce(num, 9);
  while (num < 9) {
    console.log({ num });
  }
})();
```

```js
import coalesce from 'coalesce-x';

const fallback = 9;

const v = coalesce(maybeVal1, maybeVal2, maybeVal3, fallback);
```
