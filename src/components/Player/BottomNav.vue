<template>
  <v-bottom-navigation
    v-model="bottomNav"
    color="primary"
    app
    height="48"
  >
    <v-btn to="/" @click.stop="$emit('disableLayout')">
      <span>Home</span>
      <v-icon>{{mdiHome}}</v-icon>
    </v-btn>

    <v-btn to="topplaylists" @click.stop="$emit('disableLayout')">
      <span>Playlist</span>
      <v-icon>{{mdiPlaylistMusic}}</v-icon>
    </v-btn>

    <v-btn to="artist" @click.stop="$emit('disableLayout')">
      <span>Atrist</span>
      <v-icon>{{mdiClipboardTextPlay}}</v-icon>
    </v-btn>

    <v-btn to="setting" @click.stop="$emit('disableLayout')">
      <span>Setting</span>
      <v-icon>{{mdiMessage}}</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
import { mdiHome, mdiPlaylistMusic, mdiMessage, mdiClipboardTextPlay } from '@mdi/js'
export default {
  name: 'BottomNav',
  props: {
    layout: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdiHome,
      mdiPlaylistMusic,
      mdiMessage,
      mdiClipboardTextPlay,
      bottomNav: 0
    }
  },
  watch: {
    layout (val) {
      if (!val) this.bottomNav = 0
    }
  }
  // methods: {
  //   toggleBottomNavTab (tab) {
  //     if (this.bottomNav !== tab) {
  //       this.$emit('disableLayout')
  //       this.$emit('switchTab', tab)
  //       this.bottomNav = tab
  //     } else {
  //       // this.$emit('toggleLayout')
  //       this.bottomNav = 0
  //     }
  //   }
  // }
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
