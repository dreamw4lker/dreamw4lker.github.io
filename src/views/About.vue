<template>
  <div class="d-flex flex-column mx-auto" style="max-width: 1200px">
    <p class="text-white text-h3 text-center mt-4">Skills</p>
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

    <v-divider color="white" class="mt-8 mb-4"/>
    <p class="text-white text-h3 text-center mt-4">In progress</p>
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
    </v-row>
  </div>
</template>

<script setup>
const skills = [
  {
    type: 'Frontend: langs, frameworks, libs',
    background: '/src/assets/img/frontend.png',
    techs: [
      {name: 'JavaScript', rating: 5, info: 'Around 5 years of experience. The main language used in frontend tasks'},
      {name: 'Vue 2', rating: 5, info: 'TODO'},
      {name: 'Vuetify', rating: 5, info: 'TODO'},
      {name: 'jQuery', rating: 3.5, info: 'TODO'},
      {name: 'Apache Wicket', rating: 3, info: 'TODO'},
      {name: 'Thymeleaf', rating: 2, info: 'TODO'},
    ]
  },
  {
    type: 'Backend',
    background: '/src/assets/img/backend.png',
    techs: [
      {name: 'Java 8/11', rating: 5, info: 'Around 6 years of experience. The main language used in backend tasks. Also have some experience in Java 6, 7 and 17'},
      {name: 'Spring', rating: 4.5, info: 'TODO'},
      {name: 'Hibernate', rating: 4, info: 'TODO'},
      {name: 'jOOQ', rating: 4, info: 'TODO'},
    ]
  },
  {
    type: 'Databases',
    background: '/src/assets/img/databases.png',
    backgroundClass: 'object-position-top',
    techs: [
      {name: 'PostgreSQL', rating: 5, info: 'TODO'},
      {name: 'Oracle', rating: 4, info: 'TODO'},
      {name: 'Apache Derby', rating: 4, info: '~3 years of experience. Used in internal and low-load projects'},
      {name: 'H2', rating: 3, info: '~1.5 years of production experience. Used in the only one project, superseded by Apache Derby because of insufficient performance'},
      {name: 'MongoDB', rating: 2, info: 'TODO'},
    ]
  },
  {
    type: 'VCS',
    background: '/src/assets/img/vcs.png',
    backgroundClass: 'object-position-top',
    techs: [
      {name: 'Git', rating: 5, info: 'More than 4 years of production experience'},
      {name: 'Mercurial', rating: 5, info: 'More than 5 years of production experience'},
    ]
  },
  {
    type: 'CI',
    background: '/src/assets/img/ci.png',
    backgroundClass: 'object-position-top',
    techs: [
      {name: 'Jenkins', rating: 4, info: 'TODO'},
      {name: 'GitLab', rating: 3, info: 'TODO'},
    ]
  },
  {
    type: '...etc',
    background: '/src/assets/img/etc_skills.png',
    backgroundClass: 'object-position-bottom',
    techs: [
      {name: 'Apache Cordova', rating: 4, info: 'TODO'},
      {name: 'Modbus RTU/TCP', rating: 4, info: 'TODO'},
      {name: 'Printer languages: TSPL, EPL, ZPL', rating: 4, info: 'TODO'},
      {name: 'JavaFX', rating: 3, info: 'TODO'},
      {name: 'Swing', rating: 2, info: 'TODO'},
    ]
  },
]

const inProgress = {
  background: '/src/assets/img/in_progress.png',
  techs: [
    {name: 'Vue3 + Vuetify3'},
    {name: 'Java 17'},
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
  background-color: rgba(48, 43, 99, 0.5) !important;
}

.x-card {
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 10px !important;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25) !important;
}
</style>
