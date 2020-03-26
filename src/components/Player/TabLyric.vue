<template>
    <div class="headline mb-2 text-center">Lyric:
      <div v-if="!lyric">No lyric found...</div>
      <div v-else>
        <div v-for="(lrc,index) in lyric" :key="index">
        {{lrc}}
      </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      lyricData: []
    }
  },
  computed: {
    ...mapGetters({
      getLyricById: 'player/getLyricById'
    }),
    lyric () {
      let lyric = ''
      if (this.getLyricById) {
        lyric = this.getLyricById.split(/[\r\n]/).map(item => {
          return item.replace(/\[.*?\]/g, '')
        })
      }
      return lyric
    }
  }
}
</script>

<style scoped>
</style>
