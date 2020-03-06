import axios from 'axios'

const getPlayLists = axios.get(`${process.env.VUE_APP_baseURL}/top/playlist`, { withCredentials: true })
  .then((response) => response.data.playlists)

const getPlayListById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/playlist/detail?id=${id}`, { withCredentials: true })
  .then((response) => response.data.playlist)

const getMusicDetailById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/song/detail?ids=${id}`, { withCredentials: true })
  .then((response) => response.data.songs[0])

const getMusicUrlById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/song/url?id=${id}`, { withCredentials: true })
  .then((response) => response.data.data[0])

const getSearchResult = (text) => axios.get(`${process.env.VUE_APP_baseURL}/search?keywords=${text}`, { withCredentials: true })
  .then((response) => response.data.result.songs)

export {
  getPlayLists,
  getPlayListById,
  getMusicDetailById,
  getMusicUrlById,
  getSearchResult
}
