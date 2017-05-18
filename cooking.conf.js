//

var path = require('path')
var cooking = require('cooking')

cooking.set({
  entry: {
    home: './src/home/main.js',
    about: './src/about/main.js'
  },
  dist: './dist',
  template: [
    {
      filename: 'home.html',
      template: 'src/home/index.tpl',
      chunks: ['home']
    },
    {
      filename: 'about.html',
      template: 'src/about/index.tpl',
      chunks: ['about']
    },
  ],

  //dev
  devServer: {
    enable: true,
    publicPath: '/',
    hot: true,
    extractCSS: false,
    port: 8888,
    hostname: 'localhost',
  },

  //prod
  clean: true,
  hash: true,
  sourceMap: true,
  extractCSS: true,

  extends: ['sass', 'autoprefixer']
})

module.exports = cooking.resolve()
