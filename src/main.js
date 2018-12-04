// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
// 全局样式
import './assets/css/index.css'
// 导入路由
import router from './router'
// 导入axios
import axios from 'axios'

// 导入ui
import ElementUI from 'element-ui'

Vue.use(ElementUI)

Vue.prototype.$http = axios
// 设置请求地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 添加请求拦截器
axios.interceptors.request.use((config) => {
  console.log(config)
  if (config.url.indexOf('login') <= 0) {
    config.headers['Authorization'] = localStorage.getItem('token')
  }
  return config
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
