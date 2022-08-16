var path = require("path");

module.exports = {
  mode: "development", // 开发者模式
  // mode: "production", // 用户模式，正要发布之前改为这个
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
};
