import axios from 'axios'

const getPlayLists = axios.get(`${process.env.VUE_APP_baseURL}/top/playlist`)
  .then((response) => response.data.playlists
  )

export { getPlayLists }
