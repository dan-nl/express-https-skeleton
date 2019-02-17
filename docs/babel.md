# babel

## installation
```shell
npm i -D babel-loader @babel/core @babel/preset-env
```

```javascript
var path = require( 'path' )

module.exports = {
  module: {
    rules: [
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
  }
}
```
