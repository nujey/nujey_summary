const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webapck = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
    // print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: [ 'xml-loader' ]
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'dist2']),
    new HtmlWebpackPlugin({
      title: 'first-html',
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunks: ['app']
    }, {title: '第一个'}),
    new webapck.NamedModulesPlugin(),
    new webapck.HotModuleReplacementPlugin()
    // new HtmlWebpackPlugin({
    //   title: 'second-html',
    //   filename: 'second-index.html',
    //   template: 'src/second-index.html',
    //   inject: true || 'body',
    //   hash: false,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true
    //   },
    //   chunks: ['print']
    // })
  ]
}