<template>
  <v-container>
    <v-row dense>
      <v-col
        xs="12"
        sm="6"
        md="4"
        lg="3"
        v-for="artist in getTopArtist" :key="artist.id"
      >
        <v-card
          class="mx-auto my-1"
        >
          <v-img
            class="white--text align-end"
            max-height="12rem"
            :src="artist.picUrl + '?param=400y400'"
            :alt="artist.name"
          >
          </v-img>
          <v-card-title class="pb-0">
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

export default {
  mounted () {
    this.$store.dispatch('artist/fetchTopArtist')
  },
  computed: {
    ...mapGetters({
      getTopArtist: 'artist/getTopArtist'
    })
  }
}
</script>

<style scoped>

</style>
