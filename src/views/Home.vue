<template>
  <div class="home">
    <v-text-field
      clearable
      label="Regular"
      placeholder="Placeholder"
      v-model="search"
      @keydown.enter="searchName"
    ></v-text-field>
    {{search}}
    <div v-if="data">
      <ul>
        <li v-for="item in data" :key="item.id">
          <img :src="item.coverImgUrl" :alt="item.name">
          <div @click="goToPlaylist(item)">{{item.name}}</div>
          </li>
      </ul>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // },
  data () {
    return {
      data: [],
      search: ''
    }
  },
  mounted () {
    // const instance = axios.create({
    //   baseURL: 'https://neteast-cloud-music-api.herokuapp.com/',
    //   timeout: 1000,
    //   headers: { 'X-Custom-Header': 'foobar' }
    // })
    // console.log(process.env.VUE_APP_baseURL)

    axios.get(`${process.env.VUE_APP_baseURL}/top/playlist`)
      .then((response) => {
        console.log(response.data.playlists)
        this.data = response.data.playlists
      })
  },
  methods: {
    goToPlaylist (item) {
      this.$router.push(`/playlist?id=${item.id}`)
    },
    goToSearchName (item) {
      this.$router.push(`/search?keywords=${this.search}`)
    },
    searchName () {
      this.goToSearchName()
    }
  }
}
</script>
<style lang="scss" scoped>
img{
  max-width : 60px;
}
</style>
