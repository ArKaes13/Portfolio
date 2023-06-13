const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    output: {
        path: __dirname,
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]
            }
        ]
    },
    plugins: [new miniCssExtractPlugin()],
};