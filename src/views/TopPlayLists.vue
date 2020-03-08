<template>
  <v-container
        class="fill-height pa-0 pa-sm-3 ma-0"
        fluid
      >
        <v-col
          justify="center"
          class="pa-1 pa-sm-3"
        >

    <!-- Loading progress bar -->
    <loading :loading='getPlayLists.length === 0'/>

    <!-- main container -->
    <v-container fluid class="py-0 px-1 pa-sm-2 pt-sm-0">
      <v-row dense>
        <v-col
          v-for="item in getPlayLists"
          :key="item.id"
          cols="6"
          sm="4"
          md="3"
          class="pa-2 pa-sm-2"
        >
          <v-card class="card-hover" color="secondary">
            <v-img
              :src="item.coverImgUrl+'?param=300y300'"
              class="white--text align-end image"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="20vh"
              @click="goToPlaylist(item)"
            >
              <v-card-title class="subtitle-1" v-text="item.name"></v-card-title>
            </v-img>

            <v-card-actions>
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
            </v-card-actions>
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
      search: ''
    }
  },
  computed: {
    ...mapGetters({
      getPlayLists: 'getPlayLists'
    })
  },
  mounted () {
    this.$store.commit('setPlayLists')
  },
  methods: {
    goToPlaylist (item) {
      this.$router.push(`/playlistdetails?id=${item.id}`)
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
