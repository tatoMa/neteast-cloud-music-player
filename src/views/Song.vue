<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <div v-for="song in songs" :key="song.id">
          <p @click="goToPlayer(song)">{{song.name}} - {{song.id}}</p>
          <img :src="song.al.picUrl" alt="">
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
      songs: []
    }
  },

  mounted () {
    this.id = this.$route.query.id
    axios.get(`${process.env.VUE_APP_baseURL}/song/detail?ids=${this.id}`)
      .then((response) => {
        console.log(response.data)
        this.songs = response.data.songs
      })
  },
  methods: {
    goToPlayer (item) {
      this.$router.push(`/player?id=${item.id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
img{
  max-width: 400px;
}
</style>
