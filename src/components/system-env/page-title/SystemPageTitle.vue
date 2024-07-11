<template>
  <div class="d-none" />
</template>

<script>
const titlePostfix = 'A.Shkirkov'

export default {
  name: 'SystemPageTitle',
  props: ['title'],
  watch: {
    title: {
      immediate: true,
      handler() {
        document.title = `${this.title} - ${titlePostfix}`
      }
    }
  },
}
</script>
