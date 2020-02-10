const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    // the dev build doesn't have a hash
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ["style-loader", "css-loader"]
  //     },
  //     {
  //       test: /\.html$/,
  //       use: ["html-loader"]
  //     },
  //     {
  //       test: /\.jpg$/,
  //       use: [
  //         {
  //           loader: "file-loader",
  //           options: {
  //             name: "[name].[ext]",
  //             outputPath: "imgs",
  //             esModule: false
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // }
});
