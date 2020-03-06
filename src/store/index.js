import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'
import { getPlayLists, getPlayListById, getSearchResult } from '../utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // appDrawer: false,
    playListById: null,
    playLists: [],
    searchResult: null

  },
  mutations: {
    // toggleAppDrawer (state) {
    //   state.appDrawer = !state.appDrawer
    // },
    setPlayListById (state, id) {
      state.playListById = null
      getPlayListById(id).then(res => { state.playListById = res }
      )
    },
    setPlayLists (state) {
      getPlayLists.then(res => { state.playLists = res })
    },
    setSearchResult (state, text) {
      state.searchResult = null
      getSearchResult(text).then(res => { state.searchResult = res })
      // console.log('searching', state.searchResult)
    }

  },
  actions: {

  },
  getters: {
    // getAppDrawer: (state) => {
    //   return state.appDrawer
    // },
    getPlayListById: (state) => {
      return state.playListById
    },
    getPlayLists: (state) => {
      return state.playLists
    },
    getSearchResult: (state) => {
      return state.searchResult
    }

  },
  modules: {
    player
  }
})
