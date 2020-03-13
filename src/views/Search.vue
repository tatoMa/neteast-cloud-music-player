<template>
  <v-container class="pt-0">
    <v-row class="text-center">
      <v-col>
        <!-- Loading progress bar -->
        <Loading :loading="!getSearchResult"/>
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
import MusicItem from '../components/MusicItem'
import { mapGetters } from 'vuex'
export default {
  name: 'List',
  components: { Loading, MusicItem },
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
