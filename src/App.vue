<template>
  <v-app>
    <app-drawer/>
    <app-navbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-bottom-player/>
  </v-app>
</template>

<script>
// import { mapGetters } from 'vuex'
import appDrawer from './components/AppDrawer'
import appNavbar from './components/AppNavbar'
import appBottomPlayer from './components/AppBottomPlayer'
export default {
  name: 'App',
  components: {
    appDrawer,
    appNavbar,
    appBottomPlayer
  },
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>
<style>
.cursor-pointer{
  cursor: pointer;
}
.v-messages{
  min-height: 0px !important
}
</style>
