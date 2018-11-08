const path = require('path');
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.ts',
    another: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js']
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
    // 就像我们之前从代码分离了解到的，CommonsChunkPlugin 可以用于将模块分离到单独的文件中。
    // 然而 CommonsChunkPlugin 有一个较少有人知道的功能是，能够在每次修改后的构建结果中，
    // 将 webpack 的样板(boilerplate)和 manifest 提取出来。
    // 通过指定 entry 配置中未用到的名称，此插件会自动将我们需要的内容提取到单独的包中：
    
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: "all",
          minChunks: Infinity
        }
      }
    }
  }
}