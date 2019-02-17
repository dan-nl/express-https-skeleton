'use strict'

var path = require( 'path' )
var MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )

module.exports = {
  entry: [
    './src/app.js',
    './src/app.scss'
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ]
          }
        }
      }
    ]
  },

  output: {
    filename: 'js/app.js',
    path: path.resolve( __dirname, 'public' )
  },

  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'css/app.css'
    } )
  ]
}
