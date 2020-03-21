<template>
      <v-list
        color="transparent"
        class="ma-0 pa-0"
      >
        <v-subheader>My playlist</v-subheader>
        <v-list-item-group :value="currentTrack" color="primary">
          <MusicItem
            v-for="track in getMusicDetailsList"
            :key="track.id"
            :id="track.id"
            :artist="track.ar[0].name"
            :name="track.name"
            @setMusic="setMusic(track.id)"
          />
        </v-list-item-group>
      </v-list>
</template>

<script>
import { mapGetters } from 'vuex'
import MusicItem from '../Common/MusicItem'

export default {
  components: { MusicItem },
  computed: {
    ...mapGetters({
      currentTrack: 'player/getCurrentTrack',
      // paused: 'player/getPaused',
      getMusicDetailsList: 'player/getMusicDetailsList'
      // getMusicUrlsListById: 'player/getMusicUrlsListById'
    })
  },
  methods: {
    setMusic (id) {
      this.$store.commit('player/setMusicUrlsListByPassIdFromMusicList', id)
    }
  }
}
</script>

<style scoped>

</style>
