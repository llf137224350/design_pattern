const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.ts', // 入口
    output: { // 输出的路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' // 输出的文件名称
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    mode: 'development', // development：开发模式 production：生产模式
    // development：开发模式 建议 cheap-module-eval-source-map
    // production：生产模式 建议 cheap-module-source-map
    devtool: 'cheap-module-eval-source-map',// source map 打包后文件与源文件的对应关系，主要用于开发模式下准确提示出错文件及出错地方
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.html'
        }),// 拷贝html并把生成的js文件引用加入到html中
        new CleanWebpackPlugin(), // 打包前清除dist目录
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    },
    devServer: {
        contentBase: './dist', // 根目录
        open: false, // 是否打开浏览器
        port: '8081' // 端口
    }
};