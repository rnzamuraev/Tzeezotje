const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

const hash = (ext) => {
  return isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`;
};

console.log("IS DEV", isDev);
console.log("IS PROD", isProd);

const jsLoaders = () => {
  const loader = [
    {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  ];

  if (isDev) {
    loader.push("eslint-loader");
  }

  return loader;
};

module.exports = {
  // context: path.resolve(__dirname, "src"),
  // если указываем контекст(папку по умолчанию), то в entry можно не прописывать src
  mode: "development",
  entry: [
    "@babel/polyfill",
    path.resolve(__dirname, "src", "js/script.js"),
  ],
  output: {
    filename: hash("js"),
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: isDev ? "source-map" : false,
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 5000,
    open: true,
    hot: isDev,
  },
  resolve: {
    extensions: [".js", ".html", ".css", ".scss", ".sass"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@core": path.resolve(__dirname, "src/core"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "src",
        "index.html"
      ),
      // minify: {
      //   removeComments: isProd,
      //   collapseWhitespace: isProd,
      // },
    }),
    new MiniCssExtractPlugin({
      filename: hash("css"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(
            __dirname,
            "src/img/favicon.ico"
          ),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: ["@babel/preset-env"],
        //   },

        // },
        use: jsLoaders(),
      },
    ],
  },
};
