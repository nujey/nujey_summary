const Koa = require('koa')
const KoaStatic = require('koa-static')

const path = require('path')
const webpack = require('webpack') // 引入webpakc

const webpackDevMiddleware = require('webpack-dev-middleware') // 引入我们的中间件
const config = require('./webpack.config.js')

const app = new Koa(), // 实例化一个koa实例
       DIST_DIR = config.output.publicPath
       PORT = 9090
const compiler = webpack(config)


app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  headers: { "X-Custom-Header": "yes" },
  quiet: true
}));
app.use(KoaStatic(DIST_DIR))

app.listen(9001)

console.log('服务起来了')
