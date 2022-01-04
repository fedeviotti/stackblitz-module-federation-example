const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = {
  entry: "./src/index",
  mode: "production",
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      filename: 'remoteEntry.js',
      exposes: {
        './Filter': './src/Filter',
      },
      remotes: {
        app2: "app2@https://fv-mf-app2.netlify.app/remoteEntry.js",
        app3: "app3@https://fv-mf-app3.netlify.app/remoteEntry.js",
      },
      shared: {react: {singleton: true}, "react-dom": {singleton: true}},
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

