export default defineNuxtConfig({
  devtools: { enabled: true },

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
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Roboto' }
      ]
    }
  },

  components: [
    { path: '~/components', extensions: ['.vue'] },
    { path: '~/components', pathPrefix: false }
  ],

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true,
    overwriting: true,
    fontsDir: 'fonts',
    fontsPath: 'fonts',
    outputDir: 'assets',
    stylePath: 'google-fonts.css',
    display: 'auto', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    families: {
      Roboto: true,
      Inter: [400, 700]
    }
  },

  tailwindcss: {
    cssPath: false,
    configPath: 'tailwind.config.ts',
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
