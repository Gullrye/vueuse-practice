import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/vueuse',
      name: 'vueuse',
      component: () => import('../views/VueUse-test.vue')
    },
    {
      path: '/intro',
      name: 'intro',
      component: () => import('../views/IntroPage.vue')
    },
    {
      path: '/exam',
      name: 'exam',
      component: () => import('../views/ExamList.vue')
    }
  ]
})

export default router
