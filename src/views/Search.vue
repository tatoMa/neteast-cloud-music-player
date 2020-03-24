<template>
  <v-container v-if="getSearchSuggestion">
    <!-- Albums Item With Pic Component -->
    <p class="headline mt-2 mb-1">Albums:</p>
    <musicItemWithPic
      v-for="item in getSearchSuggestion.albums"
      :key="item.id"
      :name="item.name"
      :artist="item.artist.name"
      :imgUrl="item.artist.picUrl"
      :id="item.id"
      @setMusic="setMusic"
    />
    <v-divider></v-divider>
    <!-- Music Item With Pic Component -->
    <p class="headline mt-4 mb-1">Music:</p>
    <v-btn
      color="primary"
      block
      :to="{ path: '/search/music', query: { keyword: keyword }}"
    >Search All Music by {{keyword}}</v-btn>
    <musicItemWithPic
      v-for="item in getSearchSuggestion.songs"
      :key="item.id"
      :name="item.name"
      :artist="item.artists[0].name"
      :imgUrl="item.artists[0].img1v1Url"
      :id="item.id"
      @setMusic="setMusic"
    />
  </v-container>
</template>

<script>
import musicItemWithPic from '../components/Common/MusicItemWithPic'

import { mapGetters } from 'vuex'
export default {
  name: 'List',
  components: { musicItemWithPic },
  data () {
    return {
      keyword: ''
    }
  },
  mounted () {
    this.keyword = this.$route.query.keyword
    this.$store.dispatch('search/fetchSearchSuggestionByText', this.keyword)
  },
  computed: {
    ...mapGetters({
      getSearchSuggestion: 'search/getSearchSuggestion'
    })
  },
  methods: {
    setMusic (id) {
      // this.$store.commit('player/setPaused', true)
      this.$store.commit('player/setMusicDetailByIdFromSearch', id)
      this.$store.commit('player/setMusicUrlsListById')
    }
  }
}
</script>
