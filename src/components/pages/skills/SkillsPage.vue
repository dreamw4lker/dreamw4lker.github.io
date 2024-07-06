<template>
  <div class="d-flex flex-column mx-auto" style="max-width: 1200px">
    <p class="text-white text-h3 text-center mt-4">Skills and experience</p>
    <v-row class="pt-4">
      <template v-for="skill in skills">
        <v-col sm="12" md="4">
          <v-card
            class="mx-auto x-card"
          >
            <v-img
              class="align-end text-white"
              :class="skill.backgroundClass"
              height="200"
              :src="skill.background"
              cover
            >
              <v-card-title class="bg-primary-transparent">
                {{ skill.type }}
              </v-card-title>
            </v-img>

            <v-card-text>
              <v-expansion-panels variant="accordion" multiple>
                <template v-for="tech in skill.techs">
                  <v-expansion-panel
                    elevation="0"
                    style="background-color: transparent !important; color: white"
                  >
                    <v-expansion-panel-title v-slot="{ open }" class="px-2">
                      <span class="font-weight-bold" style="font-size: 16px; line-height: 1.5">
                        {{ tech.name }}
                      </span>
                      <v-spacer/>
                      <v-rating
                        :model-value="tech.rating"
                        color="yellow-darken-3"
                        half-increments
                        disabled
                        density="compact"
                        class="pr-2"
                      />
                    </v-expansion-panel-title>

                    <v-expansion-panel-text>
                      {{ tech.info }}
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </template>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>

    <!--<v-divider color="white" class="mt-8 mb-4"/>
    <p class="text-white text-h3 text-center mt-4">In progress of studying</p>
    <v-row class="pt-4 justify-center">
      <v-col sm="12" md="4">
        <v-card
          class="mx-auto x-card"
        >
          <v-img
            class="align-end text-white"
            :class="inProgress.backgroundClass"
            height="200"
            :src="inProgress.background"
            cover
          />

          <v-card-text class="text-center mt-2">
            <template v-for="tech in inProgress.techs">
              <p class="font-weight-bold mb-2" style="color: white; font-size: 16px">{{ tech.name }}</p>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>-->
  </div>
</template>

<script>
export default {

}
</script>

<script setup>
function getAssetsPrefix() {
  return import.meta.env.PROD ? '' : '/public'
}

const skills = [
  {
    type: 'Frontend: JS environment',
    background: `${getAssetsPrefix()}/assets/img/frontend.png`,
    techs: [
      {name: 'JavaScript', rating: 5, info: 'Around 5 years of experience. The main language used in frontend tasks'},
      {name: 'Vue 2/3', rating: 5, info: '~4 years of experience. The main framework for modern projects, generally used with Vuetify UI components'},
      {name: 'Vuetify', rating: 5, info: '~4 years of experience. Used as main UI library in most of the modern projects. Successfully migrated from Vuetify 1.X to Vuetify 2.X and from Vuetify 2.X to Vuetify 3.X. One of the top answerers in `vuetify.js` tag at StackOverflow'},
      {name: 'jQuery', rating: 3.5, info: '~2 years of experience. Used in pre-Vue projects in combination with Wicket or Thymeleaf frameworks'},
    ]
  },
  {
    type: 'Backend: Java environment',
    background: `${getAssetsPrefix()}/assets/img/backend.png`,
    techs: [
      {name: 'Java 8/11/17/21', rating: 5, info: 'Around 7 years of experience. The main language used in backend tasks. Also have some experience in Java 6 and 7'},
      {name: 'Spring', rating: 4.5, info: '~6 years of experience. Application framework for the most projects'},
      {name: 'Hibernate', rating: 4, info: '~6 years of experience. The main ORM for the most projects'},
      {name: 'jOOQ', rating: 3, info: '~2 years of production experience. Used in one project as an alternative of Hibernate'},
      {name: 'JasperReports', rating: 4, info: '~5 years of production experience. Used in every project that needs template generation (reports, printing forms, ...)'},
      {name: 'Apache Wicket', rating: 3, info: '~4 years of periodically experience in legacy, but still supported projects. Superseded by Vue environment in modern projects'},
      {name: 'Thymeleaf', rating: 2, info: '~2 years of experience. Used in some pre-Vue projects as an alternative of Wicket'},
    ]
  },
  {
    type: 'Databases',
    background: `${getAssetsPrefix()}/assets/img/databases.png`,
    backgroundClass: 'object-position-top',
    techs: [
      {name: 'PostgreSQL', rating: 5, info: 'More than 5 years of production experience. The main DBMS used in projects. Writing basic queries, working with views, functions, etc'},
      {name: 'Oracle', rating: 4, info: '~3 years of experience, mainly during the process of Oracle -> Postgres migration in some projects'},
      {name: 'Apache Derby', rating: 4, info: '~3 years of experience. Used in internal and low-load projects'},
      {name: 'H2', rating: 3, info: '~1.5 years of production experience. Used in the only one project, superseded by Apache Derby because of insufficient performance'},
      {name: 'MongoDB', rating: 2, info: 'Basically writing small queries to grab data from external systems'},
    ]
  },
  {
    type: 'VCS',
    background: `${getAssetsPrefix()}/assets/img/vcs.png`,
    backgroundClass: 'object-position-top',
    techs: [
      {name: 'Git', rating: 5, info: 'More than 4 years of production experience in modern projects'},
      {name: 'Mercurial', rating: 5, info: 'More than 5 years of production experience in legacy projects'},
    ]
  },
  {
    type: 'CI',
    background: `${getAssetsPrefix()}/assets/img/ci.png`,
    backgroundClass: 'object-position-top',
    techs: [
      {name: 'Jenkins', rating: 4, info: '~6 years of experience, mainly with small configuration changes of CI tasks'},
      {name: 'GitLab', rating: 3, info: 'Some experience in third-party organization'},
    ]
  },
  {
    type: '...etc',
    background: `${getAssetsPrefix()}/assets/img/etc_skills.png`,
    backgroundClass: 'object-position-bottom',
    techs: [
      {name: 'Apache Cordova', rating: 4, info: '~3 years of experience in Android and iOS mobile development, starting from cordova-android 8.1.0. Used for packing Vue projects into mobile apps. Two successfully published projects in PlayMarket and AppStore'},
      {name: 'Modbus RTU/TCP', rating: 4, info: '~3 years of periodically experience, used for communication with some remote controllers (i.e. diesel-generator controllers, electricity meters, discrete I/O controllers, etc)'},
      {name: 'Printer languages: TSPL, EPL, ZPL', rating: 4, info: '~3 years of periodically experience to communicate with barcode label printers (TSC, Eltron, Zebra and compatible printers). Making barcode label templates to use with some medical and laboratory systems'},
      {name: 'JavaFX', rating: 3, info: '~2 years of experience in the only one project written on Java 8'},
      {name: 'Swing', rating: 2, info: 'Some experience in supporting legacy system written on Java 6/7 with Swing GUI'},
    ]
  },
]

const inProgress = {
  background: `${getAssetsPrefix()}/assets/img/in_progress.png`,
  techs: [
    {name: 'TypeScript'},
  ]
}
</script>

<style>
.v-img.object-position-top .v-img__img {
  object-position: top !important;
}

.v-img.object-position-bottom .v-img__img {
  object-position: bottom !important;
}

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
