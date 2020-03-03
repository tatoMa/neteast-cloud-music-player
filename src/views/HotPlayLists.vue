<template>
  <v-container
        class="fill-height pa-0 pa-sm-3 ma-0"
        fluid
      >
        <v-col
          justify="center"
          class="pa-0 pa-sm-3"
        >
    <!-- Loading progress bar -->
    <v-container style="height: 400px;" v-if="data.length === 0">
      <v-row
        class="fill-height"
        align-content="center"
        justify="center"
      >
        <v-col
          class="subtitle-1 text-center"
          cols="12"
        >
          Wait a second...
        </v-col>
        <v-col cols="6">
          <v-progress-linear
            color="primary accent-4"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>

    <!-- main container -->
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="item in data"
          :key="item.id"
          cols="6"
          sm="4"
          md="3"
          class="pa-2"
        >
          <v-card class="card-hover" color="secondary">
            <v-img
              :src="item.coverImgUrl"
              class="white--text align-end image"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="20vh"
              @click="goToPlaylist(item)"
            >
              <v-card-title class="subtitle-1" v-text="item.name"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-btn icon @click="goToPlaylist(item)">
                <v-icon>mdi-play-circle-outline</v-icon>
              </v-btn>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-playlist-music</v-icon>
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
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // },
  data () {
    return {
      // data: [],
      search: ''
    }
  },
  computed: {
    ...mapGetters({
      // map `this.doneCount` to `this.$store.getters.doneTodosCount`
      data: 'getPlayLists'
    })
  },
  mounted () {
    // const instance = axios.create({
    //   baseURL: 'https://neteast-cloud-music-api.herokuapp.com/',
    //   timeout: 1000,
    //   headers: { 'X-Custom-Header': 'foobar' }
    // })
    // console.log(process.env.VUE_APP_baseURL)

    // axios.get(`${process.env.VUE_APP_baseURL}/top/playlist`)
    //   .then((response) => {
    //     console.log(response.data.playlists)
    //     this.data = response.data.playlists
    //   })
    this.$store.commit('setPlayLists')
  },
  methods: {
    goToPlaylist (item) {
      this.$router.push(`/playlist?id=${item.id}`)
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
