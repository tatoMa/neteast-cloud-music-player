<template>
    <div> message working progress</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      currentTrack: 'player/getCurrentTrack',
      paused: 'player/getPaused',
      // songUrl: 'player/getSong',
      getMusicDetailsList: 'player/getMusicDetailsList',
      getMusicUrlsListById: 'player/getMusicUrlsListById'
    })
  }
}
</script>

<style scoped>

</style>
