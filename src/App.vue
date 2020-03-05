<template>
  <v-app>
    <!-- <app-drawer :appDrawerProp="appDrawer" @toggleAppDrawer="toggleAppDrawer"/> -->
    <!-- app drawer -->
    <v-navigation-drawer
      v-model="appDrawer"
      app
      clipped
    >
      <v-list dense shaped>
        <v-list-item-group v-model="item" color="primary">

        <!-- user avatar and info -->
        <v-list-item disabled>
          <v-list-item-avatar size=72 class="mx-auto">
            <img src="https://randomuser.me/api/portraits/men/97.jpg">
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item disabled>
          <v-list-item-content>
            <v-list-item-title class="text-center">Jane Smith</v-list-item-title>
            <v-list-item-subtitle class="text-center">Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <!-- navigation items -->
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <!-- subcriptions -->
        <!-- <v-subheader class="mt-4 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-item
            v-for="item in items2"
            :key="item.text"
            link
          >
            <v-list-item-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              >
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
        <v-divider></v-divider> -->
        <v-spacer></v-spacer>
        <!-- bottom buttons -->
        <v-list-item
          class="mt-4"
          link
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Custom Playlist</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Setting</v-list-item-title>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <app-navbar @toggleAppDrawer="toggleAppDrawer"/>
    <v-content>
    <!-- <a @click="appDrawer = !appDrawer"> click </a> -->
      <router-view></router-view>
    </v-content>
    <app-bottom-player/>
  </v-app>
</template>

<script>
// import { mapGetters } from 'vuex'
// import appDrawer from './components/AppDrawer'
import appNavbar from './components/AppNavbar'
import appBottomPlayer from './components/AppBottomPlayer'
export default {
  name: 'App',
  components: {
    // appDrawer,
    appNavbar,
    appBottomPlayer
  },
  data () {
    return {
      appDrawer: false,
      item: 2,
      items: [
        { icon: 'mdi-fire', text: 'Playlist' },
        { icon: 'mdi-playlist-check', text: 'Subscriptions' },
        { icon: 'mdi-history', text: 'History' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ]
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
.v-messages{
  min-height: 0px !important
}
</style>
