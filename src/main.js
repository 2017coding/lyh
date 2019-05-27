// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill' // 编译ES6API
import 'normalize.css/normalize.css' // 样式初始化
import '@/common/config/errorLog' // 错误日志
import '@/common/style/index.scss' // 自定义样式
// import prototype from '@/common/js/prototype' // 自定义方法，用于全局调用

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
