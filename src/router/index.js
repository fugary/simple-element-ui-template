import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminRoutes from './AdminRoutes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...AdminRoutes, // 建议把模块的路由独立配置
  {
    path: '/404',
    component: () => import('../views/404')
  },
  {
    path: '/login',
    component: () => import('../views/Login')
  },
  { path: '*', redirect: '/404' }
]

const router = new VueRouter({
  routes
})

export default router
