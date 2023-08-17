<template>
  <div class="d-flex flex-column mx-auto" style="max-width: 1200px">
    <p class="text-white text-h3 text-center mt-4">Projects</p>

    <v-row class="pt-4">
      <template v-for="project in projects">
        <v-col sm="12" md="6">
          <v-card
            class="mx-auto x-card"
          >
            <v-card-title class="bg-primary-transparent text-white" style="border-bottom: 1px solid rgba(255, 255, 255, 0.2); font-size: ">
              {{ project.name }}
            </v-card-title>
            <v-card-text class="text-white pa-4">
              <p class="text-pre-wrap mb-6" style="font-size: 16px">{{ project.description }}</p>
              <p class="font-weight-bold mb-2">Github link: <a :href="project.link" style="color: #66bb6a">{{ project.link}}</a></p>
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
    </v-row>
  </div>
</template>

<script setup>
const projects = [
  {
    name: 'gitea-webhook-notifier',
    link: 'https://github.com/dreamw4lker/gitea-webhook-notifier',
    description: 'Notify about push events in any Gitea repositories.\nBased on Gitea webhook events.',
    technologies: ['Java 11', 'Maven', 'Thymeleaf']
  },
  {
    name: 'i18n-to-xls',
    link: 'https://github.com/dreamw4lker/i18n-to-xls',
    description: 'Convert JSON i18n strings to XLS-file and vice versa.\nCan be used with vue-i18n or similar libraries.',
    technologies: ['Java 11', 'Maven', 'GSON', 'Apache POI'],
  }
]
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
