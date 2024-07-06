import {loadFonts} from './webfontloader'
import Particles from "vue3-particles"
import {getRouter} from "./router/index.js"
import vuetify from "./vuetify/vuetify.js"

export function registerPlugins(app) {
  let router = getRouter(app)
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(Particles)
}
