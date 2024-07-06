<template>
  <v-app>
    <v-main>
      <router-view :key="timestampKey"/>
    </v-main>
  </v-app>
</template>

<script>
import '@/../styles/systemStyles.scss'

export default {
  data() {
    return {
      timestampKey: Date.now()
    }
  }
}
</script>
