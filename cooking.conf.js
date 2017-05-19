//

var path = require('path')
var cooking = require('cooking')

// app 配置
var app = require('./app.json')

// 读取配置生成入口与模板
var entries = require('./build/entries')(app)
var templates = require('./build/templates')(app)

cooking.set({
  // 入口文件
  // entries 模块获取多入口配置
  entry: entries,
  // 项目输出路径
  dist: './dist',
  // HTML 模板文件
  // templates 模块获取多页面模板配置
  // html-webpack-plugin 指定模板传参
  template: templates,

  // 开发环境配置
  devServer: {
    // 是否启用
    enable: true,
    // 输入文件目录
    publicPath: '/',
    // 热替换
    hot: true,
    // 提取 css 到文件
    // 开发环境，不作提取便于热替换实时改变页面样式
    extractCSS: false,
    port: 8888,
    hostname: 'localhost',
  },

  // 生产环境配置
  // 构建时先清理输出目录
  clean: true,
  // 输出文件带 7位 hash，便于管理浏览器文件版本缓存
  hash: true,
  sourceMap: true,
  extractCSS: true,
  chunk: true,

  resolve: {
    // import 模块可忽略后缀名
    extensions: ['.js', '.json'],
  },
  alias: {
    'src': path.join(__dirname, 'src'),
    '@': path.join(__dirname, 'src', 'assets')
  },

  // 插件
  // sass: scss文件预编译; autoprefixer: 浏览器兼容样式
  extends: ['sass']
})

module.exports = cooking.resolve()
