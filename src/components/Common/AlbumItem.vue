<template>
  <v-card
    class="mx-auto mb-3"
    color="secondary darken-1"
  >
    <v-list-item class="px-2">
      <v-list-item-avatar size="48">
        <v-img
          :src="ArtistPicUrl + '?param=50y50'"
        ></v-img>
      </v-list-item-avatar>
      <v-list-item-content class="py-0">
        <v-list-item-title class="headline">{{name}}</v-list-item-title>
        <v-list-item-subtitle>{{artistName}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      :src="picUrl + '?param=400y400'"
      height="194"
    ></v-img>

    <v-card-text class="py-2 px-5">
      <v-row class="align-center">

      <div>
        {{company}} {{subType?' - ':''}} {{subType}}
      </div>
      <v-spacer/>
      <v-chip
        small=""
      >
        {{type}}
      </v-chip>
      </v-row>

    </v-card-text>

    <v-card-actions class="py-0 pb-2">
      <v-btn
        color="primary"
        block
        rounded
        @click="test(id)"
      >
        Play All <span class="inline-block mx-2 font-weight-bold title">{{size}}</span> Songs
      </v-btn>
    </v-card-actions>
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
    artistName: {
      type: String
    },
    picUrl: {
      type: String
    },
    ArtistPicUrl: {
      type: String
    },
    company: {
      type: String
    },
    subType: {
      type: String
    },
    type: {
      type: String
    },
    size: {
      type: Number
    }
  },
  methods: {
    test (id) {
      this.$store.dispatch('album/FetchAlbumById', id)
    }
  }
}
</script>

<style scoped>
</style>
