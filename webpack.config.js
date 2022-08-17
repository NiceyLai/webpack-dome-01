const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development", // 开发者模式
  // mode: "production", // 用户模式，正要发布之前改为这个
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index .[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "nicey",
      template: "src/assets/index.html",
    }),
  ],
};
