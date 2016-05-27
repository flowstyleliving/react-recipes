var express = require('express')
var webpack = require('webpack')
var path = require('path')
var config = require('../webpack.config')
var wDM = require('webpack-dev-middleware')
var wHM = require('webpack-hot-middleware')

var app = express()

var compiler = webpack(config)

app.use(wDM(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(wHM(compiler))

app.use(express.static('./dist'))

app.use('/', function(req, res) {
  res.sendFile(path.resolve('client/index.html'))
})

var port = 8080

app.listen(port, function(error) {
  if(error) throw error
  console.log("Express server is listening on port", port)
})