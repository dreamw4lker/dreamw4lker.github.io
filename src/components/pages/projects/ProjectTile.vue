<template>
  <v-col xs="12" md="6" class="px-2 pb-4">
    <v-card
      class="mx-auto x-card"
    >
      <v-card-title
        class="bg-primary-transparent text-white"
        style="border-bottom: 1px solid rgba(255, 255, 255, 0.2)"
      >
        <div class="d-flex flex-row">
          <v-avatar
            class="mt-2 mr-4"
            style="border-radius: 10px"
            size="56"
            :start="true"
            :image="getAssetUrl(project.icon)"
          />
          <div class="d-flex flex-column">
            <p class="font-weight-bold" style="font-size: 20px">{{ project.name }}</p>
            <p class="text-pre-wrap" style="font-size: 14px">{{ project.description }}</p>
          </div>
        </div>
      </v-card-title>
      <v-card-text class="text-white pa-4">
        <div class="d-flex flex-column">
          <div
            v-for="link in project.links"
            class="d-flex flex-row font-weight-bold align-center pb-4"
          >
            <span class="text-white pl-0" style="min-width: 100px;">{{ link.type }}</span>
            <a
              :href="link.href"
              class="overflow-auto"
              style="color: #66bb6a"
            >{{ link.href }}</a>
          </div>
        </div>
        <p class="font-weight-bold">Main libraries / technologies:</p>
        <ul class="ml-4">
          <template v-for="tech in project.technologies">
            <li>{{ tech }}</li>
          </template>
        </ul>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import {getAssetUrl} from "@/plugins/assets-helpers.js"

export default {
  props: {
    project: Object
  },
  methods: {
    getAssetUrl,
  }
}
</script>

<style scoped>
.bg-primary-transparent {
  background-color: rgba(48, 43, 99, 0.7) !important;
}

.x-card {
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 10px !important;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25) !important;
}
</style>
