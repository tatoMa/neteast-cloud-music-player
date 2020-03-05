<template>
    <v-footer fixed class="pa-0 ma-0" color="secondary">
      <v-col class="py-0 px-sm-9 ma-0" cols="12">
        <!-- player -->
          <v-row
            no-gutters
            align="center"
          >

          <!-- cover image section -->
            <v-col
              cols="3"
              align-self="center"
            >
              <v-img
                v-if="getMusicDetailsList[0]"
                class="my-1 pa-0"
                :src="getMusicDetailsList[0].al.picUrl+'?param=200y200'"
                max-width="250"
                max-height="94"
                aspect-ratio=1
                contain
              >
              </v-img>
              <v-img
                v-else
                class="my-1 pa-0"
                src="../assets/default_cover.png"
                max-width="250"
                max-height="94"
                aspect-ratio=1
                contain
              >
              </v-img>
            </v-col>

            <!-- information and controllers section -->
            <v-col
              cols="9"
              class="pl-1 pl-sm-5 text-center"
              style="max-width:900px"
            >
            <!-- {{getMusicUrlsListById}} -->
              <!-- <h2 class="title" v-if="getMusicDetailsList[0]">{{getMusicDetailsList[0].name}}</h2> -->
              <div class="max-ch mx-auto">
                <span
                  class="subtitle-2 d-sm-block"
                  v-if="getMusicDetailsList[0]"
                >
                  {{getMusicDetailsList[0].name}}
                </span>
                <span
                  class="subtitle-2 d-sm-block"
                  v-else
                >
                  NetEast
                </span>
                <!-- <span class="body-2" v-if="getMusicDetailsList[0]">{{getMusicDetailsList[0].ar[0].name}}</span> -->
                <span class="caption d-sm-block" v-if="getMusicDetailsList[0]">{{getMusicDetailsList[0].ar[0].name}}</span>
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
                height="0"
                background-color="secondary"
              ></v-slider>
              <v-slider
                class="mt-1"
                disabled
                dense
                v-else
                v-model="currentTimeComputed"
                min="0"
                max="100"
                color="primary"
                height="0"
                background-color="secondary"
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
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon :disabled="getMusicUrlsListById.length === 0">
                    <v-icon>mdi-step-backward</v-icon>
                  </v-btn>
                  <v-btn icon v-if="paused" @click="togglePlaying" :disabled="getMusicUrlsListById.length === 0">
                    <div v-if="getMusicUrlsListById[0]">
                      <v-icon large color="primary" v-if="getMusicUrlsListById[0].url">mdi-play</v-icon>
                      <v-icon large v-else>mdi-play</v-icon>
                    </div>
                      <v-icon large v-else>mdi-play</v-icon>
                  </v-btn>
                  <v-btn icon v-if="!paused" @click="togglePlaying" :disabled="getMusicUrlsListById.length === 0">
                    <v-icon color="primary">mdi-pause</v-icon>
                  </v-btn>
                  <v-btn icon :disabled="getMusicUrlsListById.length === 0">
                    <v-icon>mdi-step-forward</v-icon>
                  </v-btn>
                  <v-btn icon :disabled="getMusicUrlsListById.length === 0">
                    <v-icon>mdi-sync</v-icon>
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
      </v-col>
    </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      audioTagPausedStatus: false,
      player: null,
      volume: 1,
      storedLastVolume: 0,
      currentTime: 0,
      duration: 0,
      // paused: true,
      message: ['hello', 'hi']
      // song: null
    }
  },
  computed: {
    ...mapGetters({
      paused: 'player/getPaused',
      // songUrl: 'player/getSong',
      getMusicDetailsList: 'player/getMusicDetailsList',
      getMusicUrlsListById: 'player/getMusicUrlsListById'
    }),
    currentTimeComputed: {
    // getter
      get: function () {
        return this.currentTime
      },
      // setter
      set: function (newValue) {
        // this.$refs.player.currentTime = newValue
      }
    },
    currentTimeAndDurationLabel: function () {
      if (this.duration && this.duration !== 0) {
        return this.fmtSecToMin(Math.round(this.currentTime)) + '-' + this.fmtSecToMin(Math.round(this.duration))
      } else return '0:00-0:00'
    }
  },
  watch: {
    volume: function (val) {
      this.$refs.player.volume = val
      // console.log(this.player)
    },
    audioTagPausedStatus: function (val) {
      console.log(val)
    }
  },
  // mounted () {
  //   this.player = this.$refs.player
  //   console.log(this.player)
  // },
  mounted () {
    this.audioTagPausedStatus = this.$refs.player.paused
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
    fmtSecToMin (s) { return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s }
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
</style>
