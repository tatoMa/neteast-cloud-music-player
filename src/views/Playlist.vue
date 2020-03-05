<template>
  <v-container class="pt-0">
    <v-row class="text-center">
      <v-col cols="12">

        <!-- Loading progress bar -->
        <loading :loading='tracks.length === 0'/>

        <!-- The List -->
        <v-card
          v-if="tracks.length !== 0"
          class="mx-auto"
          max-width="800"
          tile
        >
          <v-img
            class="white--text align-end"
            height="330px"
            :src="coverImgUrl"
          >
          </v-img>
          <v-card-title>{{name}}</v-card-title>
          <v-card-subtitle>{{description}}</v-card-subtitle>
        </v-card>
        <v-card
        v-if="tracks.length !== 0"
        class="mx-auto"
        max-width="800"
        tile
        >
          <v-list
            v-for="track in tracks"
            :key="track.id"
            class="ma-0 pa-0"
          >
            <!-- <v-list-item-group color="primary"> -->
              <v-list-item
                @click="setMusicDetailsList(track)"
              >
                <v-list-item-icon>
                  <v-icon color="pink">mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="track.name"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-icon >mdi-play</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            <!-- </v-list-item-group> -->
          <v-divider/>
          </v-list>
        </v-card>
        <!-- <img :src="coverImgUrl" alt="">
        <div v-for="track in tracks" :key="track.id">
          <p @click="goToSong(track)">{{track.name}} - {{track.id}}</p>
        </div> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import loading from '../components/Loading'
export default {
  name: 'PlayList',
  components: {
    loading
  },
  data () {
    return {
      item: -1,
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
    // goToSong (item) {
    //   this.$router.push(`/song?id=${item.id}`)
    // },
    setMusicDetailsList (item) {
      this.$store.commit('player/togglePaused', false)
      this.$store.commit('player/setMusicDetailsList', item)
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
