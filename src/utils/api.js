import axios from 'axios'

const getPlayLists = () => axios.get(`${process.env.VUE_APP_baseURL}/top/playlist`, { withCredentials: true })
  .then(response => response.data.playlists)
  .catch(error => console.log(error))

const getAllPlayListTags = () => axios.get(`${process.env.VUE_APP_baseURL}/playlist/catlist`, { withCredentials: true })
  .then(response => response.data.sub)
  .catch(error => console.log(error))

const getPlayListByTagName = (name) => axios.get(`${process.env.VUE_APP_baseURL}/top/playlist?cat=${name}`, { withCredentials: true })
  .then(response => response.data.playlists)
  .catch(error => console.log(error))

const getNewMusicLists = () => axios.get(`${process.env.VUE_APP_baseURL}/personalized/newsong`, { withCredentials: true })
  .then(response => response.data.result)
  .catch(error => console.log(error))

const getTopMusicListsById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/top/list?idx=${id}`, { withCredentials: true })
  .then(response => response.data.playlist)
  .catch(error => console.log(error))

const getPlayListById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/playlist/detail?id=${id}`, { withCredentials: true })
  .then(response => response.data.playlist)
  .catch(error => console.log(error))

const getMusicDetailById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/song/detail?ids=${id}`, { withCredentials: true })
  .then(response => response.data.songs[0])
  .catch(error => console.log(error))

const getMusicDetailByIds = (ids) => axios.get(`${process.env.VUE_APP_baseURL}/song/detail?ids=${ids}`, { withCredentials: true })
  .then(response => response.data.songs)
  .catch(error => console.log(error))

const getMusicUrlById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/song/url?id=${id}`, { withCredentials: true })
  .then(response => response.data.data[0])
  .catch(error => console.log(error))

const getMusicUrlByIds = (ids) => axios.get(`${process.env.VUE_APP_baseURL}/song/url?id=${ids}`, { withCredentials: true })
  .then(response => response.data.data)
  .catch(error => console.log(error))

const getSearchResultByText = (text) => axios.get(`${process.env.VUE_APP_baseURL}/search?keywords=${text}`, { withCredentials: true })
  .then(response => response.data.result.songs)
  .catch(error => console.log(error))

const getCommentsById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/comment/music?id=${id}`, { withCredentials: true })
  .then(response => response.data)
  .catch(error => console.log(error))

const getLyricById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/lyric?id=${id}`, { withCredentials: true })
  .then(response => response.data)
  .catch(error => console.log(error))

export {
  getPlayLists,
  getAllPlayListTags,
  getPlayListByTagName,
  getNewMusicLists,
  getTopMusicListsById,
  getPlayListById,
  getMusicDetailById,
  getMusicDetailByIds,
  getMusicUrlById,
  getMusicUrlByIds,
  getSearchResultByText,
  getCommentsById,
  getLyricById
}
