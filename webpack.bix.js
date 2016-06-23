var path = require('path'),
    webpack = require('webpack');

module.exports = {
  cache: true,

  debug: true,

  devtool: '#cheap-module-eval-source-map',

  entry: [
    path.resolve(__dirname, 'src/bix')
  ],

  eslint: {
    configFile: './.eslintrc',
    emitError: true,
    failOnError: true,
    failOnWarning: true,
    formatter: require('eslint-friendly-formatter')
  },

  externals: {
    'inline-style-prefixer': {
      amd: 'inline-style-prefixer',
      commonjs2: 'inline-style-prefixer',
      commonjs: 'inline-style-prefixer',
      root: 'Prefixer'
    },
    'min.css': {
      amd: 'min.css',
      commonjs2: 'min.css',
      commonjs: 'min.css',
      root: 'mincss'
    },
    radium: {
      amd: 'radium',
      commonjs2: 'radium',
      commonjs: 'radium',
      root: 'Radium'
    },
    react: {
      amd: 'react',
      commonjs2: 'react',
      commonjs: 'react',
      root: 'React'
    }
  },

  module: {
    preLoaders: [
      {
        exclude: /.idea|dist|node_modules/,
        loader: 'eslint-loader',
        test: /\.js$/
      }
    ],

    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        test: /\.(js|jsx)?$/
      }, {
        loaders: [
          'style',
          'css'
        ],
        test: /\.css$/
      }

    ]
  },

  output: {
    filename: 'bix.js',
    library: 'bix',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
    umdNamedDefine: true
  },

  plugins: [],

  resolve: {
    extensions: [
      '',
      '.js'
    ],

    root: __dirname
  }
};
