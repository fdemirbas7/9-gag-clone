import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hot from '../views/Hot.vue'
import Trending from '../views/Trending.vue'
import Fresh from '../views/Fresh.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hot',
    name: 'Hot',
    component: Hot
  },
  {
    path: '/trending',
    name: 'Trending',
    component: Trending
  },
  {
    path: '/fresh',
    name: 'Fresh',
    component: Fresh
  },

]

const router = new VueRouter({
  routes
})

export default router
