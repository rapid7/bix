'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = 3000;

module.exports = {
  cache: true,

  debug: true,

  devServer: {
    contentBase: './dist',
    inline: true,
    port: PORT,
    stats: {
      assets: false,
      chunks: true,
      chunkModules: false,
      colors: true,
      hash: false,
      timings: true,
      version: false
    }
  },

  devtool: '#cheap-module-eval-source-map',

  entry: './DEV_ONLY/App.js',

  eslint: {
    configFile: '.eslintrc',
    emitError: true,
    failOnError: true,
    failOnWarning: false,
    formatter: require('eslint-friendly-formatter')
  },

  module: {
    preLoaders: [
      {
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'DEV_ONLY')
        ],
        loader: 'eslint',

        // Exclude tests from eslint
        exclude: /__tests__/,

        test: /\.(js|jsx)$/
      }
    ],

    loaders: [
      {
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'DEV_ONLY')
        ],
        loader: 'babel',
        test: /\.(js|jsx)$/
      }
    ]
  },

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: `http://localhost:${PORT}/`
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ]),
    new HtmlWebpackPlugin()
  ],

  resolve: {
    extensions: [
      '',
      '.js'
    ],

    root: __dirname
  }
};
