var webpack = require("webpack"),
    merge = require("lodash").merge,
    defaultConfig = require("./webpack.bixDefaults"),
    productionConfig = merge({}, defaultConfig, {
        cache:false,

        debug:false,

        output:{
            filename:"bix-defaults.min.js"
        },

        plugins:defaultConfig.plugins.concat([
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress:{
                    booleans:true,
                    conditionals:true,
                    drop_console:true,
                    drop_debugger:true,
                    join_vars:true,
                    sequences:true,
                    warnings:false
                },
                sourceMap:false
            }),
            new webpack.DefinePlugin({
                "process.env":{
                    NODE_ENV:JSON.stringify("production")
                }
            })
        ])
    });

delete productionConfig.devtool;

module.exports = productionConfig;