<template>
  <v-container
        class=" pa-0 pa-sm-3 ma-0 mb-12"
        fluid
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

      <v-tab-item
        v-for="n in 6"
        :key="n"
      >
        <TopMusicItem :id='n-1'></TopMusicItem>
      </v-tab-item>
    </v-tabs><!-- mobile screen -->

    <!-- desktop and large screen -->
    <v-row v-else>
      <v-col
        cols="6"
        sm="6"
        md="4"
        class="pa-0 ma-0"
        v-for="n in 6"
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
  data () {
    return {

    }
  },
  computed: {
    breakpoint () {
      return this.$vuetify.breakpoint
    }
  }
}
</script>
