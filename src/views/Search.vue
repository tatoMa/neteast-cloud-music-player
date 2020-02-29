<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <div v-for="song in songs" :key="song.id">
          <p @click="goToPlayer(song)">{{song.name}} - {{song.artists[0].name}} - {{song.id}}</p>
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
      keywords: '',
      songs: []
    }
  },

  mounted () {
    this.keywords = this.$route.query.keywords
    axios.get(`${process.env.VUE_APP_baseURL}/search?keywords=${this.keywords}`)
      .then((response) => {
        console.log(response.data.result.songs)
        this.songs = response.data.result.songs
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
