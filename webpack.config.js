const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development", // 开发者模式
  // mode: "production", // 用户模式，正要发布之前改为这个
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        // use: ["style-loader", "css-loader"],
      },
    ],
  },
  entry: "./src/index.js",
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: "nicey",
    //   template: "src/assets/index.html",
    // }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index .[contenthash].js",
  },
  optimization: {
    runtimeChunk: "single",
  },
};
