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
            height="330px"
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
          <v-list
            v-for="track in getPlayListById.tracks"
            :key="track.id"
            class="ma-0 pa-0"
          >
            <!-- <v-list-item-group color="primary"> -->
              <v-list-item
                @click="setMusicDetailsList(track)"
              >
                <v-list-item-icon>
                  <v-icon>mdi-star</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="track.name"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-avatar>
                  <v-icon>mdi-play-circle-outline</v-icon>
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
// import axios from 'axios'
import loading from '../components/Loading'
import { mapGetters } from 'vuex'
export default {
  name: 'PlayList',
  components: {
    loading
  },
  data () {
    return {
      // item: -1,
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
    setMusicDetailsList (item) {
      // console.log(item)
      this.$store.commit('player/togglePaused', false)
      this.$store.commit('player/setMusicDetailsList', item)
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
