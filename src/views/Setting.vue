<template>
  <v-container class="pt-0">
    <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`"></v-switch>
    <v-switch v-model="switch2" :label="`Switch 2: ${switch2.toString()}`"></v-switch>
  </v-container>
</template>

<script>
// import Loading from '../components/Loading'
// import MusicItem from '../components/Common/MusicItem'
// import { mapGetters } from 'vuex'
export default {
  name: 'Setting',
  components: { },
  data () {
    return {
      switch1: true,
      switch2: false
    }
  }
}
</script>
