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
    path: '/Song',
    name: 'Song',
    component: () => import(/* webpackChunkName: "about" */ '../views/Song.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue')
  },
  {
    path: '/player',
    name: 'Player',
    component: () => import(/* webpackChunkName: "about" */ '../views/Player.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
