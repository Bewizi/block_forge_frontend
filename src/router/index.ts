import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import PageLayout from '@/components/layouts/PageLayout.vue'
import AuthLayout from '@/auth/AuthLayout.vue'

const routes = [
  {
    path: '/',
    component: PageLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue'),
      },
      {
        path: '/block/:id',
        name: 'block',
        component: () => import('@/views/BlockView.vue'),
      },
      {
        path: '/hollow',
        name: 'hollow',
        component: () => import('@/pages/Hollow_Block_Page.vue'),
      },
      {
        path: '/solid',
        name: 'solid',
        component: () => import('@/pages/Solid_Block_Page.vue'),
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/ContactView.vue'),
      },
      {
        path: '/projects',
        name: 'projects',
        component: () => import('@/views/ProjectView.vue'),
      },
    ],
  },

  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/auth/LoginPage.vue'),
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/auth/RegisterPage.vue'),
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
