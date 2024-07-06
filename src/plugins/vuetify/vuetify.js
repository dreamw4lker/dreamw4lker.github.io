import '@mdi/font/css/materialdesignicons.css'
import '@/../styles/main.scss'

import {createVuetify} from 'vuetify'
import {mdi} from "vuetify/iconsets/mdi"
import {ru} from "vuetify/locale"
import {systemIcons} from "@/components/system-env/icons/systemIcons.ts"
import {systemTheme} from "./system-theme.js"

export default createVuetify({
  locale: {
    locale: 'ru',
    fallback: 'en',
    messages: {ru}
  },
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
      systemIcons
    }
  },
  theme: {
    defaultTheme: 'systemTheme',
    themes: {
      systemTheme
    }
  },
})
