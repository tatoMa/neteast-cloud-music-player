<template>
  <v-col
    justify="start"
    class="pa-1 pa-sm-3"
  >
    <!-- Loading progress bar -->
    <loading :loading='getTopMusicListsById[id].length === 0'/>

    <!-- main list section -->
    <v-container fluid class="py-0 px-1 pa-sm-2 pt-sm-0" v-if="getTopMusicListsById[id].length !== 0">
      <div class="headline text-center">{{getTopMusicListsById[id].name}}</div>
      <v-row dense align-content="start" class="px-2">

        <!-- button play the whole list -->
        <v-col
          cols="12"
          class="px-2 py-0 my-0"
        >
          <v-btn
            @click="setMusicList"
            rounded
            color="primary"
            block
            class="my-1"
          >
            play list
            <v-icon right>{{mdiPlayCircleOutline}}</v-icon>
          </v-btn>
        </v-col>

        <!-- Music Item With Pic Component -->
        <musicItemWithPic
          v-for="(item, index) in getTopMusicListsById[id].tracks"
          :key="item.id"
          :item="item"
          :index="index"
          :maxItem="maxItem * page"
          @setMusic="setMusic"
          @addToPlaylist="addToPlaylist"
        />
        <v-btn
          block rounded outlined color="primary"
          class="my-1"
          @click.stop="page++"
          v-if="maxItem * page <= getTopMusicListsById[id].tracks.length"
        >
          Load More
          <v-icon>{{mdiChevronDown}}</v-icon>
        </v-btn>
      </v-row>
    </v-container>
    <!-- main list section -->

  </v-col>
</template>

<script>
import { mapGetters } from 'vuex'
import loading from '../components/Loading'
import musicItemWithPic from './MusicItemWithPic'
import { mdiChevronDown, mdiPlayCircleOutline } from '@mdi/js'
export default {
  name: 'HotPlayLists',
  props: [
    'id'
  ],
  components: {
    loading,
    musicItemWithPic
  },
  data () {
    return {
      mdiChevronDown,
      mdiPlayCircleOutline,
      maxItem: 30,
      page: 1
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
    setMusic (item) {
      this.$store.commit('player/togglePaused', false)
      this.$store.commit('player/setMusicDetailById', item)
      this.$store.commit('player/setMusicUrlsListById')
    },
    setMusicList () {
      this.$store.commit('player/togglePaused', false)
      this.$store.commit('player/setMusicDetailByIdsList', this.getTopMusicListsById[this.id].tracks)
      this.$store.commit('player/setMusicUrlsListById')
    },
    addToPlaylist (item) {
      this.$store.commit('player/togglePaused', false)
      this.$store.commit('player/addMusicDetailById', item)
      this.$store.commit('player/addMusicUrlsListById')
    }
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
