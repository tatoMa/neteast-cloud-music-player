<template>
  <v-container
        class=" pa-0 pa-sm-3 ma-0 pb-12 mb-12"
        fluid
  >
  <!-- {{breakpoint.xs}} -->
      <!-- <v-card> -->
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
            <TopMusicById :id='n-1'></TopMusicById>
          </v-tab-item>
        </v-tabs>
        <v-row v-else>
          <v-col
            cols="6"
            sm="6"
            md="4"
            class="pa-0 ma-0"
            v-for="n in 6"
            :key="n"
          >
            <TopMusicById :id='n-1'></TopMusicById>
          </v-col>
        </v-row>
      <!-- </v-card> -->
  </v-container>
</template>

<script>
import TopMusicById from '../components/TopMusicById'
export default {
  name: 'TopMusic',
  components: {
    TopMusicById
  },
  data () {
    return {

    }
  },
  computed: {
    breakpoint () {
      return this.$vuetify.breakpoint
    }
  },
  // mounted () {
  //   console.log(this.$vuetify.breakpoint)
  // },
  methods: {

  }
}
</script>
