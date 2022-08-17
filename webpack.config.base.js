const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    // path: path.resolve(__dirname, "dist"),
    filename: "index .[contenthash].js",
  },
  // optimization: {
  //   runtimeChunk: "single",
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: "nicey",
      template: "src/assets/index.html",
    }),
  ],
};
