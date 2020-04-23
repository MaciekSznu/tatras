import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mountains',
    name: 'Mountains',
    component: () => import('../views/Mountains.vue')
  },
  {
    path: '/winter',
    name: 'Winter',
    component: () => import('../views/Winter.vue')
  },
  {
    path: '/flora',
    name: 'Flora',
    component: () => import('../views/Flora.vue')
  },
  {
    path: '/fauna',
    name: 'Fauna',
    component: () => import('../views/Fauna.vue')
  },
  {
    path: '/routes',
    name: 'Routes',
    component: () => import('../views/Routes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
