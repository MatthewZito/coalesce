export default {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        modules: false // rollup conf will handle this
      }
    ]
  ]
};
