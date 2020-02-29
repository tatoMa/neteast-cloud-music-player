<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" v-if="song">
        <a :href="song.url">play</a>
        <!-- <audio src="https://music.163.com/song/media/outer/url?id=498139.mp3"></audio> -->
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
      song: ''
    }
  },

  mounted () {
    this.id = this.$route.query.id
    axios.get(`${process.env.VUE_APP_baseURL}/song/url?id=${this.id}`)
      .then((response) => {
        console.log(response.data.data)
        this.song = response.data.data[0]
      })
  }
}
</script>
<style lang="scss" scoped>
img{
  max-width: 400px;
}
</style>
