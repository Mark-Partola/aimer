const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
console.log(NODE_ENV);

module.exports = {
    entry: "./src/app.js",

    output: {
        filename: "./dist/bundle.js"
    },

    watch: NODE_ENV === 'development',
    devtool: NODE_ENV === 'development' ? 'source-map' : '',

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },

    plugins: NODE_ENV === "production" ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    ] : []
};