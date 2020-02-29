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
    path: '/playlist',
    name: 'Playlist',
    component: () => import(/* webpackChunkName: "about" */ '../views/Playlist.vue')
  },
  {
    path: '/player',
    name: 'Player',
    component: () => import(/* webpackChunkName: "about" */ '../views/Player.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
