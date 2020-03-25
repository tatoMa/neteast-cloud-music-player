<template>
  <v-container class="pt-0">
    <v-row class="text-center">
      <v-col>
        <!-- Loading progress bar -->
        <Loading v-if="!getSearchResult"/>
          <v-list
            v-for="track in getSearchResult"
            :key="track.id"
            class="ma-0 pa-0"
          >
            <MusicItem
              :id="track.id"
              :artist="track.artists[0].name"
              :name="track.name"
              @setMusic="setMusic"
            />
          <v-divider/>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Loading from '../components/Loading'
import MusicItem from '../components/Common/MusicItem'
import { mapGetters } from 'vuex'
export default {
  name: 'List',
  components: { Loading, MusicItem },
  data () {
    return {
      keyword: ''
    }
  },
  mounted () {
    console.log(this.$route.query.keyword)

    this.keyword = this.$route.query.keyword
    this.$store.commit('setSearchResult', this.keyword)
  },
  computed: {
    ...mapGetters({
      getSearchResult: 'getSearchResult'
    })
  },
  methods: {
    setMusic (id) {
      // this.$store.commit('player/setPaused', true)
      this.$store.commit('player/setMusicDetailByIdFromSearch', id)
      this.$store.commit('player/setMusicUrlsListById')
    }
    // setMusic (id) {
    //   this.$store.commit('player/setMusicDetailByIdsList', this.getSearchSuggestion.songs)
    //   this.$store.commit('player/setMusicUrlsListByPassIdFromMusicList', id)
    // }
  }
}
</script>
