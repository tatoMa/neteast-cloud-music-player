<template>
  <v-card class="card-hover" color="secondary" v-ripple>

    <!-- cover image -->
    <v-img
      :src="httpToHttps(item.coverImgUrl)+'?param=300y300'"
      class="white--text align-end image"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="20vh"
      @click.stop="$emit('goToPlaylist',item)"
    >
      <v-card-title class="subtitle-1" v-text="item.name"></v-card-title>
    </v-img><!-- cover image -->

    <!-- creater info and tags of music types -->
    <v-card-actions>
      <v-avatar
        size="36">
        <img
          :src="httpToHttps(item.creator.avatarUrl)+'?param=36y36'"
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
    </v-card-actions><!-- creater info and tags of music types -->

  </v-card>
</template>

<script>
import { mdiHeartOutline, mdiPlayCircleOutline, mdiPlaylistMusicOutline } from '@mdi/js'
import { httpToHttps } from '../utils/helper'

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
      mdiPlaylistMusicOutline,
      httpToHttps
    }
  }
}
</script>
