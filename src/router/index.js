// Composables
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/skills',
    component: () => import('@/layouts/MainAppBarLayout.vue'),
    children: [
      {
        path: '',
        name: 'Skills',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Skills.vue'),
      }
    ]
  },
  {
    path: '/projects',
    component: () => import('@/layouts/MainAppBarLayout.vue'),
    children: [
      {
        path: '',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Projects.vue'),
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
