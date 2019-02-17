# scss

## installation
```shell
npm i -D css-loader node-sass sass-loader mini-css-extract-plugin
```

```javascript
var MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )

module.exports = {
  entry: [
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
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin( {
      filename: 'css/app.css'
    } )
  ]
}
```
