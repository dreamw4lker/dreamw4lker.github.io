<template>
  <div class="d-flex mx-auto" style="max-width: 1200px">
    <v-row class="pt-4">
      <template v-for="skill in skills">
        <v-col sm="12" md="4">
          <v-card
            class="mx-auto"
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
                  >
                    <v-expansion-panel-title v-slot="{ open }" class="px-2">
                  <span class="font-weight-bold" style="font-size: 16px">
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
  </div>
</template>

<script setup>
const skills = [
  {
    type: 'Frontend',
    background: '/src/assets/img/frontend.png',
    techs: [
      {name: 'JavaScript', rating: 5, info: 'TODO'},
      {name: 'Vue 2', rating: 5, info: 'TODO'},
      {name: 'Vuetify', rating: 5, info: 'TODO'},
      {name: 'Apache Wicket', rating: 3, info: 'TODO'},
      {name: 'Thymeleaf', rating: 3, info: 'TODO'},
    ]
  },
  {
    type: 'Backend',
    background: '/src/assets/img/backend.png',
    techs: [
      {name: 'Java 8/11', rating: 5, info: 'TODO'},
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
      {name: 'Apache Derby', rating: 4, info: 'TODO'},
      {name: 'H2', rating: 3, info: 'TODO'},
      {name: 'MongoDB', rating: 2, info: 'TODO'},
    ]
  },
  {
    type: 'VCS',
    background: '/src/assets/img/databases.png',
    backgroundClass: 'object-position-top',
    techs: [
      {name: 'Git', rating: 5, info: 'TODO'},
      {name: 'Mercurial', rating: 5, info: 'TODO'},
    ]
  },
  {
    type: 'CI',
    background: '/src/assets/img/databases.png',
    backgroundClass: 'object-position-top',
    techs: [
      {name: 'Jenkins', rating: 4, info: 'TODO'},
      {name: 'GitLab', rating: 3, info: 'TODO'},
    ]
  },
]
</script>

<style>
.v-img.object-position-top .v-img__img {
  object-position: top !important;
}

.bg-primary-transparent {
  background-color: rgba(48, 43, 99, 0.5) !important;
}
</style>
