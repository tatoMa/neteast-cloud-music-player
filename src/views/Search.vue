<template>
  <v-container>
    <v-row class="text-center">
      <!-- <v-col cols="12">
        <div v-for="song in getSearchResult" :key="song.id">
          <p @click="goToPlayer(song)">{{song.name}} - {{song.artists[0].name}} - {{song.id}}</p>
        </div>
      </v-col> -->
      <v-col>

      <v-list
            v-for="track in getSearchResult"
            :key="track.id"
            class="ma-0 pa-0"
          >
            <!-- <v-list-item-group color="primary"> -->
              <v-list-item
                @click="setMusicDetailsList(track)"
              >
                <v-list-item-icon>
                  <v-icon>mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="track.artists[0].name+' - '+track.name"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-icon>mdi-play-circle-outline</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            <!-- </v-list-item-group> -->
          <v-divider/>
          </v-list>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'List',
  data () {
    return {
      keywords: '',
      songs: []
    }
  },
  mounted () {
    // if (this.keywords !== '') {
    this.keywords = this.$route.query.keywords
    this.$store.commit('setSearchResult', this.keywords)
    // }
  },
  computed: {
    ...mapGetters({
      getSearchResult: 'getSearchResult'
    })
  },
  methods: {
    setMusicDetailsList (item) {
      console.log(item.id)

      this.$store.commit('player/togglePaused', false)
      this.$store.commit('player/setMusicDetailById', item.id)
      // this.$store.commit('player/setMusicUrlsListById')
    }
  }
}
</script>
<style lang="scss" scoped>
img{
  max-width: 400px;
}
</style>
