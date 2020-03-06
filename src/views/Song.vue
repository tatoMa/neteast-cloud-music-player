<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <!-- 😍{{getMusicUrlsListById}} -->
        <!-- 😀{{getCurrentPlayingSong}} -->
        <!-- ✅{{getMusicDetailsList}} -->
        <div v-for="song in songs" :key="song.id">
          <p @click="setMusicDetailById(song)">{{song.name}} - {{song.id}}</p>
          <img :src="song.al.picUrl" alt="">
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
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
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      getMusicDetailsList: 'player/getMusicDetailsList',
      getMusicUrlsListById: 'player/getMusicUrlsListById'
      // getCurrentPlayingSong: 'player/getCurrentPlayingSong'
    })
  },
  methods: {
    goToPlayer (item) {
      this.$router.push(`/player?id=${item.id}`)
    },
    async setMusicDetailById (item) {
      await this.$store.commit('player/setMusicDetailById', item)
      this.$store.commit('player/setMusicUrlsListById')
    }
  }
}
</script>
<style lang="scss" scoped>
img{
  max-width: 400px;
}
</style>
