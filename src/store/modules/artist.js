import { getAllTopArtists, getArtistById } from '../../utils/api'
import store from '..'

export default {
  namespaced: true,
  state: {
    topArtists: null,
    artist: null
  },
  mutations: {
    setTopArtists: (state, payload) => {
      state.topArtists = payload
    },
    setArtist: (state, payload) => {
      state.artist = payload
    }
  },
  actions: {
    fetchTopArtists: async (state) => {
      try {
        const artist = await getAllTopArtists()
        store.commit('artist/setTopArtists', artist.artists)
      } catch (error) {
        console.log(error)
      }
    },
    fetchArtistById: async (state, id) => {
      try {
        store.commit('artist/setArtist', null)
        const artist = await getArtistById(id)
        console.log(artist)
        store.commit('artist/setArtist', artist)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    getTopArtists: (state) => {
      return state.topArtists
    },
    getArtist: (state) => {
      return state.artist
    }
  }
}
