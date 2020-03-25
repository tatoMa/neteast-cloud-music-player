<template>
  <v-container>
    <!-- Loading progress bar -->
    <Loading :loading='!artist'/>

    <v-card
      v-if="artist"
      :loading="!artist"
    >
      <v-img
        aspect-ratio="1.7"
        :src="artist.artist.picUrl + '?param=400y400'"
      ></v-img>

      <v-card-title>{{artist.artist.name}}</v-card-title>

      <v-card-text @click="descWrap = !descWrap">

        <div class="my-2 body-2 primary--text">
          Albums: {{artist.artist.albumSize}} - Music: {{artist.artist.musicSize}}
        </div>

        <div
          :class="descWrap ? 'text-truncate' : null"
        >{{artist.artist.briefDesc}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          rounded
          ripple
          block
          color="primary"
          :to="{ path: '/artist/albums', query: { id: artist.artist.id }}"
        >
          All Albums
        </v-btn>
      </v-card-actions>

    </v-card>
    <div v-if="artist">
      <MusicItem
        v-for="song in artist.hotSongs" :key="song.id"
        :id=song.id
        :artist=song.ar[0].name
        :name=song.name
        :album=song.al.name
        @setMusic="setMusic"
      />
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import MusicItem from '../components/Common/MusicItem'
import Loading from '../components/Loading'

export default {
  components: {
    MusicItem,
    Loading
  },
  data () {
    return {
      id: null,
      descWrap: true
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.$store.dispatch('artist/fetchArtistById', this.id)
  },
  computed: {
    ...mapGetters({
      artist: 'artist/getArtist'
    })
  },
  methods: {
    setMusic (id) {
      this.$store.commit('player/setMusicDetailByIdsList', this.artist.hotSongs)
      this.$store.commit('player/setMusicUrlsListByPassIdFromMusicList', id)
    }
  }
}
</script>

<style scoped>
.text-wrap{
  height: 200px;
  overflow: hidden;
}
</style>
