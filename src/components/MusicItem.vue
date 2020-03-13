<template>
  <v-list-item
    @click.stop="$emit('setMusic',id)"
    >
    <v-list-item-icon>
        <v-icon>{{mdiPlaylistPlus}}</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
        <v-list-item-title v-text="artist+' - '+name"></v-list-item-title>
    </v-list-item-content>
    <v-list-item-avatar>
        <v-icon>{{mdiPlayCircleOutline}}</v-icon>
    </v-list-item-avatar>
  </v-list-item>
</template>

<script>
import { mdiPlaylistPlus, mdiPlayCircleOutline } from '@mdi/js'

export default {
  data () {
    return {
      mdiPlaylistPlus,
      mdiPlayCircleOutline
    }
  },
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
