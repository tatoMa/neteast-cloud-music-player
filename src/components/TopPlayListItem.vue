<template>
  <v-card class="card-hover" color="secondary">
    <v-img
      :src="item.coverImgUrl+'?param=300y300'"
      class="white--text align-end image"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="20vh"
      @click.stop="$emit('goToPlaylist',item)"
    >
      <v-card-title class="subtitle-1" v-text="item.name"></v-card-title>
    </v-img>

    <v-card-actions>
      <v-avatar
        size="36">
        <img
          :src="item.creator.avatarUrl"
          :alt="item.creator.nickname"
        >
      </v-avatar>
      <span class="caption ml-1 d-inline-block text-truncate" style="max-width: 14ch">{{item.creator.nickname}}</span>
      <v-spacer></v-spacer>
      <v-chip
        v-for="(tag,i) in item.tags"
        :key="i"
        small
        class="mx-1"
        color="primary"
      >
        {{tag}}
      </v-chip>
      <!-- <v-btn icon @click.stop="$emit('goToPlaylist',item)">
        <v-icon color="primary">{{mdiPlayCircleOutline}}</v-icon>
      </v-btn>
      <v-spacer></v-spacer> -->

      <!-- <v-btn icon>
        <v-icon>{{mdiHeartOutline}}</v-icon>
      </v-btn> -->

      <!-- <v-btn icon>
        <v-icon>{{mdiPlaylistMusicOutline}}</v-icon>
      </v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
import { mdiHeartOutline, mdiPlayCircleOutline, mdiPlaylistMusicOutline } from '@mdi/js'

export default {
  props: {
    item: {
      type: Object
    }
  },
  data () {
    return {
      mdiHeartOutline,
      mdiPlayCircleOutline,
      mdiPlaylistMusicOutline
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
