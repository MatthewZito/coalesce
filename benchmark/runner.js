export default function bench (fn, id) {
  return {
    mark: (iterations, ...input) => {
      const start = new Date;

      for (let i = 0; i < iterations; i++) {
        fn(...input);
      }

      const finish = new Date;

      const time = finish - start;

      const n = id
        ? `ID: ${id} `
        : '';

      console.log(`\n${n}${iterations} iterations AT ${time}ms`);

      return time;
    }
  }
}
