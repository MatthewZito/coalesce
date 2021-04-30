export {
  coalesce,
  coalescent
};

/**
 * Return the first non nullish value; akin to SQL COALESCE
 * @param  {...any} args
 * @returns {(any|null)}
 */
function coalesce () {
  for (let i = 0, k = arguments.length; i < k; i++) {
    if (arguments[i] != null) {
      return arguments[i];
    }
  }
  return null;
}

/**
 * Return the first non skip[] value(s); akin to SQL COALESCE
 * @param  {...any} skip Values to coalesce over
 * @returns {function}
 */
function coalescent (...skip) {
  return function (...args) {
    for (let i = 0, k = args.length; i < k; i++) {
      if (!skip.includes(args[i])) {
        return args[i];
      }
    }
    return null;
  };
}
