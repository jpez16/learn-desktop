const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['', 'js'],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel',
      },
    ],
  },
};
