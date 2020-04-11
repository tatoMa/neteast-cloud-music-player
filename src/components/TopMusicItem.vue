<template>
  <v-col
    justify="start"
    class="pa-0 pa-sm-2"
  >
    <!-- Loading progress bar -->
    <loading v-if='getTopMusicListsById[id].length === 0'/>

    <!-- main list section -->
    <v-container fluid class="py-0 px-1 pa-sm-2 pt-sm-0" v-if="getTopMusicListsById[id].length !== 0">
      <div class="title" :class="this.$vuetify.breakpoint.xs ? 'text-center ml-0' : 'ml-12'">{{getTopMusicListsById[id].name}}</div>
      <v-row dense align-content="start">

        <!-- display for mobile breakpoint -->
        <template v-if="this.$vuetify.breakpoint.xs">

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

          <musicItemWithPic
            v-for="(item, index) in getTopMusicListsById[id].tracks"
            :key="item.id"
            :name="item.name"
            :artist="item.ar[0].name"
            :imgUrl="item.al.picUrl"
            :id="item.id"
            :index="index"
            :maxItem="maxItem * page"
            @setMusic="setMusic"
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
        </template>

        <!-- display for desktop breakpoint -->
        <template v-else>
          <v-slide-group
            v-model="model"
            center-active
            show-arrows
          >
            <v-slide-item
              v-for="(item, index) in getTopMusicListsById[id].tracks"
              :key="item.id"
              v-slot:default="{ active, toggle }"
            >
              <v-card
                :color="active ? 'primary' : 'grey lighten-1'"
                class="ma-2"
                height="180"
                width="120"
                @click="toggle"
              >
                <musicItemWithPicSquare
                  :name="item.name"
                  :artist="item.ar[0].name"
                  :imgUrl="item.al.picUrl"
                  :id="item.id"
                  :index="index"
                  :maxItem="maxItem * page"
                  @setMusic="setMusic"
                />
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </template>
      </v-row>
    </v-container>
    <!-- main list section -->

  </v-col>
</template>

<script>
import { mapGetters } from 'vuex'
import loading from '../components/Loading'
import musicItemWithPic from './Common/MusicItemWithPic'
import musicItemWithPicSquare from './Common/MusicItemWithPicSquare'
import { mdiChevronDown, mdiPlayCircleOutline } from '@mdi/js'
export default {
  name: 'TopMusicItem',
  props: [
    'id'
  ],
  components: {
    loading,
    musicItemWithPic,
    musicItemWithPicSquare
  },
  data () {
    return {
      mdiChevronDown,
      mdiPlayCircleOutline,
      maxItem: 30,
      page: 1,
      loadedMusicDetailsList: false,
      model: null
      // search: ''
    }
  },
  computed: {
    ...mapGetters({
      getMusicDetailsList: 'player/getMusicDetailsList',
      getTopMusicListsById: 'getTopMusicListsById'
    })
    // getTopMusicListsById () {
    //   return this.$store.getters.getTopMusicListsById
    // }
  },
  mounted () {
    // this.$store.commit('setNewMusicLists')
    this.$store.commit('setTopMusicListsById', this.id)
    this.loadedMusicDetailsList = false
  },
  methods: {
    setMusic (id) {
      if (!this.loadedMusicDetailsList) {
        this.$store.commit('player/setMusicDetailByIdsList', this.getTopMusicListsById[this.id].tracks)
        this.loadedMusicDetailsList = true
      }
      this.$store.commit('player/setMusicUrlsListByPassIdFromMusicList', id)
    },
    setMusicList () {
      // this.$store.commit('player/setPaused', true)
      this.$store.commit('player/setMusicDetailByIdsList', this.getTopMusicListsById[this.id].tracks)
      this.$store.commit('player/setMusicUrlsListById')
    },
    addToPlaylist (item) {
      // this.$store.commit('player/setPaused', true)
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
