const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let isDev = process.env.NODE_ENV === 'development'
let isProd = !isDev

function getFilename(extension) {
  return isDev ? `[name].${extension}` : `[name].[contenthash].${extension}`
}

function optimize() {
  let optimizationConfig = {
    splitChunks: {
      chunks: 'all',
    },
  }

  if (isProd) {
    optimizationConfig.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }
  return optimizationConfig
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',
  output: {
    filename: getFilename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  optimization: optimize(),
  devServer: {
    port: 8080,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './assets/index.html',
      favicon: './assets/favicon.ico',
      minify: isProd,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: getFilename('css')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
}