<template>
  <v-container class="pt-0">
    <v-row class="text-center">
      <v-col>
        <!-- Loading progress bar -->
        <loading :loading="!getSearchResult"/>
      <v-list
            v-for="track in getSearchResult"
            :key="track.id"
            class="ma-0 pa-0"
          >
            <!-- <v-list-item-group color="primary"> -->
              <v-list-item
                @click="setMusic(track.id)"
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
import loading from '../components/Loading'
import { mapGetters } from 'vuex'
export default {
  name: 'List',
  components: { loading },
  data () {
    return {
      keyword: '',
      songs: []
    }
  },
  mounted () {
    // if (this.keyword !== '') {
    this.keyword = this.$route.query.keyword
    this.$store.commit('setSearchResult', this.keyword)
    // }
  },
  computed: {
    ...mapGetters({
      getSearchResult: 'getSearchResult'
    })
  },
  methods: {
    setMusic (id) {
      // this.$store.commit('player/togglePaused', false)
      // this.$store.commit('player/setMusicDetailByIdFromSearch', track.id)
      // this.$store.commit('player/setMusicUrlsListById')
      // const trackById = this.getSearchResult.filter((track) => track.id === id)
      // console.log(trackById)

      this.$store.commit('player/togglePaused', false)
      this.$store.commit('player/setMusicDetailByIdFromSearch', id)
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
