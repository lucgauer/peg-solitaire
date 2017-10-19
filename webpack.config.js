const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const browserSync = require('browser-sync-webpack-plugin');

module.exports = [
  {
    entry: './src/scripts/app.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'app.js'
    },
    module: {
      rules: [{
        test: /\.s(a|c)ss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }]
    },
    plugins: [
      new browserSync({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['./dist'] }
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({template: './src/index.html'})
    ]
  }
];
