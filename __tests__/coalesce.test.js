import test from 'tape';

import { coalesce } from '../lib';

/* Init TAP */
test('coalesce resolves the first non-null value', t => {
  const expected = 9;

  const actual = coalesce(null, null, null, 9, null, 12);

  t.equals(expected, actual)
  t.end();
});

test('coalesce resolves to null when provided only null', t => {
  const expected = null;

  const actual = coalesce(null, null, null);

  t.equals(expected, actual);
  t.end();
});

test('coalesce resolves the first non-undefined value', t => {
  const expected = 9;

  const actual = coalesce(undefined, undefined, 9, undefined, 12);

  t.equals(expected, actual);
  t.end();
});

test('coalesce resolves to null when provided only undefined', t => {
  const expected = null;

  const actual = coalesce(undefined);

  t.equals(expected, actual);
  t.end();
});

test('coalesce passes falsy albeit extant values', t => {
  const expected = 0;
  const actual = coalesce(0, 9);

  const expected2 = '';
  const actual2 = coalesce('', 9);

  const expected3= false;
  const actual3 = coalesce(false, 9);

  t.equals(expected, actual);
  t.equals(expected2, actual2);
  t.equals(expected3, actual3);

  t.end();
});
