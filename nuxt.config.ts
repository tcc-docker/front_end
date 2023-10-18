export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'charset', content: 'utf-8' },
      ],
      link: [
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com/' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com/', crossorigin: '' },
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed' },
        { rel: 'stylesheet', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed' },
      ]
    }
  },

  components: [
    { path: '~/components', extensions: ['.vue'] },
    { path: '~/components', pathPrefix: false }
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      'mapActions',
      'mapState',
      'mapStore',
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  tailwindcss: {
    cssPath: false,
    configPath: 'tailwind.config',
    exposeConfig: true,
    exposeLevel: 2,
    injectPosition: 'first',
    config: {},
    viewer: true,
  },

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  }
})
