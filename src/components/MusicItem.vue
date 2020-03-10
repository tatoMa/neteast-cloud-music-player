<template>
  <v-list-item
    @click.stop="$emit('setMusic',id)"
    >
    <v-list-item-icon>
        <v-icon>mdi-playlist-plus</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
        <v-list-item-title v-text="artist+' - '+name"></v-list-item-title>
    </v-list-item-content>
    <v-list-item-avatar>
        <v-icon>mdi-play-circle-outline</v-icon>
    </v-list-item-avatar>
  </v-list-item>
</template>

<script>
export default {
  props: {
    id: {
      type: Number
    },
    artist: {
      type: String
    },
    name: {
      type: String
    }
  }
}
</script>
