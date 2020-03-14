<template>
  <div>
<!-- {{getCommentsById}} -->
  <!-- Loading progress bar -->
  <loading v-if="getCommentsById.length" :loading='getCommentsById.length === 0'/>
  <v-card
    v-for="(item, index) in getCommentsById"
    :key="index"
    class="mb-3"
  >
      <v-card-text class="pb-0">
        {{item.content}}
      </v-card-text>

      <v-card-actions class="px-0">
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              :src="item.user.avatarUrl"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{item.user.nickname}}</v-list-item-title>
          </v-list-item-content>

          <!-- <v-row
            align="center"
            justify="end"
          >
            <v-icon class="mr-1">mdi-heart</v-icon>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">mdi-share-variant</v-icon>
            <span class="subheading">45</span>
          </v-row> -->
        </v-list-item>
      </v-card-actions>
    </v-card>
    <!-- <ul>
      <li v-for="(item, index) in getCommentsById" :key="index">
        {{item.content}}
      </li>
    </ul> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import loading from './Loading'
export default {
  components: {
    loading
  },
  computed: {
    ...mapGetters({
      // currentTrack: 'player/getCurrentTrack',
      getCommentsById: 'getCommentsById',
      // songUrl: 'player/getSong',
      // getMusicDetailsList: 'player/getMusicDetailsList',
      getMusicUrlsListById: 'player/getMusicUrlsListById'
    })
  },
  mounted () {
    this.$store.commit('setCommentsById', this.getMusicUrlsListById[0].id)
  }
}
</script>

<style scoped>

</style>
