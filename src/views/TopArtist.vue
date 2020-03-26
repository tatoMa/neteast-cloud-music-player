<template>
  <v-container class="pt-0 mb-12 pb-12">
    <v-row>
      <v-col cols="12">

        <!-- Loading progress bar -->
        <Loading v-if='!getTopArtist'/>

        <!-- artists -->
        <div v-if="getTopArtist" class="headline mb-2 text-center">Hot Artists</div>
        <v-row no-gutters v-if="getTopArtist">
          <v-col
            v-for="artist in getTopArtist"
            :key="artist.id"
            class="ma-0 py-0 px-0 px-sm-2"
            xs="12"
            sm="6"
            md="4"
            xl="3"
          >
            <ArtistItem
              :id="artist.id"
              :name="artist.name"
              :picUrl="artist.picUrl"
              :alias="artist.alias[0]"
              :musicSize="artist.musicSize"
              :albumSize="artist.albumSize"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '../components/Loading'
import ArtistItem from '../components/Common/ArtistItem'

export default {
  components: {
    Loading,
    ArtistItem
  },
  mounted () {
    this.$store.dispatch('artist/fetchTopArtists')
  },
  computed: {
    ...mapGetters({
      getTopArtist: 'artist/getTopArtists'
    })
  },
  methods: {
    goToArtist (id) {
      this.$router.push(`/artist?id=${id}`)
    }
  }
}
</script>

<style scoped>

</style>
