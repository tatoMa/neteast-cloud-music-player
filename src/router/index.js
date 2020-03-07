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
  // {
  //   path: '/Song',
  //   name: 'Song',
  //   component: () => import(/* webpackChunkName: "song" */ '../views/Song.vue')
  // },
  {
    path: '/topplaylists',
    name: 'TopPlayLists',
    component: () => import(/* webpackChunkName: "topplaylists" */ '../views/TopPlayLists.vue')
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
