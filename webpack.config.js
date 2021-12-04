const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtensionReloader = require('webpack-extension-reloader')


module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, './src'),
  devtool: false,
  entry: {
    options: './options/options.js',
    popup: './popup/popup.js',
    background: './background/background.js',
    contentScripts: './contentScripts/content-script.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  plugins: [
    new ExtensionReloader(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
        { from: 'styles', to: 'styles' },
        { from: 'manifest.json', to: 'manifest.json' },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Options',
      template: './options/options.html',
      filename: 'options.html',
      chunks: ['options'],
    }),
    new HtmlWebpackPlugin({
      title: 'Popup',
      template: './popup/popup.html',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
  ]
};