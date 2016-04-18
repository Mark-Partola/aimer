var webpack = require("webpack");

module.exports = {
    entry: "./src/app.js",

    output: {
        publicPath: "dist/",
        filename: "bundle.js"
    },

    watch: true,
    devtool: 'sourse-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    }
};