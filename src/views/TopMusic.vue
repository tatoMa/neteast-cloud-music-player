<template>
  <v-container
        class=" pa-0 pa-sm-3 ma-0 pb-12 mb-12"
        fluid
  >
      <!-- <v-card> -->
        <v-tabs
          color="primary"
          centered
        >
          <v-tab>New</v-tab>
          <v-tab>Hot</v-tab>
          <v-tab>Origional</v-tab>

          <v-tab-item
            v-for="n in 3"
            :key="n"
          >
            <TopMusicById :id='n-1'></TopMusicById>
          </v-tab-item>
        </v-tabs>
      <!-- </v-card> -->
  </v-container>
</template>

<script>
import TopMusicById from '../components/TopMusicById'
export default {
  name: 'HotPlayLists',
  components: {
    TopMusicById
  }
  // data () {
  //   return {
  //     // data: [],
  //     // search: ''
  //   }
  // },
  // computed: {
  //   ...mapGetters({
  //     getNewMusicLists: 'getNewMusicLists',
  //     getTopMusicListsById: 'getTopMusicListsById'
  //   })
  // },
  // mounted () {
  //   this.$store.commit('setNewMusicLists')
  //   this.$store.commit('setTopMusicListsById', 0)
  //   // axios.get(`${process.env.VUE_APP_baseURL}/top/list?idx=1`, { withCredentials: true })
  //   //   .then((response) => console.log(response.data))
  // },
  // methods: {
  //   setMusic (id) {
  //     this.$store.commit('player/togglePaused', false)
  //     this.$store.commit('player/setMusicDetailByIdFromSearch', id)
  //     this.$store.commit('player/setMusicUrlsListById')
  //   }
  // }
}
</script>
<style lang="scss" scoped>
// img{
//   max-width : 60px;
// }
// .image{
//   cursor: pointer;
//   zoom: 1;
//   transition: 200ms ease-in-out;
// }
// .card-hover:hover .image{
//   transform: translateY(-8px)
// }
// .max-ch{
//   max-width: 20ch;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }
</style>
