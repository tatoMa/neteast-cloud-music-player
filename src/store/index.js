import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appDrawer: false
  },
  mutations: {
    mutateAppDrawer (state) {
      state.appDrawer = !state.appDrawer
      console.log('mutation')
    }
  },
  actions: {
    toggleAppDrawer ({ commit }) {
      commit('mutateAppDrawer')
      console.log('action')
    }
  },
  getters: {
    appDrawer: (state) => {
      return state.appDrawer
    }
  },
  modules: {
    player
  }
})
