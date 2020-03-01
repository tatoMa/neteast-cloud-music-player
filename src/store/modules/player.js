import mock from '../../utils/mock'
export default {
  namespaced: true,
  state: {
    playing: false,
    song: mock
  },
  mutations: {
    togglePlaying: (state) => {
      state.playing = !state.playing
    }
  },
  actions: {

  },
  getters: {
    getPlaying: (state) => {
      return state.playing
    },
    getSong: (state) => {
      return state.song
    }
  }
}
