<template>
  <v-col
    justify="start"
    class="pa-1 pa-sm-3"
  >
  <!-- {{getTopMusicListsById[id]}} -->
    <!-- Loading progress bar -->
    <loading :loading='getTopMusicListsById[id].length === 0'/>
    <v-container fluid class="py-0 px-1 pa-sm-2 pt-sm-0" v-if="getTopMusicListsById[id].length !== 0">
      <div class="headline text-center">{{getTopMusicListsById[id].name}}</div>
      <v-row dense align-content="start">
        <!-- <v-btn
          @click="setMusicList"
          rounded
          color="primary"
          block
          class="my-1"
        >
          play list
          <v-icon right>mdi-play-circle-outline</v-icon>
        </v-btn> -->
        <v-col
          v-for="(item, index) in getTopMusicListsById[id].tracks"
          :key="item.id"
          cols="12"
          class="px-2 py-0 my-0 click-effect"
          @click="setMusic(item.id)"
        >
          <v-card
            v-if="index < 30"
            class="my-1"
            color="secondary"
            style="min-height:108px"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="subtitle-1 max-ch"
                  v-text="item.name"
                ></v-card-title>

                <v-card-subtitle class="caption" v-text="item.ar[0].name"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-2"
                size="92"
                tile
              >
                <v-img
                :src="item.al.picUrl+'?param=100y100'"
                :lazy-src="item.al.picUrl+'?param=30y30'"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-col>
</template>

<script>
// import axios from 'axios'
import { mapGetters } from 'vuex'
import loading from '../components/Loading'
export default {
  name: 'HotPlayLists',
  props: [
    'id'
  ],
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
      // getNewMusicLists: 'getNewMusicLists',
      getTopMusicListsById: 'getTopMusicListsById'
    })
    // getTopMusicListsById () {
    //   return this.$store.getters.getTopMusicListsById
    // }
  },
  mounted () {
    // this.$store.commit('setNewMusicLists')
    this.$store.commit('setTopMusicListsById', this.id)
  },
  methods: {
    setMusic (id) {
      this.$store.commit('player/togglePaused', false)
      this.$store.commit('player/setMusicDetailByIdFromSearch', id)
      this.$store.commit('player/setMusicUrlsListById')
    }
    // setMusicList () {
    //   this.$store.commit('player/togglePaused', false)
    //   console.log(this.getTopMusicListsById[this.id].tracks)

    //   this.$store.commit('player/setMusicDetailByIdsList', this.getPlayListById[this.id].tracks)
    //   this.$store.commit('player/setMusicUrlsListById')
    // }
  }
}
</script>
<style lang="scss" scoped>
.click-effect .justify-space-between{
  transition: .15s ease-out;
}
.click-effect:active .justify-space-between{
  background-color:#79797980 !important
}
</style>
