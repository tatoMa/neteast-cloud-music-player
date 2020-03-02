<template>
  <v-card height="150">
    <v-footer fixed class="pa-0 ma-0" color="secondary">
      <v-col class="text-center py-0 px-9 ma-0" cols="12">
        <!-- player -->
          <v-row
            no-gutters
            justify="space-between"
          >
            <v-col
              cols="3"
              align-self="center"
            >
            <div v-if="song">
              <v-img
                class="ma-1"
                :src="song.al.picUrl"
                max-width="250"
                max-height="90"
              >
              </v-img>
            </div>
            </v-col>
            <v-col
              cols="9"
              class="pl-5"
            >
              <h2 class="title" v-if="song">{{song.name}} - {{duration}} - {{currentTime}}</h2>
              <h2 class="title" v-else> NetEast </h2>
              <span class="body-2" v-if="song">{{song.ar[0].name}}</span>
              <span class="body-2" v-else> Cloud Music player </span>
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
                    ref="player"
                    :src="songUrl.url"
                    preload="auto"
                    type="audio/mp3"
                    @timeupdate="getMusicInfo($event.target)"
                    ></audio>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-step-backward</v-icon>
                  </v-btn>
                  <v-btn icon v-if="!playing" @click="togglePlaying">
                    <v-icon color="primary">mdi-play</v-icon>
                  </v-btn>
                  <v-btn icon v-if="playing" @click="togglePlaying">
                    <v-icon color="primary">mdi-pause</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-step-forward</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-sync</v-icon>
                  </v-btn>
                </v-row>
                <v-col cols="3" class="ma-0 pa-0">
                  <v-slider
                  class="ml-9 pa-0 ma-0"
                    dense
                    v-model="currentTime"
                    min="0"
                    max="100"
                    color="primary"
                    background-color="secondary"
                    append-icon="mdi-volume-high"
                    hide-details
                  ></v-slider>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { getSongDetail } from '../utils/api'
export default {
  data () {
    return {
      currentTime: 0,
      duration: 0,
      paused: true,
      message: ['hello', 'hi'],
      song: null
    }
  },
  computed: {
    ...mapGetters({
      playing: 'player/getPlaying',
      songUrl: 'player/getSong'
    }),
    currentTimeSecond () {
      return Math.round(this.currentTime) + 's'
    }
  },
  mounted () {
    getSongDetail(this.songUrl.id).then(res => { this.song = res })
  },
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
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: #fc5185;
}
</style>
