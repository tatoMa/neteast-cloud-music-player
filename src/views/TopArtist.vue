<template>
    <div>
top artist
    </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('artist/fetchTopArtist')
  }
}
</script>

<style scoped>

</style>
