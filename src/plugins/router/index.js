import {createRouter, createWebHistory} from 'vue-router'

import {publicPath} from "@/plugins/consts.js"

import HomePage from "@/components/pages/home/HomePage.vue"
import ProjectsPage from "@/components/pages/projects/ProjectsPage.vue"
import SkillsPage from "@/components/pages/skills/SkillsPage.vue"

/**
 * Основная функция создания экземпляра router для Vue-приложения
 * @param app Vue-приложение
 */
function createRouterForApp(app) {
  return createRouter({
    history: createWebHistory(publicPath),
    routes: [
      {path: '/', component: HomePage},
      {path: '/projects', component: ProjectsPage},
      {path: '/skills', component: SkillsPage},
      {path: '/:catchAll(.*)', redirect: '/'}
    ]
  })
}

/**
 * Получение экземпляра router для Vue-приложения
 * @param app Vue-приложение
 */
export function getRouter(app) {
  return createRouterForApp(app)
}
