<template>
  <v-card height="150">
    <v-footer fixed class="pa-0 ma-0 ">
      <v-col class="text-center py-0 px-8 ma-0 footer" cols="12">
        <!-- player -->
          <v-row
            no-gutters
            justify="space-between"
          >
            <v-col
              cols="3"
              align-self="center"
            >
              <v-img
                class="ma-1"
                src="../assets/cover.png"
                max-width="250"
                max-height="90"
              >
              </v-img>
            </v-col>
            <v-col
              cols="9"
            >
              <h2 class="title">Knight Move</h2>
              <span class="body-2">Chilly Conzauk</span>
              <v-row justify="space-around" class="mx-5">
                <audio
                  ref="player"
                  :src="song.url"
                  ></audio>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-step-backward</v-icon>
                </v-btn>
                <v-btn icon v-if="!playing" @click="togglePlaying">
                  <v-icon>mdi-play</v-icon>
                </v-btn>
                <v-btn icon v-if="playing" @click="togglePlaying">
                  <v-icon>mdi-pause</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-step-forward</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-sync</v-icon>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      activeBtn: 1
    }
  },
  computed: {
    ...mapGetters({
      playing: 'player/getPlaying',
      song: 'player/getSong'
    })
  },
  methods: {
    togglePlaying () {
      if (!this.$store.getters['player/getPlaying']) {
        console.log('yes')
        this.$refs.player.play()
      } else {
        console.log('no')
      }
      this.$store.commit('player/togglePlaying')
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: #fc5185;
}

</style>
