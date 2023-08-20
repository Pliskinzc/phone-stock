import { createRouter, createWebHistory } from 'vue-router'
import PhonePage from '@/views/PhonePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PhonePage
    },
    {
      path: '/ajouter',
      name: 'addphone',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddPhone.vue')
    }
  ]
})

export default router
