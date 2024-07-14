<template>
  <v-col xs="12" md="4" class="px-2 pb-4">
    <v-card
      class="mx-auto x-card"
    >
      <v-img
        class="align-end text-white"
        :class="skill.backgroundClass"
        height="200"
        :src="getAssetUrl(skill.background)"
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
                <span class="font-weight-bold mr-2" style="font-size: 16px; line-height: 1.5">
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

<script>
import {getAssetUrl} from "@/plugins/assets-helpers.js"

export default {
  props: {
    skill: Object,
  },
  methods: {
    getAssetUrl,
  }
}
</script>

<style scoped>

</style>
