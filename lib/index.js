/**
 * Return the first non nullish value; akin to SQL COALESCE
 * @param  {...any} args
 * @returns {(any|null)}
 */
export default function coalesce () {
  for (let i = 0, k = arguments.length; i < k; i++) {
    if (arguments[i] != null) {
      return arguments[i];
    }
  }
  return null;
}
