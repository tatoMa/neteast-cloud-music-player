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
      class="my-0"
      color="secondary"
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <div class="d-flex flex-column align-start justify-center">
          <v-card-title
            class="subtitle-1 max-ch pt-0"
            v-text="item.name"
          ></v-card-title>

          <v-card-subtitle class="caption pb-1" v-text="item.ar[0].name"></v-card-subtitle>
          <v-btn small depressed rounded class="ml-3" color="primary" @click.stop="">
            <v-icon>mdi-playlist-plus</v-icon>
          </v-btn>
        </div>

        <v-avatar
          class="ma-1"
          size="92"
          tile
        >
          <v-img
          :src="item.al.picUrl+'?param=100y100'"
          :lazy-src="item.al.picUrl+'?param=30y30'"
          ></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
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
.max-ch{
  max-width: 26ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
