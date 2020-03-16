<template>
  <v-app>

    <!-- app drawer -->
    <v-navigation-drawer
      v-model="appDrawer"
      app
      clipped
    >
      <AppDrawer/>
    </v-navigation-drawer><!-- app drawer -->

    <!-- app navbar -->
    <app-navbar @toggleAppDrawer="toggleAppDrawer"/><!-- app navbar -->

    <!-- main section -->
    <v-content>
      <v-scroll-x-transition mode="out-in">
          <!-- router -->
          <router-view
            class="pb-12"
            :key="$route.fullPath"
          ></router-view>
      </v-scroll-x-transition>
    </v-content><!-- main section -->

    <!-- bottom player -->
    <Player/>

  </v-app>
</template>

<script>
// import { mapGetters } from 'vuex'
import AppDrawer from './components/AppDrawer'
import appNavbar from './components/AppNavbar'
import Player from './components/Player/index'
export default {
  name: 'App',
  components: {
    // appDrawer,
    appNavbar,
    AppDrawer,
    Player
  },
  data () {
    return {
      appDrawer: false
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  },
  methods: {
    toggleAppDrawer () {
      this.appDrawer = !this.appDrawer
    }
  }
}
</script>
<style>
.cursor-pointer{
  cursor: pointer;
}
</style>
