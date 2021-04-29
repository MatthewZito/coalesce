import coalesce from '../lib'; // avg 1452
import benchmark from './runner';

const iterations = 100000000;
const inputs = [null, null, null, 1];

(function main () {
  const bench0 = benchmark(coalesce, 'x');
  const bench1 = benchmark(coalesce1, 1);
  const bench2 = benchmark(coalesce2, 2);
  const bench3 = benchmark(coalesce3, 3);

  bench1.mark(iterations, ...inputs);
  bench1.mark(iterations, ...inputs);
  bench1.mark(iterations, ...inputs);

  bench0.mark(iterations, ...inputs);
  bench0.mark(iterations, ...inputs);
  bench0.mark(iterations, ...inputs);

  bench2.mark(iterations, ...inputs);
  bench2.mark(iterations, ...inputs);
  bench2.mark(iterations, ...inputs);

  bench3.mark(iterations, ...inputs);
  bench3.mark(iterations, ...inputs);
  bench3.mark(iterations, ...inputs);

})();

  // avg 1496
  function coalesce1 () {
    let i = 0;
    let l = arguments.length;

    while (i < l) {
      if (arguments[i] != null) return arguments[i];
      i++;
    }
    return null;
  }

  // avg 1669
  function coalesce2 (...args) {
    for (let i = 0, k = args.length; i < k; i++) {
      if (args[i] != null) {
        return args[i];
      }
    }
    return null;
  }

  // avg 8801ms
  function coalesce3 () {
    let args = [].slice.call(arguments);

    for (let i = 0, len = args.length; i < len; i++) {
      let c = args[i];

      if (typeof c !== 'undefined' && c !== null ) {
        return c;
      }
    }
    return null;
  }
