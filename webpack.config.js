module.exports = {
  entry: {
    index: [
      './source/javascripts/index.js'
    ]
  },

  devtool: 'cheap-module-source-map',

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
