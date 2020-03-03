import mock from '../../utils/mock'
import { getSongUrlById } from '../../utils/api'

export default {
  namespaced: true,
  state: {
    playing: false,
    song: mock,
    // songId: '',
    songsIds: [],
    playerPlayList: [],
    playerUrlAndInfoList: [],
    currentPlayingSong: null
  },
  mutations: {
    togglePlaying: (state) => {
      state.playing = !state.playing
    },
    addToPlayList: (state, item) => {
      state.playerPlayList = []
      state.playerPlayList.push(item)
    },
    setPlayerUrlAndInfoList: async (state) => {
      if (state.playerPlayList.length > 0) {
        state.playerUrlAndInfoList = []
        await getSongUrlById(state.playerPlayList[0].id).then(res => { state.playerUrlAndInfoList.push(res) })
      }
    },
    setCurrentPlayingSong: (state, song) => {
      console.log('setCurrentSong', song)

      state.currentPlayingSong = song
    }
  },
  actions: {
    setPlayerUrlAndInfoListAndCurrentPlayingSong: async ({ state, commit }) => {
      await commit('setPlayerUrlAndInfoList')
      // await commit('setCurrentPlayingSong', state.playerUrlAndInfoList[0])
    }

  },
  getters: {
    getPlaying: (state) => {
      return state.playing
    },
    getSong: (state) => {
      return state.song
    },
    getPlayerPlayList: (state) => {
      return state.playerPlayList
    },
    getPlayerUrlAndInfoList: (state) => {
      return state.playerUrlAndInfoList
    },
    getCurrentPlayingSong: (state) => {
      return state.currentPlayingSong
    }
  }
}
