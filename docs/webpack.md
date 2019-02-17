# webpack
https://webpack.js.org/guides/getting-started/

## installation
```shell
npm i -D webpack webpack-cli
```

## package.json
```json
{
  "scripts": {
    "build": "webpack --mode none"
  }
}
```

## webpack.config.js
```javascript
var path = require('path');

module.exports = {
  entry: [
    './src/app.js',
  ],

  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'public')
  }
}

```
