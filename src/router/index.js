import Vue from 'vue'
import VueRouter from 'vue-router'
import Prologue from '../views/prologue/prologue'
import Index from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'prologue',
    component: Prologue
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
