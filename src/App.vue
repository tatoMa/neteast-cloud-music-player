<template>
  <v-app>
    <app-drawer/>>
    <!-- navbar -->
    <v-app-bar
      app
      color="secondary"
      dark
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="toggleAppDrawer" />
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
          @click="$router.push('/')"
        />
        <p class="headline ma-auto">TT Music</p>
      </div>
      <v-spacer />
      <v-row
        align="center"
        style="max-width: 650px"
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
          class="mr-5"
        />
      </v-row>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <!-- main container -->
    <v-content>
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import { mapGetters } from 'vuex'
import appDrawer from './components/AppDrawer'
export default {
  name: 'App',
  components: {
    appDrawer
  },
  methods: {
    toggleAppDrawer () {
      this.$store.dispatch('toggleAppDrawer')
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>

<style lang="scss" scoped>
// todo:center item
.maxwidth{
  max-width: 900px;
  display: flex;
  justify-content: center;
}
</style>
