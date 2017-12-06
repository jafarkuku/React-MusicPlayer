const path = require('path');
const fs = require('fs');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  dist: path.resolve(__dirname, 'public'),
  src: path.resolve(__dirname, 'src'),
};

module.exports = {
  entry: path.join(paths.src, 'app.jsx'),
  output: {
    path: paths.dist,
    filename: 'app.bundle.js',
  },
  watch: true,
  devServer: {
    contentBase: paths.src,
    port: 3200,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['eslint-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader?modules!sass-loader'),
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          quiet: true,
          caseSensitive: false,
          failOnError: false,
          failOnWarning: false,
          emitError: false,
          emitWarning: false,
        },
        postcss: [
          autoprefixer,
        ],
      },
    }),
  ],
};
