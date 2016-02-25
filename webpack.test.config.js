var path = require('path');
var ENV = process.env.ENV = 'test';

/*
 * config
 */
module.exports = {
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

  stats: { colors: true, reasons: true },

  debug: false
}
