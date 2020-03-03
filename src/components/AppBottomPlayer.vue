<template>
    <v-footer fixed class="pa-0 ma-0" color="secondary">
      <v-col class="py-0 px-sm-9 ma-0" cols="12">
        <!-- player -->
          <v-row
            no-gutters
          >
            <v-col
              cols="3"
              align-self="center"
            >
              <v-img
                v-if="getPlayerPlayList[0]"
                class="ma-0 pa-0"
                :src="getPlayerPlayList[0].al.picUrl"
                max-width="250"
                max-height="104"
              >
              </v-img>
              <v-img
                v-else
                class="ma-0 pa-0"
                src="../assets/default_cover.png"
                max-width="250"
                max-height="104"
              >
              </v-img>
            </v-col>
            <v-col
              cols="9"
              class="pl-5 text-center"
              style="max-width:900px"
            >
            <!-- {{getPlayerUrlAndInfoList}} -->
              <!-- <h2 class="title" v-if="getPlayerPlayList[0]">{{getPlayerPlayList[0].name}}</h2> -->
              <h2 class="subtitle-2" v-if="getPlayerPlayList[0]">{{getPlayerPlayList[0].name}}</h2>
              <h2 class="subtitle-2" v-else> NetEast </h2>
              <!-- <span class="body-2" v-if="getPlayerPlayList[0]">{{getPlayerPlayList[0].ar[0].name}}</span> -->
              <span class="caption" v-if="getPlayerPlayList[0]">{{getPlayerPlayList[0].ar[0].name}}</span>
              <span class="caption" v-else> Cloud Music player </span>
              <v-slider
                v-if="currentTime"
                dense
                v-model="currentTime"
                min="0"
                :max="duration"
                color="primary"
                height="3"
                background-color="secondary"
                :messages="currentTimeSecond"
              ></v-slider>
              <v-slider
                class="mt-1"
                dense
                v-else
                v-model="currentTime"
                min="0"
                max="100"
                color="primary"
                height="0"
                background-color="secondary"
              ></v-slider>
              <v-row justify="space-between" no-gutters class="mb-1">
                <v-row justify="space-between" no-gutters>
                  <audio
                    v-show="getPlayerUrlAndInfoList.length > 0"
                    ref="player"
                    :src="getPlayerUrlAndInfoList.length > 0 ? getPlayerUrlAndInfoList[0].url : ''"
                    preload="auto"
                    type="audio/mp3"
                    @timeupdate="getMusicInfo($event.target)"
                    ></audio>
                  <v-btn icon :disabled="getPlayerUrlAndInfoList.length === 0">
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon :disabled="getPlayerUrlAndInfoList.length === 0">
                    <v-icon>mdi-step-backward</v-icon>
                  </v-btn>
                  <v-btn icon v-if="!playing" @click="togglePlaying" :disabled="getPlayerUrlAndInfoList.length === 0">
                    <div v-if="getPlayerUrlAndInfoList[0]">
                      <v-icon color="primary" v-if="getPlayerUrlAndInfoList[0].url">mdi-play</v-icon>
                      <v-icon v-else>mdi-play</v-icon>
                    </div>
                      <v-icon v-else>mdi-play</v-icon>
                  </v-btn>
                  <v-btn icon v-if="playing" @click="togglePlaying" :disabled="getPlayerUrlAndInfoList.length === 0">
                    <v-icon color="primary">mdi-pause</v-icon>
                  </v-btn>
                  <v-btn icon :disabled="getPlayerUrlAndInfoList.length === 0">
                    <v-icon>mdi-step-forward</v-icon>
                  </v-btn>
                  <v-btn icon :disabled="getPlayerUrlAndInfoList.length === 0">
                    <v-icon>mdi-sync</v-icon>
                  </v-btn>
                </v-row>
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
// import { getSongDetail } from '../utils/api'
export default {
  data () {
    return {
      player: null,
      volume: 1,
      storedLastVolume: 0,
      currentTime: 0,
      duration: 0,
      paused: true,
      message: ['hello', 'hi']
      // song: null
    }
  },
  computed: {
    ...mapGetters({
      playing: 'player/getPlaying',
      songUrl: 'player/getSong',
      getPlayerPlayList: 'player/getPlayerPlayList',
      getPlayerUrlAndInfoList: 'player/getPlayerUrlAndInfoList'
    }),
    currentTimeSecond () {
      return Math.round(this.currentTime) + 's'
    },
    song () {
      // return this.getPlayerUrlAndInfoList[0] ? this.getPlayerUrlAndInfoList[0] : ''
      return ''
    }
  },
  watch: {
    volume: function (val) {
      this.$refs.player.volume = val
      // console.log(this.player)
    }
  },
  // mounted () {
  //   this.player = this.$refs.player
  //   console.log(this.player)
  // },
  methods: {
    togglePlaying () {
      if (this.paused) {
        this.$refs.player.play()
      } else {
        this.$refs.player.pause()
      }
      this.$store.commit('player/togglePlaying')
    },
    getMusicInfo (audio) {
      this.currentTime = audio.currentTime
      this.duration = audio.duration
      this.paused = audio.paused
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
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: #fc5185;
}
.margin10{
  margin: 10px
}
</style>
