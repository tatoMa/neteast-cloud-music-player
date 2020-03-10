<template>
  <v-list dense shaped>
    <v-list-item-group v-model="item" color="primary">

    <!-- user avatar and info -->
    <v-list-item disabled>
      <v-list-item-avatar size=72 class="mx-auto">
        <img src="../assets/logo.png">
      </v-list-item-avatar>
    </v-list-item>
    <v-list-item disabled>
      <v-list-item-content>
        <v-list-item-title class="text-center">tato music</v-list-item-title>
        <v-list-item-subtitle class="text-center">make your life colorful</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>

    <!-- navigation items -->
    <v-list-item
      v-for="item in items"
      :key="item.text"
      link
      :to="item.url"
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
</template>

<script>
export default {
  data () {
    return {
      item: 2,
      items: [
        { icon: 'mdi-fire', text: 'Top Music', url: '/' },
        { icon: 'mdi-format-list-bulleted-square', text: 'Top Playlists', url: 'topplaylists' }
        // { icon: 'mdi-account-multiple', text: 'Top Artists', url: 'topartist' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
