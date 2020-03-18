<template>
    <div>
      <div v-for="(lrc,index) in lyric" :key="index">
      {{lrc}}
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
      const lyric = this.getLyricById.split(/[\r\n]/).map(item => {
        return item.replace(/\[.*?\]/g, '')
      })
      return lyric
    }
  }
}
</script>

<style scoped>

</style>
