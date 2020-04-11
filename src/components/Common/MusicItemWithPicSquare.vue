<template>
    <v-card
      height="100%"
      @click.stop="$emit('setMusic',id)"
      class="ma-0 cursor-pointer card-hover"
      flat
    >
      <div>

        <!-- cover image -->
        <v-img
        lazy-src="../../assets/default_cover.png"
        min-height="120"
        :src="httpToHttps(imgUrl) +'?param=100y100'"
        ></v-img>

        <!-- music name -->
        <div class="mt-2 body-2 text-truncate text-center">
          {{name}}
        </div>

        <!-- music artist -->
        <div class="caption text-truncate text--secondary text-center" style="max-width: 170px;">
          {{artist}}
        </div>

      </div>
    </v-card>
</template>

<script>
import { mdiPlaylistPlus } from '@mdi/js'
import { httpToHttps } from '../../utils/helper'
export default {
  data () {
    return {
      mdiPlaylistPlus,
      httpToHttps
    }
  },
  props: {
    id: {
      type: Number
    },
    name: {
      type: String
    },
    artist: {
      type: String
    },
    imgUrl: {
      type: String
    },
    index: {
      type: Number,
      default: 0
    },
    maxItem: {
      type: Number,
      default: 9999
    }
  }
}
</script>

<style lang="scss" scoped>
.card-hover{
  transition: .1s ease-in-out;
}
.card-hover:hover{
  box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.2);
}
</style>
