var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getPlugins() {
  var plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.push( new ExtractTextPlugin("style.css", { allChunks: true }) );
  }

  return plugins;
}

function getLoaders() {
  var loaders = [
    { test: /\.jsx?$|\.js$/, loaders: ['react-hot', 'babel-loader?experimental'], exclude: /node_modules/ },
    { test: /\.(png|woff)$/, loader: 'url-loader?limit=100000' }
  ];

  if (process.env.NODE_ENV === 'production') {
    loaders.push({ test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!' + 'sass?sourceMap') })
  } else {
    loaders.push({ test: /\.scss$/, loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ] });   
  }
  
  return loaders; 
}

module.exports = {  
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8081/',
    'webpack/hot/only-dev-server',
    './src/client/entry',
  ],
  output: {
    path: __dirname + '/public/',
    filename: 'app.js',
    publicPath: 'http://localhost:8081/assets/',
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: getLoaders()
  },
  plugins: getPlugins()
}