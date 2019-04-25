const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

const pkg = require('./package')
const webpack = require('webpack')
const fs = require('fs')
const name = pkg.name

/*
const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});
*/

let plugins = []


module.exports = (env = {}) => {
  if (env.production) {
    plugins = [
      new webpack.optimize.UglifyJsPlugin({ minimize: true, compressor: { warnings: false }}),
      new webpack.BannerPlugin(`${name} - ${pkg.version}`),
    ]
  } else {
    const index = 'index.html'
    const indexDev = '_' + index
    plugins.push( new HtmlWebpackPlugin({
      template: fs.existsSync(indexDev) ? indexDev : index
    }))
  }

  // plugins.push(extractSass)
  plugins.push( new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].css',
  }))

  return {
    entry: './src',
    output: {
      filename: `./dist/${name}.min.js`,
      library: name,
      libraryTarget: 'umd'
    },
    module: {
      rules: [{
        test: /\.js$/,
        include: /src/,
        use: [{
          loader: 'babel-loader',
        }]
      }/*, {
        test: /\.(sa|sc|c)ss$/,
        include: /src/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ]
      }, {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }*/]
    },
    externals: {'grapesjs': 'grapesjs'},
    plugins,
  }
}