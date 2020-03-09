<template>
  <v-bottom-navigation
    v-model="bottomNav"
    shift
    color="primary"
    class="bottom-nav"
    :class="layout ? 'bottom-nav-ani' : ''"
  >
    <v-btn @click.stop="$emit('switchTab',0)">
      <span>Player</span>
      <v-icon>mdi-music-circle</v-icon>
    </v-btn>

    <v-btn @click.stop="$emit('switchTab',1)">
      <span>Playlist</span>
      <v-icon>mdi-playlist-music</v-icon>
    </v-btn>

    <v-btn @click.stop="$emit('switchTab',2)">
      <span>Download</span>
      <v-icon>mdi-cloud-download</v-icon>
    </v-btn>

    <v-btn @click.stop="$emit('switchTab',3)">
      <span>Message</span>
      <v-icon>mdi-message</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'BottomNav',
  props: {
    layout: {
      type: Boolean
    }
  },
  data () {
    return {
      bottomNav: 0
    }
  }

  // computed: {
  //   // eslint-disable-next-line vue/return-in-computed-property
  //   color () {
  //     switch (this.bottomNav) {
  //       case 0: return 'blue-grey'
  //       case 1: return 'teal'
  //       case 2: return 'brown'
  //       case 3: return 'indigo'
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
