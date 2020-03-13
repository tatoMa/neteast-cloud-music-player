import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },
  theme: {
    themes: {
      dark: {
        primary: '#fc5185',
        secondary: '#3a3d44',
        accent: '#43dde6',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      light: {
        primary: '#fc5185',
        secondary: '#f8f8f8',
        accent: '#43dde6',
        error: '#FF5252'
      }
    }
  }
})
