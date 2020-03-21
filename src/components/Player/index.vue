<template>
  <v-footer
    fixed
    class="pa-0 ma-0 z-index-higher border-top-radius"
    color="secondary"
  >

    <!-- audio synchronizer -->
    <canvas
      id='canvas'
      :class="[layout ? 'canvas-movedown' : '']"
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
      :class="{ 'full-height-player': layout }"
      style="width:100vw; z-index:5"
    >

      <!-- eject button -->
      <v-card @click="toggleLayout" v-if="!layout && breakpoint" class="eject-button px-5 lighten-1" flat color="secondary">
        <v-icon>{{mdiEjectOutline}}</v-icon>
      </v-card><!-- eject button -->

      <!-- drawer down button -->
      <v-btn @click="toggleLayout" icon v-if="layout" class="mt-2 px-5">
        <v-icon>{{mdiChevronDown}}</v-icon>
      </v-btn><!-- drawer down button -->

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
        <v-col class="ma-0 pa-0">
          <MusicInfo
            :track=getMusicDetailsList[currentTrack]
          />
          <v-row
            no-gutters
            align="center"
            align-content="center"
            justify="center"
            class="mt-1 mt-sm-0 mb-0"
          >
            <v-slider
              class="mt-1"
              v-if="getMusicUrlsListById.length > 0"
              dense
              v-model="currentTimeComputed"
              min="0"
              :max="duration"
              color="primary"
              height="3"
              background-color="secondary"
              hide-details
              @click="sliderClick()"
            ></v-slider>
            <v-slider
              class="mt-1"
              disabled
              dense
              v-else
              v-model="currentTime"
              min="0"
              max="100"
              color="primary"
              height="3"
              background-color="secondary"
              hide-details
            ></v-slider>
            <div class="caption">
              {{ currentTimeAndDurationLabel }}
            </div>
          </v-row>
        </v-col><!-- information and controllers section -->

        <!-- buttons section -->
        <ControlButtons
          :layout=layout
          :music=getMusicUrlsListById
          @togglePlaying=togglePlaying
        /><!-- buttons section -->

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

    <!-- bottom navigation -->
    <PlayerBottomNav
      :layout = "layout"
      @switchTab = "switchTab"
      @toggleLayout = "toggleLayout"
      @toggleVolumeMute=toggleVolumeMute
    /><!-- bottom navigation -->

  </v-footer>
</template>

<script>
import audioAnalyser from '../../utils/audioAnalyser'
import { httpToHttps } from '../../utils/helper'
import { mapGetters } from 'vuex'
import { mdiEjectOutline, mdiChevronDown } from '@mdi/js'

import ControlButtons from './ControlButtons'
import MusicInfo from './MusicInfo'
import CoverImage from './CoverImage'

import PlayerBottomNav from './BottomNav'

export default {
  components: {
    ControlButtons,
    MusicInfo,
    PlayerBottomNav,
    CoverImage,
    TabPlaylist: () => import(/* webpackPrefetch: true */ './TabPlaylist'),
    TabDownload: () => import(/* webpackPrefetch: true */ './TabDownload'),
    TabMessage: () => import(/* webpackPrefetch: true */ './TabMessage'),
    TabLyric: () => import(/* webpackPrefetch: true */ './TabLyric')
  },
  data () {
    return {
      mdiEjectOutline,
      mdiChevronDown,
      httpToHttps,
      tab: 0,
      ended: false, // for when audio tag is ended
      volume: 1,
      storedLastVolume: 0,
      currentTime: 0,
      duration: 0,
      layout: false,
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
    breakpoint () {
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
      if (this.breakpoint) {
        this.layout = !this.layout
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
    bottom: 95px;
    width: 100vw;
    z-index: 1;
    transition: 0.4s;
    pointer-events: none;
}
.canvas-movedown{
  bottom: 56px !important
}
.max-ch{
  max-width: 26ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.z-index-higher{
  z-index: 3;
}
.border-top-radius{
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.normal-player{
  height: 96px;
  transition: .4s ease-in-out;
}
.full-height-player{
  height:calc(100vh - 112px);
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
</style>
