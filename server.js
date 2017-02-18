const express = require('express')
const path = require('path')
const compression = require('compression')
const app = express()
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevConfig = require('./webpack.config.dev')
const config = require('./config')
const compiler = webpack(webpackDevConfig)
app.use(compression())
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: true,
  stats: {
    colors: true
  }
}))

app.use(webpackHotMiddleware(compiler))
if (config.debug) {
}else{
  app.use(express.static('dist'))
}
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, (config.debug ? 'dev' : 'dist'), 'index.html'))
})
var port = process.env.port || config.port
app.listen(port, function() {
  console.log('Production Express server running at localhost:' + port)
})
