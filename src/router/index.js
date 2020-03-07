import Vue from 'vue'
import VueRouter from 'vue-router'
import TopPlayLists from '../views/TopPlayLists.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TopPlayLists',
    component: TopPlayLists
  },
  {
    path: '/Song',
    name: 'Song',
    component: () => import(/* webpackChunkName: "song" */ '../views/Song.vue')
  },
  {
    path: '/topmusic',
    name: 'TopMusic',
    component: () => import(/* webpackChunkName: "topmusic" */ '../views/TopMusic.vue')
  },
  {
    path: '/playlist',
    name: 'Playlist',
    component: () => import(/* webpackChunkName: "playlist" */ '../views/Playlist.vue')
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
