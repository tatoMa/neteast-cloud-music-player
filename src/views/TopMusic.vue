<template>
  <v-container
        class=" pa-0 pa-sm-3 ma-0"
        fluid
  >
    <v-col
      justify="start"
      class="pa-1 pa-sm-3"
    >
      <!-- Loading progress bar -->
      <loading :loading='getNewMusicLists.length === 0'/>

      <!-- main container -->
      <v-container fluid class="py-0 px-1 pa-sm-2 pt-sm-0" v-if="getNewMusicLists.length !== 0">
        <div class="headline text-center">TOP NEW MUSIC</div>
        <v-row dense align-content="start">
          <v-col
            v-for="item in getNewMusicLists"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            class="px-2 py-1"
            @click="setMusic(item.id)"
          >
            <v-card color="secondary">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="subtitle-1"
                    v-text="item.name"
                  ></v-card-title>

                  <v-card-subtitle class="caption" v-text="item.song.artists[0].name"></v-card-subtitle>
                </div>

                <v-avatar
                  class="ma-2"
                  size="80"
                  tile
                >
                  <v-img :src="item.picUrl+'?param=100y100'"></v-img>
                </v-avatar>
              </div>

              <!-- <v-img
                :src="item.picUrl+'?param=300y300'"
                class="white--text align-end image"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="20vh"
                @click="goToPlaylist(item)"
              >
                <v-card-title class="subtitle-1" v-text="item.name"></v-card-title>
              </v-img>
              <v-btn icon @click="goToPlaylist(item)">
                  <v-icon color="primary">mdi-play-circle-outline</v-icon>
                </v-btn> -->
              <!-- <v-card-actions>
                <v-btn icon @click="goToPlaylist(item)">
                  <v-icon color="primary">mdi-play-circle-outline</v-icon>
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-playlist-music-outline</v-icon>
                </v-btn>
              </v-card-actions> -->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import loading from '../components/Loading'
export default {
  name: 'HotPlayLists',
  components: {
    loading
  },
  data () {
    return {
      // data: [],
      // search: ''
    }
  },
  computed: {
    ...mapGetters({
      getNewMusicLists: 'getNewMusicLists'
    })
  },
  mounted () {
    this.$store.commit('setNewMusicLists')
  },
  methods: {
    setMusic (id) {
      this.$store.commit('player/togglePaused', false)
      this.$store.commit('player/setMusicDetailByIdFromSearch', id)
      this.$store.commit('player/setMusicUrlsListById')
    }
  }
}
</script>
<style lang="scss" scoped>
img{
  max-width : 60px;
}
.image{
  cursor: pointer;
  zoom: 1;
  transition: 200ms ease-in-out;
}
.card-hover:hover .image{
  transform: translateY(-8px)
}
</style>
