import { getSearchSuggestionByText } from '../../utils/api'
import store from '..'

export default {
  namespaced: true,
  state: {
    searchSuggestion: null
  },
  mutations: {
    setSearchSuggestion: (state, payload) => {
      state.searchSuggestion = payload
    }
  },
  actions: {
    fetchSearchSuggestionByText: async (state, text) => {
      try {
        store.commit('search/setSearchSuggestion', null)
        const result = await getSearchSuggestionByText(text)
        console.log(result)
        store.commit('search/setSearchSuggestion', result)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    getSearchSuggestion: (state) => {
      return state.searchSuggestion
    }
  }
}
