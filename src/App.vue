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
    <AppNavbar
      @toggleAppDrawer="toggleAppDrawer"
    /><!-- app navbar -->

    <!-- main section -->
    <v-content>
      <v-scroll-x-transition mode="out-in"><!-- transitions -->

          <!-- router -->
          <router-view
            style="margin-bottom:96px"
            :key="$route.fullPath"
          ></router-view> <!-- define key to fullpath of router makes router refresh whenever address changes -->

      </v-scroll-x-transition>
    </v-content><!-- main section -->

    <!-- bottom player -->
    <Player
      :layout="layout"
      @toggleLayout="toggleLayout"
      :tab="tab"
      @switchTab="switchTab"
    />

    <BottomNav
      :layout="layout"
      @disableLayout="disableLayout"
    />
  </v-app>
</template>

<script>
// import { mapGetters } from 'vuex'
import AppDrawer from './components/AppDrawer'
import AppNavbar from './components/AppNavbar'
import Player from './components/Player/index'
import BottomNav from './components/BottomNav'
import { mdiArrowLeft } from '@mdi/js'
export default {
  name: 'App',
  components: {
    AppNavbar,
    AppDrawer,
    Player,
    BottomNav
  },
  data () {
    return {
      mdiArrowLeft,
      appDrawer: false,
      layout: false,
      tab: 0
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
    },
    toggleLayout () {
      this.layout = !this.layout
    },
    disableLayout () {
      this.layout = false
      this.switchTab(0)
    },
    switchTab (tab) {
      this.tab = tab
    }
  }
}
</script>
<style>
.cursor-pointer{
  cursor: pointer;
}
.fullheight-desktop{
  margin-bottom:96px
}
.fullheight-mobile{
  padding-bottom:48px !important
}
</style>
