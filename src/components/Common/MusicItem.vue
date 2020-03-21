<template>
  <div>
  <v-list-item
    @click.stop="$emit('setMusic',id)"
    >
    <!-- <v-list-item-icon>
        <v-icon>{{mdiPlaylistPlus}}</v-icon>
    </v-list-item-icon> -->
    <v-list-item-content>
        <v-list-item-title v-text="artist+' - '+name"></v-list-item-title>
    </v-list-item-content>
    <v-list-item-icon>
        <v-icon size="32">{{mdiPlayCircleOutline}}</v-icon>
    </v-list-item-icon>
  </v-list-item>
  <v-divider></v-divider>
  </div>
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
