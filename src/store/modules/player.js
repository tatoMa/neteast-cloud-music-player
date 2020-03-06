// import mock from '../../utils/mock'
import { getMusicUrlById, getMusicDetailById } from '../../utils/api'
import store from '..'

export default {
  namespaced: true,
  state: {
    paused: true,
    // song: mock,
    // songId: '',
    // songsIds: [],
    musicDetailById: null,
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
    setMusicDetailById: (state, payload) => {
      // console.log(payload)
      state.musicDetailsList = []
      state.musicDetailsList.push(payload)
    },
    setMusicDetailByIdsList: (state, payload) => {
      // console.log(payload)
      state.musicDetailsList = []
      state.musicDetailsList = payload
    },
    setMusicUrlsListById: (state) => {
      if (state.musicDetailsList.length > 0) {
        state.musicUrlsListById = []
        getMusicUrlById(state.musicDetailsList[0].id).then(res => { state.musicUrlsListById.push(res) })
      }
    },
    setMusicDetailByIdFromSearch: (state, id) => {
      console.log('setMusicDetailById')

      state.musicUrlsListById = []
      getMusicDetailById(id).then(res => {
        state.musicDetailById = res
        state.musicDetailsList = []
        state.musicDetailsList.push(state.musicDetailById)
        store.commit('player/setMusicUrlsListById')
      })
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
    },
    getMusicDetailById: (state) => {
      return state.musicDetailById
    }
    // getCurrentPausedSong: (state) => {
    //   return state.currentPausedSong
    // }
  }
}
