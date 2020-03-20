// import mock from '../../utils/mock'
import { getMusicUrlById, getMusicDetailById, getLyricById } from '../../utils/api'
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
    currentTrack: 0,
    lyric: null
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
        try {
          getMusicUrlById(state.musicDetailsList[state.currentTrack].id)
            .then(res => {
            // console.log(res)
              state.musicUrlsList.push(res)
              if (!res.url) {
                console.log('no url return')
                store.commit('player/setNextTrack')
              }
              store.commit('player/setLyricById', state.musicDetailsList[state.currentTrack].id)
            })
        } catch (error) {
          error.log('error return', error)
          // state.musicUrlsList.push(res)
          store.commit('player/setNextTrack')
        }
      }
    },
    setMusicUrlsListByPassIdFromMusicList: (state, id) => {
      if (state.musicDetailsList.length > 0) {
        state.musicUrlsList = []
        getMusicUrlById(id)
          .then(res => {
            // console.log(res)
            state.musicUrlsList.push(res)
            store.commit('player/setCurrentTrackByFindIdFromPlaylist', id)
            if (!res.url) {
              console.log('no url return')
              store.commit('player/setNextTrack')
            }
          })
          .catch(res => {
            console.log('error return', res)
            state.musicUrlsList.push(res)
            store.commit('player/setNextTrack')
          })
      }
    },
    setCurrentTrackByFindIdFromPlaylist: (state, id) => {
      const index = state.musicDetailsList.findIndex((item) => {
        return item.id === id
      })
      store.commit('player/setCurrentTrackByIndex', index)
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
    setCurrentTrackByIndex: (state, index) => {
      state.currentTrack = index
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
    },
    setLyricById: (state, id) => {
      getLyricById(id)
        .then(res => {
          state.lyric = res.lrc.lyric
        })
        .catch(() => {
          state.lyric = null
        })
    }
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
      // console.log('music details', state.musicDetailsList)
      return state.musicDetailsList
    },
    getMusicUrlsListById: (state) => {
      // console.log('url info', state.musicUrlsList)
      return state.musicUrlsList
    },
    getMusicDetailById: (state) => {
      return state.musicDetailById
    },
    getLyricById: (state) => {
      // console.log(state.lyric)

      return state.lyric
    }
    // getCurrentPausedSong: (state) => {
    //   return state.currentPausedSong
    // }
  }
}
