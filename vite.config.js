// noinspection ES6PreferShortImport

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'node:url'
import {esbuildTarget} from "./src/plugins/esbuild/esbuild.target.js"
import {publicPath} from "./src/plugins/consts.js"

export default defineConfig({
  plugins: [
    VueRouter(),
    Vue({
      template: {transformAssetUrls}
    }),
    Vuetify({
      autoImport: true,
      styles: {
        configFile: './styles/settings.scss',
      },
    }),
    Components(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
      eslintrc: {
        enabled: true,
      },
      vueTemplate: true,
    }),
  ],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 8080,
  },
  build: {
    outDir: 'dist',
    target: esbuildTarget
  },
  base: publicPath
})
