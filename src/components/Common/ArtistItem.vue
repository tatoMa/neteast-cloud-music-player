<template>
  <v-card
    class="mx-auto mb-3"
    color="secondary darken-1"
    :to="{ path: '/artist', query: { id: id }}"
    ripple
  >
    <v-img
      class="white--text align-end"
      height="10rem"
      width="100%"
      :src="picUrl + '?param=400y400'"
      :alt="name"
    >
    </v-img>
    <v-card-title class="pb-0 pt-1">
      {{name}}
      <span class="subtitle-2 pl-2">{{alias}}</span>
      </v-card-title>
    <v-card-text>Music: {{musicSize}} - Albums: {{albumSize}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    id: {
      type: Number
    },
    name: {
      type: String
    },
    alias: {
      type: String
    },
    picUrl: {
      type: String
    },
    musicSize: {
      type: Number
    },
    albumSize: {
      type: Number
    }
  }
}
</script>
