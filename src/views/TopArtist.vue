<template>
    <div>
      <div v-for="artist in getTopArtist" :key="artist.id">
        {{artist.name}}
        <v-img :src="artist.picUrl + '?param=400y400'"></v-img>
      </div>
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
