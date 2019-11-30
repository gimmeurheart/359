module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
}

devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 3000,
    watchContentBase: true,
    progress: true
  },
