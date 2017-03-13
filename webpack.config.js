const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin(
  'styles/bundle.min.css',
  { disabled:false, allChunks: true }
);

// Webpack Production Config
module.exports = {

  //devtool: 'source-map',

  context: path.join(__dirname, 'dist'), // copy-webpack-plugin output path
  entry: [
    path.join(__dirname, "src/app.js"), // react,cjs -> js
    path.join(__dirname, "src/styles/index.js") // less -> css
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'scripts/bundle.min.js'
  },

  module: {
    loaders: [
      { test: /\.less$/,  exclude: /node_modules/, loader: extractLESS.extract(['css','less']) },
      { test: /\.(js|jsx)$/i, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015', 'react']} },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },

  plugins: [
    extractLESS,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: { warnings: false }
    }),
    new CopyWebpackPlugin([
      {from: path.join(__dirname, "src/index.html")},
      {from: path.join(__dirname, "src/data"), to: 'data'},
      {from: path.join(__dirname, "src/images"), to: 'images'}
    ])
  ]

};
