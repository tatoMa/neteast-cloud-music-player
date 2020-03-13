<template>
  <v-bottom-navigation
    v-model="bottomNav"
    shift
    color="primary"
    class="bottom-nav"
    :class="layout ? 'bottom-nav-ani' : ''"
  >
    <v-btn @click.stop="toggleBottomNavTab(0)">
      <span>Player</span>
      <v-icon>{{mdiMusicCircle}}</v-icon>
    </v-btn>

    <v-btn @click.stop="toggleBottomNavTab(1)">
      <span>Playlist</span>
      <v-icon>{{mdiPlaylistMusic}}</v-icon>
    </v-btn>

    <v-btn @click.stop="toggleBottomNavTab(2)">
      <span>Message</span>
      <v-icon>{{mdiMessage}}</v-icon>
    </v-btn>

    <v-btn @click.stop="toggleBottomNavTab(3)">
      <span>Download</span>
      <v-icon>{{mdiCloudDownload}}</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
import { mdiMusicCircle, mdiPlaylistMusic, mdiMessage, mdiCloudDownload } from '@mdi/js'
export default {
  name: 'BottomNav',
  props: {
    layout: {
      type: Boolean
    }
  },
  data () {
    return {
      mdiMusicCircle,
      mdiPlaylistMusic,
      mdiMessage,
      mdiCloudDownload,
      bottomNav: 0
    }
  },
  watch: {
    layout (val) {
      if (!val) this.bottomNav = 0
    }
  },
  methods: {
    toggleBottomNavTab (tab) {
      if (this.bottomNav !== tab) {
        this.$emit('switchTab', tab)
        this.bottomNav = tab
      } else {
        this.$emit('toggleLayout')
        this.bottomNav = 0
      }
    }
  }
}
</script>

<style scoped>
.bottom-nav{
  opacity: 0;
  position: absolute;
  top:56px;
  transition: 0.4s;
}
.bottom-nav-ani{
  position: relative;
  opacity: 1;
  top: 0px;
}
</style>
