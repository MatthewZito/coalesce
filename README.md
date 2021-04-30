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
  - [Supply Your Own Skip Value](#skip)

## <a name="builds"></a> Supported Environments

`coalesce-x` currently supports UMD, CommonJS, and ESM build-targets.

## <a name="usage"></a> Installation + Usage

```bash
npm install coalesce-x

# OR

yarn add coalesce-x
```

```js
const { coalesce } = require('coalesce-x');

(function t (num) {
  num = coalesce(num, 9);
  for (let i = 0; i < num; i++) {
    console.log({ i });
  }
})(null);
```

```js
import { coalesce } from 'coalesce-x';

const fallback = 9;

const v = coalesce(maybeVal1, maybeVal2, maybeVal3, fallback);
```

## <a name="skip"></a> Customization

You can also utilize the `coalescent` function and supply your own list of values to coalesce against.

```js
import { coalescent } from 'coalesce-x';

const coalesceOdds = coalescent(1,3,5,7,9);

const firstEven = coalesceOdds(1,3,6,3); // 6
```
