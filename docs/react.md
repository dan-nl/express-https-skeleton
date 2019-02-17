# react

## installation
```shell
npm i -D @babel/preset-react
npm i -S react react-dom
```

## webpack
```javascript
module.exports = { 
  use: {
    options: {
      presets: [ '@babel/preset-react' ]
    }
  }
}
```
