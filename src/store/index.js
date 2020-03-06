import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'
import { getPlayLists, getPlayListById, getSearchResult, getNewMusicLists } from '../utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // appDrawer: false,
    playListById: null,
    playLists: [],
    searchResult: null,
    newMusicLists: []
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
    },
    setNewMusicLists (state) {
      getNewMusicLists().then(res => {
        console.log(res)
        state.newMusicLists = res
      })
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
    },
    getNewMusicLists: (state) => {
      return state.newMusicLists
    }

  },
  modules: {
    player
  }
})
