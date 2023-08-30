const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    assetModuleFilename: "images/[name].[contenthash][ext]",
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
};
