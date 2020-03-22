// import mock from '../../utils/mock'
import { getAllTopArtist } from '../../utils/api'
import store from '..'

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
    fetchTopArtist: async (state) => {
      try {
        const artist = await getAllTopArtist()
        store.commit('artist/setTopArtist', artist.artists)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    getTopArtist: (state) => {
      return state.topArtist
    }
  }
}
