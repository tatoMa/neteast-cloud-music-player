<template>
  <div class="mx-auto max-ch">
    <span
      class="subtitle-2 d-sm-block"
      v-if="track"
    >
      {{track.name}}
    </span>
    <span
      class="subtitle-2 d-sm-block"
      v-else
    >
      tato
    </span>
    <span class="caption d-sm-block" v-if="track">{{track.ar[0].name}}</span>
    <span class="caption d-sm-block" v-else> Cloud Music player </span>
  </div>
</template>

<script>
export default {
  props: {
    track: {
      type: Object
    }
  }
}
</script>
<style scoped>
.max-ch{
  max-width: 18ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
