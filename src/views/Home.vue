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

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="item in data"
          :key="item.id"
          cols="6"
          sm="4"
          md="3"
          class="pa-2"
        >
          <v-card>
            <v-img
              :src="item.coverImgUrl"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              @click="goToPlaylist(item)"
            >
              <v-card-title class="subtitle-1" v-text="item.name"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-btn icon @click="goToPlaylist(item)">
                <v-icon>mdi-play-circle-outline</v-icon>
              </v-btn>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-playlist-music</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- <div v-if="data">
      <ul>
        <li v-for="item in data" :key="item.id">
          <img :src="item.coverImgUrl" :alt="item.name">
          <div @click="goToPlaylist(item)">{{item.name}}</div>
          </li>
      </ul>
    </div> -->
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
