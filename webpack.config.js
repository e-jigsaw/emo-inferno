module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: './build'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-3'],
          plugins: ['transform-pug-to-inferno']
        }
      }
    ]
  }
}
