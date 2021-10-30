const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
    const mode = argv.mode || 'development'; // dev mode by default

    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "./static/frontend"),
            filename: "[name].js",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            ],
        },
        optimization: {
            minimize: true,
        },
        plugins: [
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(mode)
            }),
        ],
    };

};