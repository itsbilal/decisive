var path = require("path");

module.exports = {
  entry: {
    "home": "./views/js/home.js",
    "main": "./views/js/main.js"
  },
  output: {
    path: path.join(__dirname, "assets/js"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
