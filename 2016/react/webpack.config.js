const path = require('path');
module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.join(__dirname, 'js'),
    filename: 'handle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader?presets[]=es2015,presets[]=react']
      // query: ['es2015', 'react']
    },{
      test: /\.css$/,
      loaders: 'style!css',
      exclude: /node_modules/
    },{
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'url?limit=10000!img?progressive=true'
    }]
  }

};