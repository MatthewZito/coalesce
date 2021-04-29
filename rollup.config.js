import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

import babelrc from './build/babel.config'; // must import, as base babelrc is needed by jest

import pkg from './package.json';

export default [
  {
    /* CommonJS */
    input: 'lib/index.js',
    output: {
      file: pkg.main,
      format: 'cjs',
      exports: 'default'
    },
    plugins: [
      commonjs(), // ensure dependencies are commonjs *prior* to transpilation
      babel({
        exclude: 'node_modules/**',
        babelrc: false, // override browserslistrc
        presets: [
          [
            '@babel/env',
            {
              modules: false,
              useBuiltIns: 'usage',
              targets: 'maintained node versions'
            }
          ]
        ]
      })
    ]
  },
  {
    /* UMD */
    input: 'lib/index.js',
    output: {
      file: pkg.browser.replace(/\.min.js$/, '.js'),
      format: 'umd',
      name: 'coalesce-x'
    },
    plugins: [
      commonjs(),
      babel({
        ...babelrc
      })
    ]
  },
  {
    /* Minified UMD */
    input: 'lib/index.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'coalesce-x'
    },
    plugins: [
      commonjs(),
      babel({
        ...babelrc
      }),
      terser()
    ]
  },
  {
    /* ESM */
    input: 'lib/index.js',
    output: {
      file: pkg.module,
      format: 'es'
    },
    plugins: [
      commonjs(),
      babel({
        ...babelrc
      })
    ]
  }
];
