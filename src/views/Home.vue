<template>
  <div class="home">
    <div v-if="data">
      <ul>
        <li v-for="item in data" :key="item.id">
          <img :src="item.coverImgUrl" :alt="item.name">
          <div @click="goToList(item)">{{item.name}}</div>
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
      data: []
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
    goToList (item) {
      this.$router.push(`/list?id=${item.id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
img{
  max-width : 60px;
}
</style>
