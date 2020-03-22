<template>
  <v-footer
    fixed
    class="pa-0 ma-0 player"
    :class="breakpointXs ? 'player-mobile' : ''"
    color="secondary darken-1"
  >

    <!-- audio synchronizer -->
    <canvas
      id='canvas'
      :class="layout ? 'canvas-movedown' : breakpointXs ? '' : 'canvas-desktop'"
      width="600"
      height="350"
    >
    </canvas><!-- audio synchronizer -->

    <!-- audio source -->
    <audio
      autoplay
      crossorigin="anonymous"
      v-show="getMusicUrlsListById.length > 0"
      ref="player"
      :src="getMusicUrlsListById.length > 0 ? httpToHttps(this.getMusicUrlsListById[0].url) : ''"
      preload="auto"
      type="audio/mpeg"
      @timeupdate="getMusicInfo($event.target)"
      id="audio"
    ></audio><!-- audio source -->

    <!-- player -->
    <v-row
      no-gutters
      justify="center"
      align="start"
      class="px-3 px-sm-10 normal-player"
      :class="!breakpointXs ? 'normal-player-mobile': layout ? 'full-height-player' : ''"
      style="width:100vw; z-index:5"
    >

      <!-- eject button -->
      <!-- <v-card @click="toggleLayout" v-if="!layout && breakpointXs" class="eject-button px-5 lighten-1" flat color="secondary">
        <v-icon>{{mdiEjectOutline}}</v-icon>
      </v-card> -->
      <!-- eject button -->

      <!-- full-height mode exit button -->
      <v-btn @click="toggleLayout" icon v-if="layout" class="mt-2 px-5">
        <v-icon>{{mdiChevronDown}}</v-icon>
      </v-btn><!-- full-height mode exit button -->

      <!-- cover image section -->
      <CoverImage
        :currentTrack="getMusicDetailsList[currentTrack]"
        :layout="layout"
        v-show="tab === 0"
        @toggleLayout="toggleLayout"
        :paused="paused"
      /><!-- cover image section -->

      <v-col
        :align-self="layout?'end':'center'"
        class="pl-1 pl-sm-5 text-center"
        style="max-width:900px"
        :class="layout ? 'mb-4' : ''"
        v-show="tab === 0"
      >
        <!-- information and controllers section -->
        <div
          @click="toggleLayout"
          class="d-flex ma-0 pa-0"
          :class="!layout  && breakpointXs ? 'flex-row align-center ml-2' : 'flex-column'"
        >
          <MusicInfo
            class="pb-0"
            :track=getMusicDetailsList[currentTrack]
          />
          <div
            @click.stop=""
            no-gutters
            align="center"
            align-content="center"
            justify="center"
            class="d-flex flex-row align-center align-content-center justify-center mt-1 mt-sm-0 mb-0"
          >
            <v-slider
              class="mt-1"
              :disabled="!getMusicUrlsListById.length > 0"
              dense
              :readonly="!layout && breakpointXs"
              :value="currentTime"
              @mousedown.stop="onSliderMouseDown"
              min="0"
              :max="duration"
              color="primary darken-2"
              height="3"
              background-color="secondary"
              hide-details
              :class="!layout && breakpointXs ? 'slider-top' : ''"
            ></v-slider>
            <div class="caption" v-if="layout || !breakpointXs">
              {{ currentTimeAndDurationLabel }}
            </div>
          </div>
          <!-- buttons section -->
        <ControlButtons
          :layout=layout
          :music=getMusicUrlsListById
          @togglePlaying=togglePlaying
        /><!-- buttons section -->
        </div><!-- information and controllers section -->

      </v-col>
      <!-- page tabs -->
      <v-col v-if="tab === 1" class="scrollY" cols="12">
        <TabPlaylist/>
      </v-col>
      <v-col v-if="tab === 2" class="scrollY" cols="12">
        <TabLyric/>
      </v-col>
      <v-col v-if="tab === 3" class="scrollY" cols="12">
        <TabMessage/>
      </v-col>
      <v-col v-if="tab === 4" class="scrollY" cols="12">
        <TabDownload/>
      </v-col>
    </v-row><!-- player -->

    <!-- float menu for switch views -->
    <FloatMenu
      :layout="layout"
      @switchTab = "switchTab"
    />

    <!-- bottom navigation -->
    <!-- <BottomNav
      :layout = "layout"
      @switchTab = "switchTab"
      @toggleLayout = "toggleLayout"
      @toggleVolumeMute=toggleVolumeMute
    />-->
    <!-- bottom navigation -->

  </v-footer>
</template>

<script>
import audioAnalyser from '../../utils/audioAnalyser'
import { httpToHttps } from '../../utils/helper'
import { mapGetters } from 'vuex'
import { mdiEjectOutline, mdiChevronDown, mdiDotsVertical, mdiClose, mdiPlaylistMusic, mdiClipboardTextPlay, mdiMessage } from '@mdi/js'

import ControlButtons from './ControlButtons'
import MusicInfo from './MusicInfo'
import CoverImage from './CoverImage'
import FloatMenu from './FloatMenu'

// import BottomNav from './BottomNav'

export default {
  props: {
    layout: {
      type: Boolean
    }
  },
  components: {
    ControlButtons,
    MusicInfo,
    // BottomNav,
    CoverImage,
    FloatMenu,
    TabPlaylist: () => import(/* webpackPrefetch: true */ './TabPlaylist'),
    TabDownload: () => import(/* webpackPrefetch: true */ './TabDownload'),
    TabMessage: () => import(/* webpackPrefetch: true */ './TabMessage'),
    TabLyric: () => import(/* webpackPrefetch: true */ './TabLyric')
  },
  data () {
    return {
      mdiEjectOutline,
      mdiChevronDown,
      mdiDotsVertical,
      mdiClose,
      mdiPlaylistMusic,
      mdiClipboardTextPlay,
      mdiMessage,
      httpToHttps,
      tab: 0,
      volume: 1,
      storedLastVolume: 0,
      currentTime: 0,
      duration: 0,
      audioAnalyser: false
    }
  },
  computed: {
    ...mapGetters({
      currentTrack: 'player/getCurrentTrack',
      paused: 'player/getPaused',
      getMusicDetailsList: 'player/getMusicDetailsList',
      getMusicUrlsListById: 'player/getMusicUrlsListById'
    }),
    currentTimeAndDurationLabel: function () {
      if (this.duration && this.duration !== 0) {
        return this.fmtSecToMin(Math.round(this.currentTime)) + '-' + this.fmtSecToMin(Math.round(this.duration))
      } else return '0:00-0:00'
    },
    breakpointXs () {
      return this.$vuetify.breakpoint.xs
    },
    currentTimeComputed: {
    // getter
      get: function () {
        return this.currentTime
      },
      // setter
      set: function () {
        // this.currentTime = this.currentTimeComputed
        return this.currentTime
      }
    }
  },
  // watch: {
  //   volume: function (val) {
  //     this.$refs.player.volume = val
  //     // console.log(this.player)
  //   }
  // },
  mounted () {
    audioAnalyser.init()

    this.$refs.player.oncanplay = () => {
      this.$refs.player.play()
    }
    this.$refs.player.onplay = () => {
      this.audioAnalyserStart()
      this.$store.commit('player/setPaused', false)
    }
    this.$refs.player.onpause = () => {
      this.$store.commit('player/setPaused', true)
    }
    this.$refs.player.onended = () => {
      this.$store.commit('player/setNextTrack')
      this.$store.commit('player/setPaused', true)
    }
  },
  methods: {
    audioAnalyserStart () {
      if (!this.audioAnalyser) {
        audioAnalyser.start()
        this.audioAnalyser = true
      }
    },
    togglePlaying () {
      if (this.$refs.player.paused) {
        // audioAnalyser.init()
        this.$refs.player.load()
        this.$refs.player.play()
      } else {
        this.$refs.player.pause()
      }
    },
    onSliderMouseDown (event) {
      this.$refs.player.currentTime = event.offsetX / event.toElement.offsetWidth * this.$refs.player.duration
    },
    getMusicInfo (audio) {
      // console.log('audio', audio)
      if (audio) {
        this.currentTime = audio.currentTime
        this.duration = audio.duration
      }
      // this.paused = audio.paused
    },
    toggleVolumeMute () {
      if (this.$refs.player.volume > 0) {
        this.storedLastVolume = this.$refs.player.volume
        this.volume = 0
        this.$refs.player.volume = 0
      } else {
        this.$refs.player.volume = this.storedLastVolume
        this.volume = this.storedLastVolume
      }
    },
    fmtSecToMin (s) { return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s },
    sliderClick () {
      console.log('click slider')
      // this.$refs.player.currentTime = 260
    },
    toggleLayout () {
      if (this.breakpointXs) {
        // this.layout = !this.layout
        this.$emit('toggleLayout')
        this.tab = 0
      }
    },
    switchTab (item) {
      this.tab = item
    }
  }
}
</script>
<style lang="scss" scoped>
#canvas {
    height: 45px;
    left: 55%;
    margin: 0 0 0 -54.5%;
    position: absolute;
    bottom: 48px;
    width: 100vw;
    z-index: 1;
    transition: 0.4s;
    pointer-events: none;
}
.canvas-desktop{
  bottom: 96px !important;
}
.canvas-movedown{
  bottom: 0px !important
}
.player{
  z-index: 3;
}
.player-mobile{
  transform: translateY(-48px);
}
.slider-top {
  position: absolute;
  top: -4px;
  left: 0px;
  width: 100vw;
}
// .border-top-radius{
//   border-top-left-radius: 20px;
//   border-top-right-radius: 20px;
// }
.normal-player{
  height: 48px;
  transition: .4s ease-in-out;
}
.normal-player-mobile{
  height: 96px;
}
.full-height-player{
  height:calc(100vh - 104px);
}
.eject-button{
  position: absolute;
  top: -17px;
  opacity: 0.6;
}
.scrollY{
  overflow:auto;
    height:calc(100vh - 160px);
}
.v-speed-dial {
  position: absolute;
  z-index: 99;
}
.v-btn--floating {
  position: relative;
}
</style>
