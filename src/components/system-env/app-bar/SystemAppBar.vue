<template>
  <v-app-bar
    flat
    color="primary"
    class="x-app-bar"
  >
    <v-app-bar-nav-icon
      icon="mdi-home"
      href="/"
      @click.prevent="$router.push({path: '/'})"
    />
    <v-app-bar-title class="text-right">
      <template v-for="link in links">
        <v-btn
          variant="outlined"
          :href="link.href"
          class="mr-2"
          @click.prevent="$router.push({path: link.href})"
        >
          {{ link.title }}
        </v-btn>
      </template>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script>
const links = [
  {title: 'Skills', href: '/skills'},
  {title: 'Projects', href: '/projects'},
]

export default {
  data() {
    return {
      links,
    }
  }
}
</script>

<style scoped>
.x-app-bar {
  background: transparent !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
  backdrop-filter: blur(20px) !important;
}
</style>
