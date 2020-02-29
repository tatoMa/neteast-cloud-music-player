import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://neteast-cloud-music-api.herokuapp.com/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})
axios.get('/top/playlist')
  .then((response) => {
    console.log(response.data)
  })
