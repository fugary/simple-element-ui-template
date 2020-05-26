import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/admin',
    component: Home,
    redirect: '/admin/user-list',
    name: 'Settings',
    children: [
      {
        path: '/admin/user-list',
        name: 'UserList',
        component: () => import('../views/user/UserList.vue')
      },
      {
        path: '/admin/role-list',
        name: 'RoleList',
        component: () => import('../views/user/RoleList.vue')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('../views/404'),
    hidden: true
  },
  { path: '*', redirect: '/404' }
]

const router = new VueRouter({
  routes
})

export default router
