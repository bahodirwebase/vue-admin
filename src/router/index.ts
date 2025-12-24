import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        // {
        //   path: '',
        //   name: 'Dashboard',
        //   component: () => import('@/pages/dashboard/index.vue'),
        // },
      ],
    },
    // {
    //   path: '/login',
    //   component: () => import('@/pages/auth/Login.vue'),
    // },
  ],
})
