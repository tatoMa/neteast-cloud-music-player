<template>
  <v-container
    class="pt-0 mb-8 pb-6 pb-sm-12"
  >
    <!-- mobile screen -->
    <v-tabs
      show-arrows
      color="primary"
      center-active
      v-if="breakpoint.xs"
    >
      <v-tab>New</v-tab>
      <v-tab>Hot</v-tab>
      <v-tab>Origional</v-tab>
      <v-tab>Popular</v-tab>
      <v-tab>International</v-tab>
      <v-tab>UK Top</v-tab>
      <v-tab>Billboard</v-tab>
      <v-tab>KTV</v-tab>
      <v-tab>iTunes</v-tab>

      <v-tab-item
        v-for="n in 9"
        :key="n"
      >
        <TopMusicItem :id='n-1'></TopMusicItem>
      </v-tab-item>
    </v-tabs><!-- mobile screen -->

    <!-- desktop and large screen -->
    <v-row v-else class="mb-4">
      <v-col
        cols="12"
        class="pa-0 ma-0"
        v-for="n in 9"
        :key="n"
      >
        <TopMusicItem :id='n-1'></TopMusicItem>
      </v-col>
    </v-row><!-- desktop and large screen -->

  </v-container>
</template>

<script>
import TopMusicItem from '../components/TopMusicItem'
export default {
  name: 'TopMusic',
  components: {
    TopMusicItem
  },
  computed: {
    breakpoint () {
      return this.$vuetify.breakpoint
    }
  }
}
</script>
