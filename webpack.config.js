const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
  inject: "body"
});

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devtool: "source-map"
};

module.exports = config;
