<template>
  <div class="d-flex flex-column mx-auto" style="max-width: 1200px">
    <p class="text-white text-h3 text-center mt-4">Projects</p>
    <p class="text-grey-lighten-2 text-h6 text-center mt-4">Open source</p>

    <v-row class="pt-4">
      <template v-for="project in projectsOpenSource">
        <project-tile :project="project"/>
      </template>
    </v-row>

    <p class="text-grey-lighten-2 text-h6 text-center mt-4">Commercial, publicly available</p>
    <v-row class="pt-4">
      <template v-for="project in projectsCommercial">
        <project-tile :project="project"/>
      </template>
    </v-row>
  </div>
</template>

<script>
import ProjectTile from "@/components/pages/projects/ProjectTile.vue"

const projectsOpenSource = [
  {
    name: 'gitea-webhook-notifier',
    links: [
      {
        type: 'Github link',
        href: 'https://github.com/dreamw4lker/gitea-webhook-notifier'
      }
    ],
    description: 'Notify about push events in any Gitea repositories.\nBased on Gitea webhook events.',
    technologies: ['Java 11', 'Maven', 'Thymeleaf']
  },
  {
    name: 'i18n-to-xls',
    links: [
      {
        type: 'Github link',
        href: 'https://github.com/dreamw4lker/i18n-to-xls',
      }
    ],
    description: 'Convert JSON i18n strings to XLS-file and vice versa.\nCan be used with vue-i18n or similar libraries.',
    technologies: ['Java 11', 'Maven', 'GSON', 'Apache POI'],
  }
]

const projectsCommercial = [
  {
    name: 'Ave-Medico',
    links: [
      {
        type: 'PlayMarket',
        href: 'https://play.google.com/store/apps/details?id=ru.lynxsoft.avemedico.mobile',
      },
      {
        type: 'AppStore',
        href: 'https://apps.apple.com/us/app/id6477989585'
      },
      {
        type: 'RuStore',
        href: 'https://rustore.ru/catalog/app/ru.lynxsoft.avemedico.mobile'
      }
    ],
    description: 'A mobile application that allows to make an appointment to a doctor and see the history of your previous visits.',
    technologies: ['Apache Cordova', 'Vue 2', 'Vuetify.js']
  },
  {
    name: 'Ovum Lab',
    links: [
      {
        type: 'PlayMarket',
        href: 'https://play.google.com/store/apps/details?id=ru.lynxsoft.ovum.mobile',
      },
      {
        type: 'AppStore',
        href: 'https://apps.apple.com/app/laboratoriya-ovum/id1504379583'
      },
      {
        type: 'RuStore',
        href: 'https://rustore.ru/catalog/app/ru.lynxsoft.ovum.mobile'
      }
    ],
    description: 'A mobile application that allows to see the history of your visits to the laboratory, download and view the results of your tests over time.',
    technologies: ['Apache Cordova', 'Vue 2', 'Vuetify.js']
  },
  {
    name: 'Janti',
    links: [
      {
        type: 'AppStore',
        href: 'https://apps.apple.com/ru/app/%D0%BC%D0%BF-janti/id1495735394'
      },
      {
        type: 'RuStore',
        href: 'https://rustore.ru/catalog/app/ru.janti.mobile'
      }
    ],
    description: 'A mobile application that allows to monitor road transport, build a passed routes and some technical reports.',
    technologies: ['Apache Cordova', 'Vue 2', 'JavaScript', 'OpenLayers']
  },
]

export default {
  components: {
    ProjectTile
  },
  data() {
    return {
      projectsOpenSource,
      projectsCommercial
    }
  }
}
</script>

<style scoped>

</style>
