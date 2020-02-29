<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        {{id}}
        {{name}}
        {{description}}
        <img :src="coverImgUrl" alt="">
        <div v-for="track in tracks" :key="track.id">
          <p @click="goToSong(track)">{{track.name}} - {{track.id}}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'List',
  data () {
    return {
      id: '',
      name: '',
      description: '',
      coverImgUrl: '',
      tracks: []
    }
  },

  mounted () {
    this.id = this.$route.query.id
    axios.get(`${process.env.VUE_APP_baseURL}/playlist/detail?id=${this.id}`)
      .then((response) => {
        console.log(response.data.playlist)
        this.name = response.data.playlist.name
        this.description = response.data.playlist.description
        this.coverImgUrl = response.data.playlist.coverImgUrl
        this.tracks = response.data.playlist.tracks
      })
  },
  methods: {
    goToSong (item) {
      this.$router.push(`/song?id=${item.id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
img{
  max-width: 400px;
}
</style>
