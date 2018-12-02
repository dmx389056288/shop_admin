// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
// 全局样式
import './assets/css/index.css'
// 导入组件
import Login from '@/components/login/Login'
// 导入路由
import VueRouter from 'vue-router'
// 导入ui
import ElementUI from 'element-ui'
Vue.use(VueRouter)
Vue.use(ElementUI)
const router = new VueRouter({
  routes: [
    {path: '/login', component: Login}
  ]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
