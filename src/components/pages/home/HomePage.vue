<template>
  <system-page-title title="Home" />
  <div class="fill-height text-center"
       style="background: linear-gradient(to right, #0f0c29, #302b63, #24243e)">
    <vue-particles
      id="tsparticles"
      :options="particlesSetupScript"
    />
    <div class="d-flex flex-column position-relative fill-height align-center justify-center" style="z-index: 2">
      <v-avatar image="/assets/img/photo_h.jpg" size="120" class="x-avatar"/>
      <p
        style="color: #FFF; font-size: 48px; font-weight: 600; line-height: 1.1; font-family: 'IBM Plex Sans', sans-serif"
        class="mt-8">Alexander Shkirkov</p>
      <p
        style="color: #FFF; font-size: 36px; font-weight: 200; line-height: 1.1; font-family: 'IBM Plex Sans', sans-serif"
        class="mt-8">Fullstack Java / Vue.js developer</p>
      <div class="d-flex pt-10">
        <template v-for="link in links">
          <v-btn
            variant="outlined"
            color="white"
            class="ml-2"
            :href="link.href"
            @click.prevent="$router.push({path: link.href})"
          >
            {{ link.title }}
          </v-btn>
        </template>

        <v-menu>
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              variant="outlined"
              color="white"
              class="ml-2"
            >
              <span>CV</span>
              <v-icon class="ml-1">mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="item in cvVariants"
              :key="item.lang"
              :value="item.lang"
              :href="getAssetUrl(`cv/ShkirkovAU_CV_${item.lang}.pdf`)"
              target="_blank"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="d-flex pt-10">
        <template v-for="sb in social">
          <v-tooltip
            location="bottom"
            content-class="bg-white"
            :text="sb.tooltip"
          >
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                icon
                variant="text"
                color="white"
                class="ml-2"
                :href="sb.href"
              >
                <v-icon>{{ sb.icon }}</v-icon>
              </v-btn>
            </template>
          </v-tooltip>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import SystemPageTitle from "@/components/system-env/page-title/SystemPageTitle.vue"
import {getAssetUrl} from "@/plugins/assets-helpers.js"
import {particlesSetupScript} from "@/plugins/particles/particles.js"

const links = [
  {title: 'Skills', href: '/skills'},
  {title: 'Projects', href: '/projects'},
]

const cvVariants = [
  {title: 'CV in English', lang: 'EN'},
  {title: 'Резюме на русском', lang: 'RU'},
]

const social = [
  {icon: 'systemIcons:vk', href: 'https://vk.com/a.shkirkov', tooltip: 'VK'},
  {icon: 'mdi-instagram', href: 'https://instagram.com/dreamwal.ker', tooltip: 'Instagram'},
  {icon: 'mdi-linkedin', href: 'https://linkedin.com/in/shkirkov', tooltip: 'LinkedIn'},
  {icon: 'mdi-stack-overflow', href: 'https://stackoverflow.com/users/9275224', tooltip: 'StackOverflow profile'},
  {icon: 'systemIcons:leetcode', href: 'https://leetcode.com/dreamwalker7', tooltip: 'LeetCode profile'},
]

export default {
  components: {
    SystemPageTitle
  },
  data() {
    return {
      particlesSetupScript,
      links,
      cvVariants,
      social,
    }
  },
  methods: {
    getAssetUrl
  }
}
</script>

<style>
.x-avatar .v-img__img {
  transform: scale(1.5);
  margin-top: 20px;
}
</style>
