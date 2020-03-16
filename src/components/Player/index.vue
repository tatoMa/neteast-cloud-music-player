<template>
    <v-footer
      fixed
      class="pa-0 ma-0 z-index-higher border-top-radius"
      color="secondary"
    >
    <canvas
      id='canvas'
      :class="[layout ? 'canvas-movedown' : '']"
      width="600"
      height="350"
    >
    </canvas>
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
    ></audio>

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
            <v-col
              :cols="layout?12:3"
              v-if="tab === 0"
            >
              <v-img
                @click="toggleLayout"
                v-if="getMusicDetailsList[currentTrack]"
                class="my-1 pa-0 mx-auto cover-round"
                :class="[paused ? '' : 'cover-rotation' , layout ? 'cover-disk' : '']"
                :src="httpToHttps(this.getMusicDetailsList[this.currentTrack].al.picUrl)+'?param=400y400'"
                :max-width="layout ? 400 : 94"
                :max-height="layout ? 400 : 94"
                contain
              >
              </v-img>
              <v-img
                @click="toggleLayout"
                v-else
                class="my-1 pa-0 mx-auto"
                src="../../assets/default_cover.png"
                :max-width="layout ? 400 : 94"
                :max-height="layout ? 400 : 94"
                contain
              >
              </v-img>
            </v-col>

            <!-- information and controllers section -->
            <v-col
              :align-self="layout?'end':'center'"
              class="pl-1 pl-sm-5 text-center"
              style="max-width:900px"
              :class="layout ? 'mb-4' : ''"
              v-if="tab === 0"
            >
            <!-- {{getMusicUrlsListById}} -->
              <!-- <h2 class="title" v-if="getMusicDetailsList[0]">{{getMusicDetailsList[0].name}}</h2> -->
              <div class="max-ch mx-auto">
                <span
                  class="subtitle-2 d-sm-block"
                  v-if="getMusicDetailsList[currentTrack]"
                >
                  {{getMusicDetailsList[currentTrack].name}}
                </span>
                <span
                  class="subtitle-2 d-sm-block"
                  v-else
                >
                  NetEast
                </span>
                <!-- <span class="body-2" v-if="getMusicDetailsList[0]">{{getMusicDetailsList[0].ar[0].name}}</span> -->
                <span class="caption d-sm-block" v-if="getMusicDetailsList[currentTrack]">{{getMusicDetailsList[currentTrack].ar[0].name}}</span>
                <span class="caption d-sm-block" v-else> Cloud Music player </span>
              </div>
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

              <!-- buttons section -->
              <v-row
                justify="space-between"
                no-gutters class="mb-1"
                :class="layout?'mb-8':''"
                @click.stop=""
              >
                <v-spacer class="d-none d-sm-flex"></v-spacer>
                <v-row justify="space-between" no-gutters>
                  <v-btn icon :disabled="getMusicUrlsListById.length === 0">
                    <v-icon disabled="">{{mdiHeart}}</v-icon>
                  </v-btn>
                  <v-btn icon :disabled="getMusicUrlsListById.length === 0" @click.stop="prevTrack">
                    <v-icon>{{mdiStepBackward}}</v-icon>
                  </v-btn>
                  <v-btn icon v-if="paused" @click.stop="togglePlaying" :disabled="getMusicUrlsListById.length === 0">
                    <div v-if="getMusicUrlsListById[0]">
                      <v-icon large color="primary" v-if="getMusicUrlsListById[0].url">{{mdiPlay}}</v-icon>
                      <v-icon large v-else>{{mdiPlay}}</v-icon>
                    </div>
                      <v-icon large v-else>{{mdiPlay}}</v-icon>
                  </v-btn>
                  <v-btn icon v-if="!paused" @click.stop="togglePlaying" :disabled="getMusicUrlsListById.length === 0">
                    <div v-if="getMusicUrlsListById[0]">
                      <v-icon color="primary" v-if="!getMusicUrlsListById[0].url" >{{mdiAlertCircle}}</v-icon>
                      <v-icon color="primary" v-else>{{mdiPause}}</v-icon>
                    </div>
                      <v-icon color="primary" v-else>{{mdiPause}}</v-icon>
                  </v-btn>
                  <v-btn icon :disabled="getMusicUrlsListById.length === 0" @click.stop="nextTrack">
                    <v-icon>{{mdiStepForward}}</v-icon>
                  </v-btn>
                  <v-btn icon :disabled="getMusicUrlsListById.length === 0">
                    <v-icon disabled="">{{mdiSync}}</v-icon>
                  </v-btn>
                </v-row>
                <!-- volume controller -->
                <v-col cols="3" class="ma-0 pa-0 d-none d-sm-flex">
                  <v-slider
                    class="ml-9 pa-0 ma-0 margin10"
                    dense
                    v-model="volume"
                    min="0"
                    max="1"
                    color="primary"
                    background-color="secondary"
                    :append-icon=mdiVolumeHigh
                    @click:append="toggleVolumeMute"
                    hide-details
                    step=0.05
                    style="margin:20px"
                  ></v-slider>
                </v-col>

              </v-row>
            </v-col>

            <!-- Play List Tab -->
            <v-col v-if="tab === 1" class="scrollY" cols="12">
              <PlayerTabPlaylist/>
            </v-col>
            <v-col v-if="tab === 2" class="scrollY" cols="12">
              <PlayerTabMessage/>
            </v-col>
            <v-col v-if="tab === 3" class="scrollY" cols="12">
              <PlayerTabDownload/>
            </v-col>
          </v-row>
          <PlayerBottomNav
            :layout = "layout"
            @switchTab = "switchTab"
            @toggleLayout = "toggleLayout"
          />

    </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'
import PlayerBottomNav from './BottomNav'
// import WaveEffect from './WaveEffect'
// import WaveEffectLarge from './WaveEffectLarge'
import PlayerTabPlaylist from './TabPlaylist'
import PlayerTabDownload from './TabDownload'
import PlayerTabMessage from './TabMessage'
import audioAnalyser from '../../utils/audioAnalyser'
import { httpToHttps } from '../../utils/helper'
import { mdiVolumeHigh, mdiSync, mdiEjectOutline, mdiChevronDown, mdiHeart, mdiStepBackward, mdiStepForward, mdiPlay, mdiAlertCircle, mdiPause } from '@mdi/js'
export default {
  components: { PlayerBottomNav, PlayerTabPlaylist, PlayerTabDownload, PlayerTabMessage },
  data () {
    return {
      // audioTagPausedStatus: false,
      // player: null,
      mdiVolumeHigh,
      mdiSync,
      mdiEjectOutline,
      mdiChevronDown,
      mdiHeart,
      mdiStepBackward,
      mdiStepForward,
      mdiPlay,
      mdiAlertCircle,
      mdiPause,
      httpToHttps,
      tab: 0,
      ended: false, // for when audio tag is ended
      volume: 1,
      storedLastVolume: 0,
      currentTime: 0,
      duration: 0,
      layout: false,
      audioAnalyser: false
      // paused: true,
      // song: null
    }
  },
  computed: {
    ...mapGetters({
      currentTrack: 'player/getCurrentTrack',
      paused: 'player/getPaused',
      // songUrl: 'player/getSong',
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
    // currentTrackUrlAvailabel () {
    //   console.log(this.getMusicUrlsListById[0].url)

    //   return !!this.getMusicUrlsListById[0].url
    // }
  },
  watch: {
    volume: function (val) {
      this.$refs.player.volume = val
      // console.log(this.player)
    }
  },
  mounted () {
    audioAnalyser.init()
    this.$refs.player.onended = () => {
      this.nextTrack()
    }
    this.$refs.player.onplay = () => {
      this.audioAnalyserStart()
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
      this.$store.commit('player/togglePaused', this.$refs.player.paused)
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
    nextTrack () {
      this.$store.commit('player/setNextTrack')
    },
    prevTrack () {
      this.$store.commit('player/setPrevTrack')
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
  z-index: 2;
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
.cover-round{
  // position: relative;
  border-radius: 50%;
}
.cover-disk::after{
  content: '';
    position: absolute;
    border-radius: 50%;
    top: -2%;
    left: -2%;
    width: 104%;
    height: 104%;
    border: 20px solid black;
}
.cover-rotation{
  animation: rotation 15s infinite linear;
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
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
