import axios from 'axios'

const getPlayLists = axios.get(`${process.env.VUE_APP_baseURL}/top/playlist`, { withCredentials: true })
  .then((response) => response.data.playlists)

const getNewMusicLists = () => axios.get(`${process.env.VUE_APP_baseURL}/personalized/newsong`, { withCredentials: true })
  .then((response) => response.data.result)

const getTopMusicListsById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/top/list?idx=${id}`, { withCredentials: true })
  .then((response) => response.data.playlist)

const getPlayListById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/playlist/detail?id=${id}`, { withCredentials: true })
  .then((response) => response.data.playlist)

const getMusicDetailById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/song/detail?ids=${id}`, { withCredentials: true })
  .then((response) => response.data.songs[0])

const getMusicDetailByIds = (ids) => axios.get(`${process.env.VUE_APP_baseURL}/song/detail?ids=${ids}`, { withCredentials: true })
  .then((response) => response.data.songs)

const getMusicUrlById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/song/url?id=${id}`, { withCredentials: true })
  .then((response) => response.data.data[0])

const getMusicUrlByIds = (ids) => axios.get(`${process.env.VUE_APP_baseURL}/song/url?id=${ids}`, { withCredentials: true })
  .then((response) => response.data.data)

const getSearchResultByText = (text) => axios.get(`${process.env.VUE_APP_baseURL}/search?keywords=${text}`, { withCredentials: true })
  .then((response) => response.data.result.songs)

export {
  getPlayLists,
  getNewMusicLists,
  getTopMusicListsById,
  getPlayListById,
  getMusicDetailById,
  getMusicDetailByIds,
  getMusicUrlById,
  getMusicUrlByIds,
  getSearchResultByText
}
