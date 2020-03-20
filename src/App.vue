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
    <app-navbar
      @toggleAppDrawer="toggleAppDrawer"
    /><!-- app navbar -->

    <!-- main section -->
    <v-content>
      <!-- <v-btn
      class="mt-3 ml-3"
      fab
      small
      fixed
      color="primary"
      @click.stop="goBack"
      >
        <v-icon>{{mdiArrowLeft}}</v-icon>
      </v-btn> -->

      <v-scroll-x-transition mode="out-in"><!-- transitions -->

          <!-- router -->
          <router-view
            class="pb-12"
            :key="$route.fullPath"
          ></router-view> <!-- define key to fullpath of router makes router refresh whenever address changes -->

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
import { mdiArrowLeft } from '@mdi/js'
export default {
  name: 'App',
  components: {
    appNavbar,
    AppDrawer,
    Player
  },
  data () {
    return {
      appDrawer: false,
      mdiArrowLeft
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  },
  methods: {
    toggleAppDrawer () {
      this.appDrawer = !this.appDrawer
    },
    goBack () {
      // console.log(this.$router)
      this.$router.go(-1)
    }
  }
}
</script>
<style>
.cursor-pointer{
  cursor: pointer;
}
</style>
