// import mock from '../../utils/mock'
import { getMusicUrlById } from '../../utils/api'

export default {
  namespaced: true,
  state: {
    paused: true,
    // song: mock,
    // songId: '',
    // songsIds: [],
    musicDetailsList: [],
    musicUrlsListById: []
    // currentPausedSong: null
  },
  mutations: {
    togglePaused: (state, payload) => {
      if (payload) {
        state.paused = true
      } else state.paused = false
      // state.paused = !state.paused
    },
    setMusicDetailsList: (state, item) => {
      state.musicDetailsList = []
      state.musicDetailsList.push(item)
    },
    setMusicUrlsListById: async (state) => {
      if (state.musicDetailsList.length > 0) {
        state.musicUrlsListById = []
        await getMusicUrlById(state.musicDetailsList[0].id).then(res => { state.musicUrlsListById.push(res) })
      }
    }
    // setCurrentPausedSong: (state, song) => {
    //   console.log('setCurrentSong', song)

    //   state.currentPausedSong = song
    // }
  },
  actions: {
    // setMusicUrlsListByIdAndCurrentPausedSong: async ({ state, commit }) => {
    //   await commit('setMusicUrlsListById')
    //   // await commit('setCurrentPausedSong', state.musicUrlsListById[0])
    // }

  },
  getters: {
    getPaused: (state) => {
      return state.paused
    },
    // getSong: (state) => {
    //   return state.song
    // },
    getMusicDetailsList: (state) => {
      return state.musicDetailsList
    },
    getMusicUrlsListById: (state) => {
      return state.musicUrlsListById
    }
    // getCurrentPausedSong: (state) => {
    //   return state.currentPausedSong
    // }
  }
}
