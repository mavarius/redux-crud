const webpack = require('webpack')
const path = require('path')

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './public/css/style.scss',
    './src/index.js'
  ],
  output: {
    path: path.resolve('./public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        loader: 'url-loader?limit=10000',
        test: /\.(png|jpg|jpeg|gif|woff)$/
      },
      { test: /(\.s[ca]ss)$/, loaders: ['style', 'css', 'sass'] }
    ]
  }
}
