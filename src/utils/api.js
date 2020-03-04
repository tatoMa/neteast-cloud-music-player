import axios from 'axios'

const getPlayLists = axios.get(`${process.env.VUE_APP_baseURL}/top/playlist`, { withCredentials: true })
  .then((response) => response.data.playlists
  )
const getMusicDetailById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/song/detail?ids=${id}`)
  .then((response) => response.data.songs[0]
  )
const getMusicUrlById = (id) => axios.get(`${process.env.VUE_APP_baseURL}/song/url?id=${id}`)
  .then((response) => response.data.data[0]
  )

export {
  getPlayLists,
  getMusicDetailById,
  getMusicUrlById
}
