import Vue from 'vue'
import VueRouter from 'vue-router'
import HotPlayLists from '../views/HotPlayLists.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HotPlayLists',
    component: HotPlayLists
  },
  {
    path: '/Song',
    name: 'Song',
    component: () => import(/* webpackChunkName: "about" */ '../views/Song.vue')
  },
  // {
  //   path: '/hotplaylists',
  //   name: 'HotPlayLists',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/HotPlayLists.vue')
  // },
  {
    path: '/playlist',
    name: 'Playlist',
    component: () => import(/* webpackChunkName: "about" */ '../views/Playlist.vue')
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
