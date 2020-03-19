import Vue from 'vue'
import VueRouter from 'vue-router'
import TopMusic from '../views/TopMusic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TopMusic',
    component: TopMusic
  },
  {
    path: '/topplaylists',
    name: 'TopPlayLists',
    component: () => import(/* webpackChunkName: "topplaylists" */ '../views/TopPlayLists.vue')
  },
  {
    path: '/playlistdetails',
    name: 'PlaylistDetails',
    component: () => import(/* webpackChunkName: "playlistdetails" */ '../views/PlaylistDetails.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "setting" */ '../views/Setting.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
