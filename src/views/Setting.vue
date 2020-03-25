<template>
  <v-container class="pt-0">
    <v-row class="text-center">
      <v-col cols="12" class="pt-0">
        <v-card
          class="mx-auto"
        >
          <v-img
            src="../assets/disk_half.png"
            height="200px"
          >
            <v-row class="fill-height">
              <v-card-title class="pt-12 mx-auto">
                <div class="display-1 pt-8">tato music</div>
              </v-card-title>
            </v-row>
          </v-img>

          <v-list two-line>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Theme color</v-list-item-title>
                <v-list-item-subtitle>Select your favorite color</v-list-item-subtitle>
              </v-list-item-content>
               <v-list-item-icon>
                <v-icon>{{mdiPalette}}</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-divider></v-divider>
            <v-list-item style="min-height:48px">
              <v-btn color="#fc5185" block @click="setPrimaryColor('#fc5185')">Pinky pink</v-btn>
            </v-list-item>
            <v-list-item style="min-height:48px">
              <v-btn color="#2f89fc" block @click="setPrimaryColor('#2f89fc')">Sky Blue</v-btn>
            </v-list-item>
            <v-list-item style="min-height:48px">
              <v-btn color="#107a8b" block @click="setPrimaryColor('#107a8b')">grass green</v-btn>
            </v-list-item>
            <v-list-item style="min-height:48px">
              <v-btn color="#d72323" block @click="setPrimaryColor('#d72323')">blood red</v-btn>
            </v-list-item>
            <v-list-item style="min-height:48px">
              <v-btn color="#f3f169" block @click="setPrimaryColor('#f3f169')">punk yellow</v-btn>
            </v-list-item>

          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiPalette } from '@mdi/js'
export default {
  name: 'Setting',
  components: {

  },
  data () {
    return {
      mdiPalette
    }
  },
  methods: {
    setPrimaryColor (color) {
      this.$vuetify.theme.themes.dark.primary = color
      this.$vuetify.theme.themes.light.primary = color
    }
  }
}
</script>
