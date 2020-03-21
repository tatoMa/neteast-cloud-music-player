<template>
  <v-speed-dial
    v-if="layout"
    v-model="fab"
    top
    right
    direction="bottom"
    transition="slide-y-reverse-transition"
    @click.stop=""
  >

    <template v-slot:activator>
      <v-btn
        v-model="fab"
        color="primary"
        small
        fab
        depressed
        text
      >
        <v-icon v-if="fab">{{mdiClose}}</v-icon>
        <v-icon v-else>{{mdiDotsVertical}}</v-icon>
      </v-btn>
    </template>
    <v-btn
      fab
      dark
      small
      color="primary lighten-1"
      @click.stop="toggleBottomNavTab(0)"
    >
      <v-icon>{{mdiMusicCircle}}</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="primary lighten-1"
      @click.stop="toggleBottomNavTab(1)"
    >
      <v-icon>{{mdiPlaylistMusic}}</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="primary lighten-1"
      @click.stop="toggleBottomNavTab(2)"
    >
      <v-icon>{{mdiClipboardTextPlay}}</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="primary lighten-1"
      @click.stop="toggleBottomNavTab(3)"
    >
      <v-icon>{{mdiMessage}}</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
import { mdiDotsVertical, mdiClose, mdiMusicCircle, mdiPlaylistMusic, mdiClipboardTextPlay, mdiMessage } from '@mdi/js'

export default {
  props: {
    layout: {
      type: Boolean
    }
  },
  data () {
    return {
      mdiClose,
      mdiDotsVertical,
      mdiMusicCircle,
      mdiPlaylistMusic,
      mdiClipboardTextPlay,
      mdiMessage,
      fab: false
    }
  },
  watch: {
    layout () {
      this.fab = false
    }
  },
  methods: {
    toggleBottomNavTab (tab) {
      this.$emit('switchTab', tab)
      this.fab = false
    }
  }
}
</script>

<style scoped>

</style>
