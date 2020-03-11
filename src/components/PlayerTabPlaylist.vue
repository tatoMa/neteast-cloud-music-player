<template>
    <!-- <ul>
      <li
      v-for="item in getMusicDetailsList"
      :key="item.name">
        {{item.name}}
      </li>
    </ul> -->
    <div>
      <v-list
        v-for="track in getMusicDetailsList"
        :key="track.id"
        class="ma-0 pa-0"
        color="transparent"
      >
        <MusicItem
          :id="track.id"
          :artist="track.ar[0].name"
          :name="track.name"
          @setMusic="setMusic(track.id)"
        />
      </v-list>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MusicItem from './MusicItem'

export default {
  components: { MusicItem },
  computed: {
    ...mapGetters({
      currentTrack: 'player/getCurrentTrack',
      paused: 'player/getPaused',
      // songUrl: 'player/getSong',
      getMusicDetailsList: 'player/getMusicDetailsList',
      getMusicUrlsListById: 'player/getMusicUrlsListById'
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
