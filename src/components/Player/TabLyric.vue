<template>
    <div>
      <div v-for="(lrc,index) in getLyricById.split(/[\r\n]/)" :key="index">
      {{lrc}}
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getLyricById: 'player/getLyricById'

    })
  }
}
</script>

<style scoped>

</style>
