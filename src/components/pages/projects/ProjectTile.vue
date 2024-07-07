<template>
  <v-col sm="12" md="6">
    <v-card
      class="mx-auto x-card"
    >
      <v-card-title class="bg-primary-transparent text-white" style="border-bottom: 1px solid rgba(255, 255, 255, 0.2)">
        {{ project.name }}
      </v-card-title>
      <v-card-text class="text-white pa-4">
        <p class="text-pre-wrap mb-6" style="font-size: 16px">{{ project.description }}</p>
        <template v-for="link in project.links">
          <p class="font-weight-bold mb-2">{{ `${link.type}: ` }}<a :href="link.href"
                                                                    style="color: #66bb6a">{{ link.href }}</a></p>
        </template>

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
export default {
  props: {
    project: Object
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
