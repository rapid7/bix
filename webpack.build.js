var webpack = require("webpack"),
    ProgressPlugin = require("webpack/lib/ProgressPlugin"),
    bixConfig = require("./webpack.bix.js"),
    bixDefaultsConfig = require("./webpack.bixDefaults.js");

webpack(bixConfig, function (err, stats) {
    if (err) {
        console.log(err);
    }

    console.log(stats.toString({
        colors:true
    }));

    webpack(bixDefaultsConfig, function(err, stats) {
        if (err) {
            console.log(err);
        }

        console.log(stats.toString({
            colors:true
        }));
    });
});