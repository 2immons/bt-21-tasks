import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  mode: 'history',
  base: '/bt-21-tasks/',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('../views/SecondView.vue')
    }
  ]
})

export default router
