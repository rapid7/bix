var path = require("path"),
    webpack = require("webpack");

module.exports = {
    cache:true,

    debug:true,

    devtool:"source-map",

    entry: [
        path.resolve(__dirname, "src/bix")
    ],

    eslint:{
        configFile:"./.eslintrc",
        emitError:true,
        failOnError:true,
        failOnWarning:false,
        formatter:require("eslint-friendly-formatter")
    },

    externals:[
        {
            "react":{
                amd:"react",
                commonjs:"react",
                commonjs2:"react",
                root:"React"
            }
        }
    ],

    module: {
        preLoaders: [
            {
                exclude: /.idea|dist|node_modules/,
                loader: "eslint-loader",
                test: /\.js$/
            }
        ],

        loaders: [
            {
                exclude: /node_modules/,
                loader: "babel",
                test: /\.(js|jsx)?$/
            }, {
                loaders:[
                    "style",
                    "css"
                ],
                test: /\.css$/
            }

        ]
    },

    output: {
        filename:"bix.js",
        library:"bix",
        libraryTarget:"umd",
        path:path.join(__dirname, "dist")
    },

    plugins:[
        new webpack.ProgressPlugin(function(percentage, message) {
            if (percentage === 0) {
                console.log("Starting", message);
            } else if (percentage === 1) {
                console.log("...complete.", message);
            } else {
                console.log(Math.round(percentage * 100) + "%", message);
            }
        })
    ],

    resolve:{
        extensions: [
            "",
            ".js",
            ".jsx"
        ],

        /* Allows you to require("models/myModel") instead of needing relative paths */
        fallback : [
            path.join(__dirname, "src")
        ],

        root : __dirname
    }
};