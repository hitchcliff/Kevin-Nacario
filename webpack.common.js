const { default: merge } = require("webpack-merge");

module.exports = merge({
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(ico|svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[contenthash].[ext]",
            outputPath: "assets/images",
            publicPath: "assets/images",
          },
        },
      },
      {
        test: /\.(woff|woff2|otf|ttf)$/,
        exclude: /node_modules/,
        loader: "url-loader",
        options: {
          name: "[name].[contenthash].[ext]",
          outputPath: "assets/fonts",
          publicPath: "assets/fonts",
        },
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
});
