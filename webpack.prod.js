const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    // content hashing is used here to prevent browsers from cachine the bunlde build
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  }
  //   module: {
  //     rules: [
  //       {
  //         test: /\.css$/,
  //         use: ["style-loader", "css-loader"]
  //       },
  //       {
  //         test: /\.html$/,
  //         use: ["html-loader"]
  //       },
  //       {
  //         test: /\.jpg$/,
  //         use: [
  //           {
  //             loader: "file-loader",
  //             options: {
  //               name: "[name].[ext]",
  //               outputPath: "imgs",
  //               esModule: false
  //             }
  //           }
  //         ]
  //       }
  //     ]
  //   }
});
