<template>
  <!-- navbar -->
  <v-app-bar
    app
    color="secondary"
    clipped-left
    class="px-xs-0 px-sm-5"
  >
    <v-app-bar-nav-icon @click.stop="toggleAppDrawer" />
    <div class="d-flex align-center cursor-pointer" @click="goToHomePage">
      <v-btn icon class="mr-2 d-none d-sm-flex">
        <v-icon color="#fc5185" large>{{mdiMusicCircleOutline}}</v-icon>
      </v-btn>
      <p class="headline ma-auto">tato-music</p>
    </div>
    <v-spacer />
    <!-- <v-row
      justify="center"
      style="max-width: 650px"
    > -->
      <v-text-field
        placeholder="Search..."
        single-line
        :append-icon="mdiMagnify"
        color="primary"
        hide-details
        class="mr-5 d-none d-sm-flex"
        v-model="search"
        @keydown.enter="searchName"
      />
      <v-spacer class="d-flex d-sm-none"></v-spacer>
      <v-text-field
        style="max-width: 30vw"
        v-if="searchOpen"
        autofocus
        placeholder="Search..."
        single-line
        color="primary"
        hide-details
        class="mr-1 d-flex d-sm-none"
        v-model="search"
        @keydown.enter="searchName"
      />
      <v-icon
        class="d-flex d-sm-none mr-0"
        @click="toggleSearchInput"
      >
        {{mdiMagnify}}
      </v-icon>
      <v-icon
        class="mr-0 ml-3"
        @click="toggleDarkTheme"
      >
        {{this.$vuetify.theme.dark ?  mdiWhiteBalanceSunny : mdiBrightness4}}
      </v-icon>
    <!-- </v-row> -->
  </v-app-bar>
</template>

<script>
import { mdiMusicCircleOutline, mdiMagnify, mdiWhiteBalanceSunny, mdiBrightness4 } from '@mdi/js'

export default {
  data () {
    return {
      mdiMusicCircleOutline,
      mdiMagnify,
      mdiWhiteBalanceSunny,
      mdiBrightness4,
      search: '',
      searchOpen: false
    }
  },
  methods: {
    toggleAppDrawer () {
      this.$emit('toggleAppDrawer')
    },
    goToHomePage () {
      this.$router.push('/')
    },
    goToSearchName () {
      this.$router.push(`/search?keyword=${this.search}`)
      // this.$router.go(`/search?keywords=${this.search}`)
    },
    toggleSearchInput () {
      this.searchOpen = !this.searchOpen
    },
    searchName () {
      this.goToSearchName()
      this.search = ''
      this.searchOpen = false
    },
    toggleDarkTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
