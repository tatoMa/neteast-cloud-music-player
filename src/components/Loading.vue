<template>
    <!-- Loading progress bar -->
      <v-row
        no-gutters
        class="fill-height"
        align-content="center"
        justify="center"
        v-if="this.loading"
        style="min-height:75vh"
      >
        <v-col cols="8">
          <v-progress-linear
            color="primary accent-2"
            indeterminate
            rounded
            height="8"
          ></v-progress-linear>
        </v-col>
      </v-row>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>
