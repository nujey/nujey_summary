const path = require('path');
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    another: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //   title: 'Code Spliting'
    // }),

    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['app', 'vendor']
    }),
    new HtmlWebpackPlugin({
      title: 'second',
      filename: 'second.html',
      template: './src/second-index.html',
      chunks: ['another']
    }),
    // 提取公共的js文件 webpack4.0以上 换做和entry同级别的插件 splitChunksPlugin
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common'
    // })
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: "all",
          minChunks: 2
        }
      }
    }
  }
}