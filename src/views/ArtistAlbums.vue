<template>
  <v-container class="pt-0 mb-12 pb-12">
    <v-row class="text-center">
      <v-col cols="12">

        <!-- Loading progress bar -->
        <loading :loading='!albumsByArtistId'/>

        <!-- Albums -->
        <v-row no-gutters v-if="albumsByArtistId">
          <v-col
            class="ma-0 py-0 px-0 px-sm-2"
            v-for="album in albumsByArtistId.hotAlbums"
            :key="album.id"
            xs="12"
            sm="6"
            md="4"
            xl="3"
          >
            <AlbumItem
              :id="album.id"
              :ArtistPicUrl="album.artist.picUrl"
              :name="album.name"
              :artistName="album.artist.name"
              :picUrl="album.picUrl"
              :company="album.company"
              :subType="album.subType"
              :type="album.type"
            />
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import loading from '../components/Loading'
import AlbumItem from '../components/Common/AlbumItem'
import { mapGetters } from 'vuex'
// import { httpToHttps } from '../utils/helper'
import { mdiStar, mdiPlayCircleOutline } from '@mdi/js'
export default {
  name: 'PlayListDetails',
  components: {
    loading,
    AlbumItem
  },
  data () {
    return {
      // httpToHttps,
      mdiStar,
      mdiPlayCircleOutline,
      id: ''
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.$store.dispatch('album/fetchAlbumsByArtistId', this.id)
  },
  computed: {
    ...mapGetters({
      albumsByArtistId: 'album/getAlbumsByArtistId'
    })
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>
