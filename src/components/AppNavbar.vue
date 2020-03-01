<template>
  <!-- navbar -->
  <v-app-bar
    app
    color="secondary"
    dark
    clipped-left
    class="px-5"
  >
    <v-app-bar-nav-icon @click.stop="toggleAppDrawer" />
    <div class="d-flex align-center cursor-pointer" @click="goToHomePage">
      <v-btn icon class="mr-2">
        <v-icon color="#fc5185" large>mdi-music-circle-outline</v-icon>
      </v-btn>
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
        v-model="search"
        @keydown.enter="searchName"
      />
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    toggleAppDrawer () {
      this.$store.commit('toggleAppDrawer')
    },
    goToHomePage () {
      this.$router.push('/')
    },
    goToSearchName () {
      this.$router.push(`/search?keywords=${this.search}`)
    },
    searchName () {
      this.goToSearchName()
      this.search = ''
    }
  }
}
</script>
