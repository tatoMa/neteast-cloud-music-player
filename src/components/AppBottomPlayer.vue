<template>
    <v-footer
      fixed
      class="pa-0 ma-0 z-index-higher"
      color="secondary"
    >
      <!-- <v-col class="py-0 px-sm-9 ma-0" cols="12"> -->
        <!-- player -->
          <v-row
            no-gutters
            justify="center"
            align="end"
            class="px-3 px-sm-10 normal-player"
            @click="toggleLayout"
            :class="{ 'full-height-player': layout }"
            style="width:100vw"
          >

          <!-- cover image section -->
            <v-col
              :cols="layout?12:3"
            >
              <v-img
                v-if="getMusicDetailsList[currentTrack]"
                class="my-1 pa-0 mx-auto"
                :src="layout ? getMusicDetailsList[currentTrack].al.picUrl+'?param=600y600' : getMusicDetailsList[currentTrack].al.picUrl+'?param=200y200'"
                :max-width="layout ? 400 : 94"
                :max-height="layout ? 400 : 94"
                contain
              >
              </v-img>
              <v-img
                v-else
                class="my-1 pa-0 mx-auto"
                src="../assets/default_cover.png"
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
                v-model="currentTime"
                min="0"
                :max="duration"
                color="primary"
                height="0"
                background-color="secondary"
                hide-details
                @click="playTimeClick()"
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
                height="0"
                background-color="secondary"
                hide-details
              ></v-slider>
              <div class="caption">
                {{ currentTimeAndDurationLabel }}
              </div>
              </v-row>

              <!-- buttons section -->
              <v-row justify="space-between" no-gutters class="mb-1">
                <v-spacer class="d-none d-sm-flex"></v-spacer>
                <v-row justify="space-between" no-gutters>
                  <audio
                    v-show="getMusicUrlsListById.length > 0"
                    ref="player"
                    autoplay
                    :src="getMusicUrlsListById.length > 0 ? getMusicUrlsListById[0].url : ''"
                    preload="auto"
                    type="audio/mp3"
                    @timeupdate="getMusicInfo($event.target)"
                    ></audio>
                  <v-btn icon :disabled="getMusicUrlsListById.length === 0">
                    <v-icon disabled="">mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon :disabled="getMusicUrlsListById.length === 0" @click.stop="prevTrack">
                    <v-icon>mdi-step-backward</v-icon>
                  </v-btn>
                  <v-btn icon v-if="paused" @click.stop="togglePlaying" :disabled="getMusicUrlsListById.length === 0">
                    <div v-if="getMusicUrlsListById[0]">
                      <v-icon large color="primary" v-if="getMusicUrlsListById[0].url">mdi-play</v-icon>
                      <v-icon large v-else>mdi-play</v-icon>
                    </div>
                      <v-icon large v-else>mdi-play</v-icon>
                  </v-btn>
                  <v-btn icon v-if="!paused" @click.stop="togglePlaying" :disabled="getMusicUrlsListById.length === 0">
                    <div v-if="getMusicUrlsListById[0]">
                      <v-icon color="primary" v-if="!getMusicUrlsListById[0].url" >mdi-alert-circle</v-icon>
                      <v-icon color="primary" v-else>mdi-pause</v-icon>
                    </div>
                      <v-icon color="primary" v-else>mdi-pause</v-icon>
                  </v-btn>
                  <v-btn icon :disabled="getMusicUrlsListById.length === 0" @click.stop="nextTrack">
                    <v-icon>mdi-step-forward</v-icon>
                  </v-btn>
                  <v-btn icon :disabled="getMusicUrlsListById.length === 0">
                    <v-icon disabled="">mdi-sync</v-icon>
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
                    append-icon="mdi-volume-high"
                    @click:append="toggleVolumeMute"
                    hide-details
                    step=0.05
                    style="margin:20px"
                  ></v-slider>
                </v-col>

              </v-row>
            </v-col>
          </v-row>
      <!-- </v-col> -->
    </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      // audioTagPausedStatus: false,
      // player: null,
      ended: false, // for when audio tag is ended
      volume: 1,
      storedLastVolume: 0,
      currentTime: 0,
      duration: 0,
      layout: false
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
    }
  },
  watch: {
    volume: function (val) {
      this.$refs.player.volume = val
      // console.log(this.player)
    }
  },
  mounted () {
    // this.audioTagPausedStatus = this.$refs.player.paused
    this.$refs.player.onended = () => {
      this.nextTrack()
    }
  },
  methods: {
    togglePlaying () {
      if (this.$refs.player.paused) {
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
    playTimeClick () {
      console.log('click slider')
      this.$refs.player.currentTime = 260
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
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.max-ch{
  max-width: 26ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.z-index-higher{
  z-index: 2;
}
.normal-player{
  height: 96px;
  transition: .4s ease-in-out;
}
.full-height-player{
  height:calc(100vh - 56px);
}
</style>
