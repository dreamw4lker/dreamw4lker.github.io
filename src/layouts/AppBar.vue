<template>
  <v-app-bar flat color="primary" class="x-app-bar">
    <v-app-bar-nav-icon
      icon="mdi-home"
      href="/"
    />
    <v-app-bar-title class="text-right">
      <template v-for="link in links">
        <v-btn
          variant="outlined"
          :href="link.href"
          class="mr-2"
        >
          {{ link.title }}
        </v-btn>
      </template>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
const links = [
  {title: 'Skills', href: '/skills'},
  {title: 'Projects', href: '/projects'},
]
</script>

<style scoped>
.x-app-bar {
  background: transparent !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
  backdrop-filter: blur(20px) !important;
}
</style>
