import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CaseStudy from '../views/CaseStudy.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/project/:id', name: 'CaseStudy', component: CaseStudy }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
