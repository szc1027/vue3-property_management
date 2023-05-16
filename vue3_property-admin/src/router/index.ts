import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => {
        '../views/layout.vue'
      }
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/main.vue')
      // children: [{}]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue')
    }
  ]
})

export default router
