<template>
  <v-col
      :cols="layout?12:3"
    >
    <v-img
      @click="$emit('toggleLayout')"
      v-if="currentTrack"
      class="my-1 pa-0 mx-auto cover-round"
      :class="[paused ? '' : 'cover-rotation' , layout ? 'cover-disk' : '']"
      :src="httpToHttps(currentTrack.al.picUrl)+'?param=400y400'"
      :max-width="layout ? 400 : 94"
      :max-height="layout ? 400 : 94"
      contain
    >
    </v-img>
    <v-img
      @click="$emit('toggleLayout')"
      v-else
      class="my-1 pa-0 mx-auto"
      src="../../assets/default_cover.png"
      :max-width="layout ? 400 : 94"
      :max-height="layout ? 400 : 94"
      contain
    >
    </v-img>
  </v-col>
</template>

<script>
import { httpToHttps } from '../../utils/helper'
export default {
  props: {
    currentTrack: {
      type: Object
    },
    layout: {
      type: Boolean
    },
    paused: {
      type: Boolean
    }
  },
  data () {
    return {
      httpToHttps
    }
  }
}
</script>

<style scoped>
.cover-round{
  /*  position: relative; */
  border-radius: 50%;
}
.cover-disk::after{
  content: '';
    position: absolute;
    border-radius: 50%;
    top: -2%;
    left: -2%;
    width: 104%;
    height: 104%;
    border: 20px solid black;
}
.cover-rotation{
  animation: rotation 15s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
