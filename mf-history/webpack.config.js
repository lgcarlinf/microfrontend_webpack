const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('node:path');

module.exports = {
    entry : "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    module:{
        rules:[
            {
                test: /\.js$/i,
                exclude: /node_modules/i,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins:[
    ],
    devServer: {
        port: 9002,
        historyApiFallback: true
    }
}