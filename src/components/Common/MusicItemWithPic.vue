<template>
  <v-col
    v-ripple
    :key="item.id"
    cols="12"
    class="px-0 py-0 my-1"
    @click.stop="$emit('setMusic',item)"
    v-if="index < maxItem"
  >
    <v-card
      class="my-0 cursor-pointer card-hover"
      color="secondary"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <div class="d-flex flex-column align-start justify-center">

          <!-- music name -->
          <div class="subtitle-1 ml-4">
            {{item.name}}
          </div>

          <!-- music artist -->
          <div class="caption pb-1 text-truncate ml-4 text--secondary" style="max-width: 170px;">
            {{item.ar[0].name}}
          </div>

        </div>

        <v-avatar
          class="ma-1"
          size="92"
          tile
        >
          <v-img
          :src="httpToHttps(this.item.al.picUrl) +'?param=100y100'"
          ></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-col>
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
    item: {
      type: Object
    },
    index: {
      type: Number
    },
    maxItem: {
      type: Number
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
