// import mock from '../../utils/mock'
import { getAllTopArtist } from '../../utils/api'
// import store from '..'

export default {
  namespaced: true,
  state: {
    topArtist: null
  },
  mutations: {
    setTopArtist: (state, payload) => {
      state.topArtist = payload
    }
  },
  actions: {
    fetchTopArtist: (state) => {
      try {
        getAllTopArtist()
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    // getPaused: (state) => {
    //   return state.paused
    // }
  }
}
