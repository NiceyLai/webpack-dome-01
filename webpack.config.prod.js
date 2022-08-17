const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  mode: "production", // 用户模式
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "x.[contenthash].css",
      chunkFilename: "x.[contenthash].css",
      ignoreOrder: false,
    }),
  ],
};
