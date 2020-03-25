import { getNewAlbums, getAlbumsByArtistId, getAlbumById } from '../../utils/api'
import store from '..'

export default {
  namespaced: true,
  state: {
    albumsByArtistId: null,
    newAlbums: null,
    albumById: null
  },
  mutations: {
    setAlbumsByArtistId: (state, payload) => {
      state.albumsByArtistId = payload
    },
    setNewAlbums: (state, payload) => {
      state.newAlbums = payload
    },
    setAlbumById: (state, payload) => {
      state.albumById = payload
    }
  },
  actions: {
    fetchAlbumsByArtistId: async (state, id) => {
      try {
        store.commit('album/setAlbumsByArtistId', null)
        const albums = await getAlbumsByArtistId(id)
        console.log('albumByArtistId', albums)
        store.commit('album/setAlbumsByArtistId', albums)
      } catch (error) {
        console.log(error)
      }
    },
    fetchNewAlbums: async (state) => {
      try {
        if (!store.getters.getNewAlbums) {
          const albums = await getNewAlbums()
          store.commit('album/setNewAlbums', albums)
        }
      } catch (error) {
        console.log(error)
      }
    },
    FetchAlbumById: async (state, id) => {
      try {
        store.commit('album/setAlbumById', null)
        const albums = await getAlbumById(id)
        console.log('FetchAlbumById', albums)
        store.commit('album/setAlbumById', albums)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    getAlbumsByArtistId: (state) => {
      return state.albumsByArtistId
    },
    getNewAlbums: (state) => {
      return state.newAlbums
    },
    getAlbumByIds: (state) => {
      return state.albumById
    }
  }
}
