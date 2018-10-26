const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
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
  plugins: [
    new CleanWebpackPlugin(['dist', 'dist2']),
    new HtmlWebpackPlugin({
      title: 'first-html',
      filename: 'index.html',
      template: 'src/index.html',
      inject: 'head',
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunks: ['app']
    }, {title: '第一个'}),
    new HtmlWebpackPlugin({
      title: 'second-html',
      filename: 'second-index.html',
      template: 'src/second-index.html',
      inject: true || 'body',
      hash: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunks: ['print']
    })
  ]
}