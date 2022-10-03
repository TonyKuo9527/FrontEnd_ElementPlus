import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/layouts/Base.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
      },
      {
        path: '/try1',
        name: '1',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/1.vue'),
      },
      {
        path: '/try2',
        name: '2',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/2.vue'),
      },
      {
        path: '/try3',
        name: '3',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/3.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router