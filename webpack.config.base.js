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
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass"),
            },
          },
        ],
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.styl$/,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};

