<template>
    <!-- Loading progress bar -->
      <!-- <v-row
        no-gutters
        class="fill-height"
        align-content="center"
        justify="center"
        v-if="this.loading"
        style="min-height:65vh"
      >
        <v-col cols="8"> -->
          <v-progress-linear
          class="loading-center"
            color="primary accent-2"
            indeterminate
            loading
            rounded
            height="8"
          ></v-progress-linear>
        <!-- </v-col>
      </v-row> -->
</template>

<script>
export default {
}
</script>
<style scoped>
.loading-center{
  position: absolute;
  width: 84vw;
  top: 40vh;
  left: 7vw;
}
</style>
