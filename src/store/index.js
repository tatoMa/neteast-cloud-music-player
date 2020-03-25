import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'
import artist from './modules/artist'
import search from './modules/search'
import album from './modules/album'
import {
  getPlayLists,
  getAllPlayListTags,
  getPlayListByTagName,
  getPlayListById,
  getSearchResultByText,
  getNewMusicLists,
  getTopMusicListsById,
  getCommentsById
} from '../utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // appDrawer: false,
    playListById: null,
    playLists: [],
    allPlayListTags: null,
    // playListByTagName: null,
    searchResult: null,
    newMusicLists: [],
    comments: null,
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
      state.playLists = []
      getPlayLists().then(res => { state.playLists = res })
    },
    setAllPlayListTags (state) {
      getAllPlayListTags().then(res => {
        state.allPlayListTags = res
      })
    },
    setPlayListByTagName (state, tagName) {
      state.playLists = []
      getPlayListByTagName(tagName).then(res => {
        // console.log(res)
        state.playLists = res
      })
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
    },
    setCommentsById (state, id) {
      // console.log(id)
      state.comments = []
      getCommentsById(id).then(res => {
        // console.log(id, res)
        state.comments = res.hotComments
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
      // console.log(state.playListById)
      return state.playListById
    },
    getPlayLists: (state) => {
      // console.log(state.playLists)
      return state.playLists
    },
    getAllPlayListTags: (state) => {
      return state.allPlayListTags
    },
    getSearchResult: (state) => {
      return state.searchResult
    },
    getNewMusicLists: (state) => {
      return state.newMusicLists
    },
    getTopMusicListsById: (state) => {
      return state.topMusicListsById
    },
    getCommentsById: (state) => {
      return state.comments
    }

  },
  modules: {
    player,
    artist,
    search,
    album
  }
})
