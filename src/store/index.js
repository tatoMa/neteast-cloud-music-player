import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'
import { getPlayLists } from '../utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appDrawer: false,
    playLists: []
  },
  mutations: {
    toggleAppDrawer (state) {
      state.appDrawer = !state.appDrawer
    },
    setPlayLists (state) {
      getPlayLists.then(res => { state.playLists = res }
      )
    }
  },
  actions: {

  },
  getters: {
    appDrawer: (state) => {
      return state.appDrawer
    },
    getPlayLists: (state) => {
      return state.playLists
    }
  },
  modules: {
    player
  }
})
