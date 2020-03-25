<template>
  <v-container>
    <!-- Loading progress bar -->
    <Loading :loading='!album'/>
    <v-col v-if="album" class="pa-0">
      <AlbumItem
        :id="album.album.id"
        :ArtistPicUrl="album.album.artist.picUrl"
        :name="album.album.name"
        :artistName="album.album.artist.name"
        :picUrl="album.album.picUrl"
        :company="album.album.company"
        :subType="album.album.subType"
        :type="album.album.type"
        :size="album.album.size"
      />
      <MusicItem
        v-for="track in album.songs"
        :key="track.id"
        :id="track.id"
        :artist="track.ar[0].name"
        :name="track.name"
        @setMusic="setMusic(track.id)"
      />
    </v-col>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import AlbumItem from '../components/Common/AlbumItem'
import MusicItem from '../components/Common/MusicItem'
import Loading from '../components/Loading'

export default {
  components: {
    AlbumItem,
    MusicItem,
    Loading
  },
  data () {
    return {
      id: null
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.$store.dispatch('album/FetchAlbumById', this.id)
  },
  computed: {
    ...mapGetters({
      album: 'album/getAlbumById'
    })
  },
  methods: {
    setMusic (id) {
      this.$store.commit('player/setMusicDetailByIdsList', this.album.songs)
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
