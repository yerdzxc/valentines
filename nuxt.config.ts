import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/valentines/',
    buildAssetsDir: 'assets',
  },
  devtools: { enabled: false },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    'nuxt-swiper',
    '@nuxtjs/tailwindcss',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

})

