const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // neither the dev or production builds have a content hash
  entry: {
    main: "./src/main.js"
  },
  output: {
    // content hashing is used here to prevent browsers from cachine the bunlde build
    filename: "main.[contentHash].js",
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
        use: ["style-loader", "css-loader"]
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
