// Composables
import { createRouter, createWebHistory } from 'vue-router'

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
    path: '/experience',
    component: () => import('@/layouts/MainAppBarLayout.vue'),
    children: [
      {
        path: '',
        name: 'Experience',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Experience.vue'),
      }
    ]
  },
  {
    path: '/bio',
    component: () => import('@/layouts/MainAppBarLayout.vue'),
    children: [
      {
        path: '',
        name: 'Bio',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Bio.vue'),
      }
    ]
  },
  {
    path: '/projects',
    component: () => import('@/layouts/MainAppBarLayout.vue'),
    children: [
      {
        path: '',
        name: 'Bio',
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
