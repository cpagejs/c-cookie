var path = require('path');
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: '/dist/',
  },
  module: {
    loaders: [
      { 
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015',"stage-2"],
            plugins: ["transform-runtime"]
          }
      }
    ]
  }
}