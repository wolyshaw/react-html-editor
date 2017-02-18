const webpack = require('webpack')
const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    publicPath: '/',
    library: 'Editor',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react'
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fullbackLoader: 'style-loader',
        loader: ['css-loader']
      })
    },
    {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'
    }
  ]
  },
  plugins: [
    new CleanPlugin(['dist'], {
      root: path.join(__dirname),
      verbose: true
    }),
    new ExtractTextPlugin({
      filename: 'static/editor.css',
      allChunks: true
    })
  ]
}
