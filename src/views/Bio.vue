<template>
  <div class="d-flex flex-column mx-auto" style="max-width: 1200px">
    <p class="text-white text-h3 text-center mt-4">Bio</p>

    <v-timeline align="start" line-color="white">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <template #opposite>
          <div
            :class="`pt-1 headline font-weight-bold text-${item.color}`"
            v-text="item.date"
          />
        </template>

        <template #default>
          <v-card class="x-card">
            <v-card-title :class="['text-h6 bg-primary-transparent', `bg-${item.color}`]" >
              {{ item.title }}
            </v-card-title>
            <v-card-text v-if="item.text" class="text-white pa-4" style="border-top: 1px solid rgba(255, 255, 255, 0.2)">
              <p>{{ item.text }}</p>
            </v-card-text>
          </v-card>
        </template>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: 'green-lighten-1',
        icon: 'mdi-briefcase',
        date: 'February 2017',
        title: 'Work status changed',
        text: 'Hired into LynxSoft',
      },
      {
        color: 'purple-lighten-2',
        icon: 'mdi-school',
        date: 'August 2017',
        title: 'Studying status changed',
        text: 'Got a Bachelor\'s degree at Altai State Technical University in Software Engineering',
      },
      {
        color: 'green-lighten-1',
        icon: 'mdi-airballoon',
      },
      {
        color: 'indigo-lighten-2',
        icon: 'mdi-layers-triple',
      },
    ],
  }),
}
</script>

<style scoped>
.x-card {
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 10px !important;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25) !important;
}

.bg-primary-transparent {
  background-color: rgba(48, 43, 99, 0.7) !important;
}
</style>
