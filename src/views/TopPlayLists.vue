<template>
  <v-container
  >
    <v-col
      justify="center"
      class="pa-0 pa-sm-2"
    >

      <!-- Loading progress bar -->
      <loading v-if='getPlayLists.length === 0'/>

      <!-- main container -->
      <v-container fluid class="py-0 px-1 pa-sm-2 pt-sm-0">
        <v-row dense>

          <div v-show="getPlayLists.length" class="mx-auto mb-1 mt-0 headline text-center">
            {{this.$route.query.tag ? this.$route.query.tag : 'Top Playlist'}}
          </div>

          <!-- music types tag expension panel -->
          <v-expansion-panels v-show="getPlayLists.length" focusable accordion>
            <v-expansion-panel
            >
              <v-expansion-panel-header color="primary" ripple>
                  Music Type Tags
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-chip
                  v-ripple
                  color="primary"
                  class="mx-1 my-2 cursor-pointer"
                  v-for="(tag, i) in getAllPlayListTags"
                  :key="i"
                  @click.stop="goToPlaylistsByTag(tag.name)"
                >
                  {{tag.name}}
                </v-chip>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels><!-- music types tag expension panel -->

          <!-- the list -->
          <v-col
            v-for="item in getPlayLists"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            class="pa-0 py-1 pa-sm-2"
          >
            <TopPlayListItem
              :item=item
              @goToPlaylist=goToPlaylist
              @goToPlaylistsByTag=goToPlaylistsByTag
            />
          </v-col><!-- the list -->

        </v-row>
      </v-container><!-- main container -->

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
      getPlayLists: 'getPlayLists',
      getAllPlayListTags: 'getAllPlayListTags'
    })
  },
  mounted () {
    const query = this.$route.query.tag
    if (query) {
      this.$store.commit('setPlayListByTagName', query)
    } else {
      if (this.getPlayLists.length === 0) {
        this.$store.commit('setPlayLists')
      }
    }
    if (!this.getAllPlayListTags) {
      this.$store.commit('setAllPlayListTags')
    }
  },
  methods: {
    goToPlaylist (item) {
      this.$router.push(`/playlistdetail?id=${item.id}`)
    },
    goToPlaylistsByTag (tag) {
      this.$router.push(`/playlist?tag=${tag}`)
    }
  }
}
</script>
<style scoped>

</style>
