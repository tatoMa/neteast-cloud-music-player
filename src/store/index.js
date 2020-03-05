import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'
import { getPlayLists, getPlayListById } from '../utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appDrawer: false,
    playListById: null,
    playLists: []

  },
  mutations: {
    toggleAppDrawer (state) {
      console.log('vuex toggled app drawer')

      state.appDrawer = !state.appDrawer
    },
    setPlayListById (state, id) {
      state.playListById = null
      getPlayListById(id).then(res => { state.playListById = res }
      )
    },
    setPlayLists (state) {
      getPlayLists.then(res => { state.playLists = res }
      )
    }

  },
  actions: {

  },
  getters: {
    getAppDrawer: (state) => {
      return state.appDrawer
    },
    getPlayListById: (state) => {
      return state.playListById
    },
    getPlayLists: (state) => {
      return state.playLists
    }

  },
  modules: {
    player
  }
})
