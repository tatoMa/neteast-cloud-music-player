<template>
  <v-container>
    <!-- Loading progress bar -->
    <Loading :loading='!getTopArtist'/>
    <v-row dense class="pa-0 pa-sm-2">
      <v-col
        xs="12"
        sm="6"
        md="4"
        lg="3"
        v-for="artist in getTopArtist" :key="artist.id"
      >
        <v-card
          @click="goToArtist(artist.id)"
        >
          <v-img
            class="white--text align-end"
            max-height="10rem"
            :src="artist.picUrl + '?param=400y400'"
            :alt="artist.name"
          >
          </v-img>
          <v-card-title class="pb-0 pt-1">
            {{artist.name}}
            <span class="subtitle-2 pl-2">{{artist.alias[0]}}</span>
            </v-card-title>
          <v-card-text>Music: {{artist.musicSize}} - Albums: {{artist.albumSize}}</v-card-text>
          <v-divider class="my-1"></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from '../components/Loading'

export default {
  components: {
    Loading
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
