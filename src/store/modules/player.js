// import mock from '../../utils/mock'
import { getMusicUrlById, getMusicDetailById } from '../../utils/api'
// import { getMusicUrlById, getMusicUrlByIds, getMusicDetailById } from '../../utils/api'
import store from '..'

export default {
  namespaced: true,
  state: {
    paused: true,
    // song: mock,
    // songId: '',
    // songsIds: [],
    // musicDetailById: null,
    musicDetailsList: [],
    musicUrlsList: [],
    currentTrack: 0
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
      state.currentTrack = 0
      state.musicDetailsList = []
      state.musicDetailsList.push(payload)
    },
    addMusicDetailById: (state, payload) => {
      // console.log(payload)
      // state.currentTrack = 0
      // state.musicDetailsList = []
      state.musicDetailsList.push(payload)
    },
    setMusicDetailByIdsList: (state, payload) => {
      // console.log(payload)
      state.currentTrack = 0
      state.musicDetailsList = []
      state.musicDetailsList = payload
    },
    setMusicUrlsListById: (state) => {
      if (state.musicDetailsList.length > 0) {
        state.musicUrlsList = []
        // console.log(state.musicDetailsList[state.currentTrack].id)
        getMusicUrlById(state.musicDetailsList[state.currentTrack].id).then(res => { state.musicUrlsList.push(res) })
      }
    },
    addMusicUrlsListById: (state) => {
      // console.log(state.musicDetailsList)
      if (state.musicDetailsList.length > 0) {
        // state.musicUrlsList = []
        // console.log(state.musicDetailsList[state.currentTrack].id)
        getMusicUrlById(state.musicDetailsList[state.musicDetailsList.length - 1].id).then(res => { state.musicUrlsList.push(res) })
      }
    },
    setNextTrack: (state) => {
      if (state.currentTrack < state.musicDetailsList.length - 1) {
        state.currentTrack++
        store.commit('player/setMusicUrlsListById')
      }
    },
    setPrevTrack: (state) => {
      if (state.currentTrack > 0) {
        state.currentTrack--
        store.commit('player/setMusicUrlsListById')
      }
    },
    setMusicDetailByIdFromSearch: (state, id) => {
      state.currentTrack = 0
      state.musicUrlsList = []
      state.musicDetailsList = []
      getMusicDetailById(id).then(res => {
        // state.musicDetailById = res
        state.musicDetailsList.push(res)
        store.commit('player/setMusicUrlsListById')
      })
    }
    // setMusicUrlsListByIdsList: (state) => {
    //   if (state.musicDetailsList.length > 0) {
    //     state.musicUrlsList = []
    //     console.log(state.musicDetailsList[0].id)

    //     const ids = state.musicDetailsList.map((item) => item.id)
    //     getMusicUrlByIds(ids.join(',')).then(res => {
    //       console.log(res)

    //       state.musicUrlsList = res
    //     })
    //   }
    // },

    // setCurrentPausedSong: (state, song) => {
    //   console.log('setCurrentSong', song)

    //   state.currentPausedSong = song
    // }
  },
  actions: {
    // setMusicUrlsListByIdAndCurrentPausedSong: async ({ state, commit }) => {
    //   await commit('setMusicUrlsListById')
    //   // await commit('setCurrentPausedSong', state.musicUrlsList[0])
    // }

  },
  getters: {
    getPaused: (state) => {
      return state.paused
    },
    getCurrentTrack: (state) => {
      return state.currentTrack
    },
    getMusicDetailsList: (state) => {
      return state.musicDetailsList
    },
    getMusicUrlsListById: (state) => {
      return state.musicUrlsList
    },
    getMusicDetailById: (state) => {
      return state.musicDetailById
    }
    // getCurrentPausedSong: (state) => {
    //   return state.currentPausedSong
    // }
  }
}
