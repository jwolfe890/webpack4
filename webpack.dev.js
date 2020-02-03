const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/main.js"
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "imgs",
              esModule: false
            }
          }
        ]
      }
    ]
  }
};
