<template>
  <v-app-bar flat color="primary">
    <v-app-bar-title class="text-right">
      <template v-for="link in links">
        <v-btn
          variant="text"
          :href="link.href"
        >
          {{ link.title }}
        </v-btn>
      </template>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
const links = [
  {title: 'Home', href: '/'},
  {title: 'About', href: '/about'},
  {title: 'Projects'},
  {title: 'Contacts'}
]
</script>
