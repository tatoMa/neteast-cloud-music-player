<template>
    <div>
      <v-card
        v-for="artist in getTopArtist" :key="artist.id"
        class="mx-auto my-1"
        max-width="400"
      >
        <v-img
          class="white--text align-end"
          height="200px"
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
    </div>
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
