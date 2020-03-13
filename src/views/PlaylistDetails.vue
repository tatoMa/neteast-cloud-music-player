<template>
  <v-container class="pt-0">
    <v-row class="text-center">
      <v-col cols="12">

        <!-- Loading progress bar -->
        <loading :loading='!getPlayListById'/>

        <!-- The List -->
        <v-card
          v-if="getPlayListById"
          class="mx-auto"
          max-width="800"
          tile
        >
          <v-img
            class="white--text align-end"
            height="35vh"
            :src="getPlayListById.coverImgUrl"
          >
          </v-img>
          <v-card-title>{{getPlayListById.name}}</v-card-title>
          <v-card-subtitle>{{getPlayListById.description}}</v-card-subtitle>
        </v-card>
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
          play list
          <v-icon right>{{mdiPlayCircleOutline}}</v-icon>
        </v-btn>
          <v-list
            v-for="track in getPlayListById.tracks"
            :key="track.id"
            class="ma-0 pa-0"
          >
            <!-- <v-list-item-group color="primary"> -->
              <v-list-item
                @click="setMusic(track.id)"
              >
                <v-list-item-icon>
                  <v-icon>{{mdiStar}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="track.name"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-icon>{{mdiPlayCircleOutline}}</v-icon>
                </v-list-item-avatar>
              </v-list-item>
            <!-- </v-list-item-group> -->
          <v-divider/>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import loading from '../components/Loading'
import { mapGetters } from 'vuex'
import { mdiStar, mdiPlayCircleOutline } from '@mdi/js'
export default {
  name: 'PlayListDetails',
  components: {
    loading
  },
  data () {
    return {
      // item: -1,
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
