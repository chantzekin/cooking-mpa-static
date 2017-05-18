//

var path = require('path')
var cooking = require('cooking')

var app = require('./app.json')

var entries = function () {
  var arr = {}
  app.pages.forEach(function (page) {
    arr[page.entry] = path.resolve(app.basePath, page.entry)
  })
  return arr
}

cooking.set({
  entry: entries(),
  dist: './dist',
  template: [
    {
      filename: 'home.html',
      template: 'src/pages/home/index.tpl',
      chunks: ['home']
    },
    {
      filename: 'about.html',
      template: 'src/pages/about/index.tpl',
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

  resolve: {
    extensions: ['.js', '.json'],
  },

  extends: ['sass', 'autoprefixer']
})

module.exports = cooking.resolve()
