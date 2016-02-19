var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ENV = process.env.ENV = 'production';
var HOST = process.env.HOST || 'localhost';
var PORT = process.env.PORT || 8080;

var metadata = {
  host: HOST,
  port: PORT,
  ENV: ENV
};

/*
 * config
 */
module.exports = {
  // static data for index.html
  metadata: metadata,
  // Emit SourceMap to enhance debugging
  devtool: 'source-map',
  // Switch loaders to debug mode
  debug: false,

  // Our angular app
  entry: {
    'polyfills': path.resolve(__dirname, "src/polyfills.ts"),
    'app': path.resolve(__dirname, "src/bootstrap.ts")
  },

  // Config for our build file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].bundle.js',
    sourcemapFilename: '[name].map'
  },

  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      // Support for .ts files
      { test: /\.tsx?$/, loader: 'ts-loader' },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader', exclude: [ path.resolve(__dirname, "src/index.html") ] }
    ]
  },

  plugins: [
    // Copy static assets to the build folder
    new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
    // Generate the index.html
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ]
}
