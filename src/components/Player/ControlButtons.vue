<template>
  <v-row
    no-gutters
    class="mb-1"
    :class="layout?'mb-8 justify-space-between': breakpointXs ? 'justify-end row-2' : 'justify-space-around'"
  >
    <!-- <v-spacer class="d-none d-sm-flex"></v-spacer> -->
    <!-- <v-row
      no-gutters
      :class="layout?'mb-8 justify-space-between':'justify-end'"
    > -->

      <!-- favorite button -->
      <v-btn class="mr-1" icon :disabled="music.length === 0" v-if="layout || !breakpointXs">
        <v-icon disabled="">{{mdiHeart}}</v-icon>
      </v-btn>

      <!-- previous track button -->
      <v-btn class="mx-1" icon :disabled="music.length === 0" @click.stop="prevTrack" v-if="layout || !breakpointXs">
        <v-icon>{{mdiStepBackward}}</v-icon>
      </v-btn>

      <!-- play and pause buttons -->
      <v-btn class="mx-1" icon v-if="paused" @click.stop="$emit('togglePlaying')" :disabled="music.length === 0">
        <div v-if="music[0]">
          <v-icon large color="primary" v-if="music[0].url">{{mdiPlayCircleOutline}}</v-icon>
          <v-icon large v-else>{{mdiPlayCircleOutline}}</v-icon>
        </div>
          <v-icon large v-else>{{mdiPlayCircleOutline}}</v-icon>
      </v-btn>
      <v-btn class="mx-1" icon v-if="!paused" @click.stop="$emit('togglePlaying')" :disabled="music.length === 0">
        <div v-if="music[0]">
          <v-icon color="primary" v-if="!music[0].url" >{{mdiAlertCircle}}</v-icon>
          <v-icon large color="primary" v-else>{{mdiPauseCircle}}</v-icon>
        </div>
          <v-icon large color="primary" v-else>{{mdiPauseCircle}}</v-icon>
      </v-btn>

      <!-- next track button -->
      <v-btn class="mx-1" icon :disabled="music.length === 0" @click.stop="nextTrack">
        <v-icon>{{mdiStepForward}}</v-icon>
      </v-btn>

      <!-- loop buttons -->
      <v-btn icon :disabled="music.length === 0" v-if="layout || !breakpointXs">
        <v-icon disabled="">{{mdiSync}}</v-icon>
      </v-btn>
    <!-- </v-row> -->
    <!-- <v-spacer class="d-none d-sm-flex"></v-spacer> -->

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
import { mdiVolumeHigh, mdiSync, mdiHeart, mdiStepBackward, mdiStepForward, mdiPlayCircleOutline, mdiAlertCircle, mdiPauseCircle } from '@mdi/js'
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
      mdiPlayCircleOutline,
      mdiAlertCircle,
      mdiPauseCircle
    }
  },
  computed: {
    ...mapGetters({
      paused: 'player/getPaused'
    }),
    breakpointXs () {
      return this.$vuetify.breakpoint.xs
    }
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
