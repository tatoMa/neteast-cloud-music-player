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
    path: '/playlist',
    name: 'Playlist',
    component: () => import(/* webpackChunkName: "topplaylists" */ '../views/TopPlayLists.vue')
  },
  {
    path: '/playlistdetail',
    name: 'PlaylistDetail',
    component: () => import(/* webpackChunkName: "playlistdetail" */ '../views/PlaylistDetail.vue')
  },
  {
    path: '/topartist',
    name: 'TopArtist',
    component: () => import(/* webpackChunkName: "topartist" */ '../views/TopArtist.vue')
  },
  {
    path: '/newalbum',
    name: 'NewAlbum',
    component: () => import(/* webpackChunkName: "newalbum" */ '../views/NewAlbum.vue')
  },
  {
    path: '/artist',
    name: 'Artist',
    component: () => import(/* webpackChunkName: "artist" */ '../views/Artist.vue')
  },
  {
    path: '/artist/albums',
    name: 'ArtistAlbums',
    component: () => import(/* webpackChunkName: "artistalbums" */ '../views/ArtistAlbums.vue')
  },
  {
    path: '/album',
    name: 'AlbumDetail',
    component: () => import(/* webpackChunkName: "albumdetail" */ '../views/AlbumDetail.vue')
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
  },
  {
    path: '/search/music',
    name: 'SearchMusic',
    component: () => import(/* webpackChunkName: "search" */ '../views/SearchMusic.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
