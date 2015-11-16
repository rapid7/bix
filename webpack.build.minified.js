var webpack = require("webpack"),
    bixConfig = require("./webpack.bix.minified.js"),
    bixDefaultsConfig = require("./webpack.bixDefaults.minified.js");

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