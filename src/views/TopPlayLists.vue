<template>
  <v-container
    class="fill-height pa-0 pa-sm-3 ma-0"
    fluid
  >
    <v-col
      justify="center"
      class="pa-1 pa-sm-3 mb-12"
    >

      <!-- Loading progress bar -->
      <loading :loading='getPlayLists.length === 0'/>

      <!-- main container -->
      <v-container fluid class="py-0 px-1 pa-sm-2 pt-sm-0">
        <v-row dense>

          <!-- the list -->
          <v-col
            v-for="item in getPlayLists"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            class="pa-2 pa-sm-2"
          >
            <TopPlayListItem
              :item=item
              @goToPlaylist=goToPlaylist
            />
          </v-col><!-- the list -->

        </v-row>
      </v-container>

    </v-col>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import loading from '../components/Loading'
import TopPlayListItem from '../components/TopPlayListItem'
export default {
  name: 'HotPlayLists',
  components: {
    loading,
    TopPlayListItem
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
