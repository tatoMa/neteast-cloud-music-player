<template>
  <v-container class="pt-0 mb-12 pb-12">
    <v-row class="text-center">
      <v-col cols="12">

        <!-- Loading progress bar -->
        <loading :loading='!getPlayListById'/>

        <!-- image, name and description of playlist -->
        <v-card
          v-if="getPlayListById"
          class="mx-auto"
          max-width="800"
          tile
        >
          <v-img
            class="white--text align-end"
            height="30vh"
            :src="httpToHttps(getPlayListById.coverImgUrl)"
          >
          </v-img>
          <v-card-title>{{getPlayListById.name}}</v-card-title>
          <v-expansion-panels accordion>
            <v-expansion-panel class="text-left">
              <v-expansion-panel-header class="body-2 font-weight-light">{{headerTextSliced}}...</v-expansion-panel-header>
              <v-expansion-panel-content class="body-2 font-weight-light">
                {{getPlayListById.description}}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card><!-- image, name and description of playlist -->

        <!-- the list and all items -->
        <v-card
        v-if="getPlayListById"
        class="mx-auto"
        max-width="800"
        tile
        >
        <v-btn
          @click="setMusicList"
          rounded
          color="primary"
          block
          class="mt-2 mb-1"
        >
          play All {{getPlayListById.tracks.length}} Songs
          <v-icon right>{{mdiPlayCircleOutline}}</v-icon>
        </v-btn>
          <v-list
            v-for="track in getPlayListById.tracks"
            :key="track.id"
            class="ma-0 pa-0"
          >
            <MusicItem
              :id="track.id"
              :artist="track.ar[0].name"
              :name="track.name"
              @setMusic="setMusic"
            />
          <v-divider/>
          </v-list>
        </v-card><!-- the list and all items -->

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import loading from '../components/Loading'
import MusicItem from '../components/Common/MusicItem'
import { mapGetters } from 'vuex'
import { httpToHttps } from '../utils/helper'
import { mdiStar, mdiPlayCircleOutline } from '@mdi/js'
export default {
  name: 'PlayListDetails',
  components: {
    loading,
    MusicItem
  },
  data () {
    return {
      httpToHttps,
      mdiStar,
      mdiPlayCircleOutline,
      id: '',
      name: '',
      description: '',
      coverImgUrl: '',
      tracks: []
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.$store.commit('setPlayListById', this.id)
  },
  computed: {
    ...mapGetters({
      getPlayListById: 'getPlayListById'
    }),
    headerTextSliced () {
      return this.getPlayListById.description.slice(0, 36)
    }
  },
  methods: {
    setMusic (id) {
      // console.log(tracks)
      const trackById = this.getPlayListById.tracks.filter((track) => track.id === id)
      // console.log(trackById[0])
      this.$store.commit('player/togglePaused', false)
      this.$store.commit('player/setMusicDetailById', trackById[0])
      this.$store.commit('player/setMusicUrlsListById')
    },
    setMusicList () {
      this.$store.commit('player/togglePaused', false)
      // console.log(this.getPlayListById.tracks)
      this.$store.commit('player/setMusicDetailByIdsList', this.getPlayListById.tracks)
      this.$store.commit('player/setMusicUrlsListById')
    }

  }
}
</script>
<style lang="scss" scoped>
img{
  max-width: 400px;
}
</style>
