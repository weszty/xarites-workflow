const path = require("path"),
  settings = require("./settings");

module.exports = {
  entry: {
    App: settings.appLocation + "public/js/module-scripts"
  },
  output: {
    path: path.resolve(__dirname, settings.appLocation + "public/js/build"),
    filename: "scripts-bundled.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  mode: settings.env
};
