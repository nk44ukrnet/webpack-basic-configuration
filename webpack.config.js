const path = require('path');
const TerserPlugin = require('terser-webpack-plugin'); //npm install terser-webpack-plugin --save-dev
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.[contenthash].js", //for adding hash 'bundle.[contenthash].js'
        path: path.resolve(__dirname, './dist'),
        publicPath: "" //for custom website: http://inventor.com.ua/files/ //dist/
    },
    mode: 'none', //none, development, production
    //DEVSERVER
    /*devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000
    },*/ //also change in package.json line:
    // "build": "webpack serve --config webpack.dev.config.js --hot"
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [
                    'file-loader'
                    //npm i file-loader --save-dev
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader' //Using plugin. old 1.'style-loader'
                    //npm install css-loader style-loader --save-dev
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'less-loader' // old. 1.'style-loader'
                    //it invokes from right to left: 1. LESS -> to CSS
                    //npm i less-loader --save-dev
                ]
            },
            {  //babel
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader", //npm install @babel/core babel-loader @babel/preset-env babel-plugin-transform-class-properties --save-dev
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
        ]
    },
    plugins: [
        //npm install terser-webpack-plugin --save-dev
        new TerserPlugin(),
        //extracts css to different file //npm install mini-css-extract-plugin --save-dev
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css', //'style.[contenthash].css' - for adding hash to name
        }),
        //removes old js css etc bundels before genereting new (with hash for exmpl)
        //npm i clean-webpack-plugin --save-dev
        new CleanWebpackPlugin(),
        //generate new html file in dist add hashed names js css etc in html file
        //npm i html-webpack-plugin --save-dev
        new HtmlWebpackPlugin({
            title: 'new title', //<title> CHECK GITHUB plugin for more options
            filename: "index.html", //change name or create a subfolder 'subfolder/custom_name.html'
            template: "./src/components/index.hbs", //add a file template
            meta: {
                description: 'ho ho ho GOOGLE Description'
                //USE WITHOUT HANDLEBARS!
            }
        }),
    ],
}