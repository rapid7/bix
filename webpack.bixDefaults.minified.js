const webpack = require('webpack');
const merge = require('lodash/merge');
const defaultConfig = require('./webpack.bixDefaults');
const productionConfig = merge({}, defaultConfig, {
  cache: false,

  debug: false,

  output: merge({}, defaultConfig.output, {
    filename: 'bix-defaults.min.js'
  }),

  plugins: defaultConfig.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        booleans: true,
        conditionals: true,
        drop_console: true,
        drop_debugger: true,
        join_vars: true,
        screw_ie8: true,
        sequences: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ])
});

delete productionConfig.devtool;

module.exports = productionConfig;
