## COOKING MPA STATIC

用 cooking 搭建的多页静态 WEBAPPP 前端构建工具

### 特性

- [cooking](https://github.com/ElemeFE/cooking)，饿了么大前端(ElemeFE)的开源前端构建工具。基于 webpack，简化配置，提供更人性化的开发环境与发布环境的构建方式。
- 不需全局安装 cooking-cli，精确控制依赖，直接 `npm i` 安装依赖与环境。
- 多入口，webpack 式工程化。
- 支持 SASS 预编译样式文件，PostCSS 处理样式兼容， 支持 es6 语法，支持模块按需加载，提取 vendor 模块，配置公共和各入口 cdn 资源。
- 代码混淆压缩，脚本样式文件自动注入 html 模板。
- 开发环境浏览器热刷新即时预览。

### 安装

#### 运行环境

- Node.js: 4+
- npm: 3+
- Python 2.7.x

### 使用

安装依赖

```shell
$ npm install
```

若访问 npm 较慢，自备爬梯子设置 cmd 的代理，或配置淘宝 npm 镜像

```shell
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

然后可以用 `cnpm` 安装 `package.json` 配置的依赖

```shell
$ cnpm install // or cnpm install [package name]
```

开发环境运行

```shell
$ npm run dev
```

浏览器打开 `http://localhost:8888/home.html` 即为 `home` 入口的页面

发布代码

```shell
$ npm run build
```

代码于 `dist` 文件夹下

### 配置说明

`app.json` 下，`pages` 属性数组内对象项对应 `src/pages/[entry]` 文件夹，依据目录约定文件命名或自行配置更多。

