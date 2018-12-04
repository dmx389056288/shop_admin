import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/login/Login'
import Home from '@/components/home/Home'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {path: '/home', component: Home}
  ]
})
router.beforeEach((to, from, next) => {
  // 判断是不是登录页面，是就直接展示
  if (to.path === '/login') {
    return next()
  }
  // 登录校验
  const token = localStorage.getItem('token')
  // 如果访问的不是登录页面，判断是否有token，没有就跳转到登录页面
  if (!token) {
    return next('/login')
  }
  next()
})

export default router
