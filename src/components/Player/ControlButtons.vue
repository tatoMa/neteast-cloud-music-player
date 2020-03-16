<template>
  <v-row
    justify="space-between"
    no-gutters class="mb-1"
    :class="layout?'mb-8':''"
    @click.stop=""
  >
    <v-spacer class="d-none d-sm-flex"></v-spacer>
    <v-row justify="space-between" no-gutters>

      <!-- favorite button -->
      <v-btn icon :disabled="music.length === 0">
        <v-icon disabled="">{{mdiHeart}}</v-icon>
      </v-btn>

      <!-- previous track button -->
      <v-btn icon :disabled="music.length === 0" @click.stop="prevTrack">
        <v-icon>{{mdiStepBackward}}</v-icon>
      </v-btn>

      <!-- play and pause buttons -->
      <v-btn icon v-if="paused" @click.stop="$emit('togglePlaying')" :disabled="music.length === 0">
        <div v-if="music[0]">
          <v-icon large color="primary" v-if="music[0].url">{{mdiPlay}}</v-icon>
          <v-icon large v-else>{{mdiPlay}}</v-icon>
        </div>
          <v-icon large v-else>{{mdiPlay}}</v-icon>
      </v-btn>
      <v-btn icon v-if="!paused" @click.stop="$emit('togglePlaying')" :disabled="music.length === 0">
        <div v-if="music[0]">
          <v-icon color="primary" v-if="!music[0].url" >{{mdiAlertCircle}}</v-icon>
          <v-icon color="primary" v-else>{{mdiPause}}</v-icon>
        </div>
          <v-icon color="primary" v-else>{{mdiPause}}</v-icon>
      </v-btn>

      <!-- next track button -->
      <v-btn icon :disabled="music.length === 0" @click.stop="nextTrack">
        <v-icon>{{mdiStepForward}}</v-icon>
      </v-btn>

      <!-- loop buttons -->
      <v-btn icon :disabled="music.length === 0">
        <v-icon disabled="">{{mdiSync}}</v-icon>
      </v-btn>
    </v-row>
    <!-- volume controller -->
    <!-- <v-col cols="3" class="ma-0 pa-0 d-none d-sm-flex">
      <v-slider
        class="ml-9 pa-0 ma-0 margin10"
        dense
        v-model="volume"
        min="0"
        max="1"
        color="primary"
        background-color="secondary"
        :append-icon=mdiVolumeHigh
        @click:append="$emit('toggleVolumeMute')"
        hide-details
        step=0.05
        style="margin:20px"
      ></v-slider>
    </v-col> -->
  </v-row>
</template>

<script>
import { mdiVolumeHigh, mdiSync, mdiHeart, mdiStepBackward, mdiStepForward, mdiPlay, mdiAlertCircle, mdiPause } from '@mdi/js'
import { mapGetters } from 'vuex'

export default {
  props: {
    music: {
      type: Array
    },
    layout: {
      type: Boolean
    },
    volume: {
      type: Number
    }
  },
  data () {
    return {
      mdiVolumeHigh,
      mdiSync,
      mdiHeart,
      mdiStepBackward,
      mdiStepForward,
      mdiPlay,
      mdiAlertCircle,
      mdiPause
    }
  },
  computed: {
    ...mapGetters({
      paused: 'player/getPaused'
    })
  },
  watch: {
    volume: function (val) {
      this.volume = val
      // console.log(this.player)
    }
  },
  methods: {
    nextTrack () {
      this.$store.commit('player/setNextTrack')
    },
    prevTrack () {
      this.$store.commit('player/setPrevTrack')
    }
  }
}
</script>

<style scoped>

</style>
