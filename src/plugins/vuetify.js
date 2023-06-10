/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import {mdi} from "vuetify/lib/iconsets/mdi"
import {customIcons} from "@/plugins/icons/custom-icons"

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#302b63',
          secondary: '#FFFFFF',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
      custom: customIcons,
    }
  }
})
