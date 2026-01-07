import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '/components/ui-elements/alerts',
          name: 'Alerts',
          component: () => import('@/pages/components/ui-elements/alerts.vue'),
        },
        {
          path : '/components/ui-elements/buttons',
          name : 'Buttons',
          component : () => import('@/pages/components/ui-elements/buttons.vue'),
        },
        {
          path : '/components/ui-elements/cards',
          name : 'Cards',
          component : () => import('@/pages/components/ui-elements/cards.vue'),
        },
        {
          path : '/components/ui-elements/modals',
          name : 'Modals',
          component : () => import('@/pages/components/ui-elements/modals.vue'),
        },
        {
          path : '/components/ui-elements/tabs',
          name : 'Tabs',
          component : () => import('@/pages/components/ui-elements/tabs.vue'),
        }
      ],
    },
    // {
    //   path: '/login',
    //   component: () => import('@/pages/auth/Login.vue'),
    // },
  ],
})
