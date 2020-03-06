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
    component: () => import(/* webpackChunkName: "about" */ '../views/Song.vue')
  },
  // {
  //   path: '/Topplaylists',
  //   name: 'TopPlayLists',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/TopPlayLists.vue')
  // },
  {
    path: '/topmusic',
    name: 'TopMusic',
    component: () => import(/* webpackChunkName: "about" */ '../views/TopMusic.vue')
  },
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
