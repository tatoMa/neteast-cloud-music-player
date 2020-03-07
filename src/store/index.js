import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'
import {
  getPlayLists,
  getPlayListById,
  getSearchResultByText,
  getNewMusicLists,
  getTopMusicListsById
} from '../utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // appDrawer: false,
    playListById: null,
    playLists: [],
    searchResult: null,
    newMusicLists: [],
    topMusicListsById: { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [] }
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
      getSearchResultByText(text).then(res => { state.searchResult = res })
      // console.log('searching', state.searchResult)
    },
    setNewMusicLists (state) {
      getNewMusicLists().then(res => {
        // console.log(res)
        state.newMusicLists = res
      })
    },
    setTopMusicListsById (state, id) {
      getTopMusicListsById(id).then(res => {
        // console.log(id, res)
        state.topMusicListsById[id] = res
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
    },
    getTopMusicListsById: (state) => {
      console.log(state.topMusicListsById)

      return state.topMusicListsById
    }

  },
  modules: {
    player
  }
})
