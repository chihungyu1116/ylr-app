var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
 
module.exports = {  
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    './src/client/entry',
  ],
  output: {
    path: __dirname + '/public/js/',
    filename: 'app.js',
    publicPath: 'http://localhost:8081/js/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('public/style.css', {
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader?experimental'],
        exclude: /node_modules/
      },
      { test: /\.css/, loader: "style-loader!css-loader" }
    ]
  }
}