var path = require('path'),
    webpack = require('webpack');

module.exports = {
    cache: true,

    debug: true,

    devtool: '#cheap-module-eval-source-map',

    entry: [
        path.resolve(__dirname, 'src/defaults')
    ],

    eslint:{
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
            }

        ]
    },

    output: {
        filename:'bix-defaults.js',
        library:'bixDefaults',
        libraryTarget:'umd',
        path:path.join(__dirname, 'dist'),
        umdNamedDefine: true
    },

    plugins:[],

    resolve:{
        extensions: [
            '',
            '.js'
        ],

        root : __dirname
    }
};
