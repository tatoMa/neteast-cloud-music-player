<template>
  <v-bottom-navigation
    v-if="this.$vuetify.breakpoint.xs"
    v-model="bottomNav"
    color="primary"
    app
    height="56"
  >
    <v-btn to="/" @click.stop="$emit('disableLayout')">
      <span>Home</span>
      <v-icon>{{mdiHome}}</v-icon>
    </v-btn>

    <v-btn to="topplaylists" @click.stop="$emit('disableLayout')">
      <span>Playlist</span>
      <v-icon>{{mdiPlaylistMusic}}</v-icon>
    </v-btn>

    <v-btn to="topartist" @click.stop="$emit('disableLayout')">
      <span>Atrist</span>
      <v-icon>{{mdiAccountMusic}}</v-icon>
    </v-btn>

    <v-btn to="newalbum" @click.stop="$emit('disableLayout')">
      <span>Album</span>
      <v-icon>{{mdiAlbum}}</v-icon>
    </v-btn>

    <v-btn to="setting" @click.stop="$emit('disableLayout')">
      <span>Setting</span>
      <v-icon>{{mdiCogs}}</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
import { mdiHome, mdiPlaylistMusic, mdiCogs, mdiAccountMusic, mdiAlbum } from '@mdi/js'
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
      mdiCogs,
      mdiAccountMusic,
      mdiAlbum,
      bottomNav: 0
    }
  },
  watch: {
    layout (val) {
      if (!val) this.bottomNav = 0
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
