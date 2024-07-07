<template>
  <v-app>
    <system-app-bar v-if="$route.path !== '/'"/>
    <v-main>
      <router-view :key="timestampKey"/>
    </v-main>
  </v-app>
</template>

<script>
import '@/../styles/systemStyles.scss'
import SystemAppBar from "@/components/system-env/app-bar/SystemAppBar.vue"

export default {
  components: {
    SystemAppBar
  },
  data() {
    return {
      timestampKey: Date.now()
    }
  }
}
</script>
