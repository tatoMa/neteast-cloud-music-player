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
            height="35vh"
            :src="httpToHttps(getPlayListById.coverImgUrl)"
          >
          </v-img>
          <v-card-title>{{getPlayListById.name}}</v-card-title>
          <v-card-subtitle>{{getPlayListById.description}}</v-card-subtitle>
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
          class="mb-1"
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
import MusicItem from '../components/MusicItem'
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
      // item: -1,
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
    })
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
