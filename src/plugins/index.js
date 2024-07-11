import {getRouter} from "./router/index.js"
import vuetify from "./vuetify/vuetify.js"
import Particles from "@tsparticles/vue3"
import {loadSlim} from "@tsparticles/slim"

export function registerPlugins(app) {
  let router = getRouter(app)
  app
    .use(vuetify)
    .use(router)
    .use(Particles, {
      init: async engine => {
        await loadSlim(engine)
      }
    })
}
