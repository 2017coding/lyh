
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  outputDir: 'lyh',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port: 1996,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  chainWebpack: config => {
    //修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .end()
  }
}
