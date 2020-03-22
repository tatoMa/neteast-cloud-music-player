<template>
    <div>
      <v-card
        v-for="artist in getTopArtist" :key="artist.id"
        class="mx-auto my-3"
        max-width="400"
      >
        <v-img
          class="white--text align-end"
          height="200px"
          :src="artist.picUrl + '?param=400y400'"
          :alt="artist.name"
        >
          <v-card-title>{{artist.name}}</v-card-title>
        </v-img>
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
