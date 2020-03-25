<template>
  <v-container v-if="getSearchSuggestion">
    <div class="headline mb-2 text-center">Search Suggestion: </div>
    <!-- Albums Item With Pic Component -->
    <p class="headline mt-2 mb-1">Artist:</p>
    <ArtistItem
      v-for="artist in getSearchSuggestion.artists"
      :key="artist.id"
      :id="artist.id"
      :name="artist.name"
      :picUrl="artist.picUrl"
      :alias="artist.alias[0]"
      :musicSize="artist.musicSize"
      :albumSize="artist.albumSize"
    />
    <p class="headline mt-2 mb-1">Albums:</p>
    <AlbumItem
      v-for="album in getSearchSuggestion.albums"
      :key="album.id"
      :id="album.id"
      :ArtistPicUrl="album.artist.picUrl"
      :name="album.name"
      :artistName="album.artist.name"
      :picUrl="album.artist.picUrl"
      :company="album.company"
      :subType="album.subType"
      :type="album.type"
      :size="album.size"
    />
    <v-divider></v-divider>
    <!-- Music Item With Pic Component -->
    <p class="headline mt-4 mb-1">Music:</p>
    <v-btn
      color="primary"
      block
      :to="{ path: '/search/music', query: { keyword: keyword }}"
    >Search All Music by {{keyword}}</v-btn>
    <MusicItemWithPic
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
import AlbumItem from '../components/Common/AlbumItem'
import MusicItemWithPic from '../components/Common/MusicItemWithPic'
import ArtistItem from '../components/Common/ArtistItem'

import { mapGetters } from 'vuex'
export default {
  name: 'List',
  components: { AlbumItem, MusicItemWithPic, ArtistItem },
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
      this.$store.commit('player/setMusicDetailByIdsList', this.getSearchSuggestion.songs)
      this.$store.commit('player/setMusicUrlsListByPassIdFromMusicList', id)
    }
  }
}
</script>
