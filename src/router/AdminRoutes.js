import Home from '../views/Home'

export default [
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
  }
]
