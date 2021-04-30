import test from 'tape';

import { coalescent } from '../lib';

/* Init TAP */
test('coalescent resolves the first non-skip value', t => {
  const expected = 9;
  const fn = coalescent(1, 2, 4);

  const actual = fn(1, 2, 4, expected, 8, 1, 9);

  t.equals(expected, actual)
  t.end();
});

test('coalescent resolves to null when invoked with only skip value(s)', t => {
  const expected = null;

  const fn = coalescent(1, 2, 4);

  const actual = fn(1, 2, 4);

  t.equals(expected, actual);
  t.end();
});

test('coalescent can coalesce to null', t => {
  const expected = null;

  const fn = coalescent(1, 2, 4);

  const actual = fn(1, 2, 4, expected, 9);

  t.equals(expected, actual);
  t.end();
});

test('coalescent resolves the first value if provided no skip inputs', t => {
  const expected = 0;

  const fn = coalescent();

  const actual = fn(0, 9);

  t.equals(expected, actual);
  t.end();
});
