export default defineNuxtConfig({
  // CONFIGURAÇÃO DEVTOOLS
  devtools: { enabled: true },

  // VARIÁVEIS DE PRODUÇÃO
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },

  // VARIÁVEIS DE DESENVOLVIMENTO
  $development: {
    //
  },

  // CONFIGURAÇÕES DE TEMPO DE EXECUÇÃO
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: process.env.NUXT_API_SECRET,
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },

  // CONFIGURAÇÕES DE SEO
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

  // CONFIGURAÇÃO DE COMPONENTES
  // components: {
  //   global: true,
  //   dirs: [
  //     '~/components',
  //     { path: '~/components', pathPrefix: false }
  //   ]
  // },
  components: [
    { path: '~/components', extensions: ['.vue'] },
    { path: '~/components', pathPrefix: false }
  ],

  // MODULOS
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  // GOOGLE FONTS
  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true, // Permite baixar css e fonts do Google para o Projeto.
    overwriting: true, // Impede que os arquivos sejam baixados mais de uma vez.
    fontsDir: 'fonts', // Diretório que as fontes serão baixadas.
    fontsPath: 'fonts', // Caminho das fontes.
    outputDir: 'assets', // Diretório de saída para arquivos baixados.
    stylePath: 'google-fonts.css', // Caminho da folha de estilo gerada.
    // Display lets you control what happens while the font is still loading or otherwise unavailable.
    display: 'auto', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    families: {
      Roboto: true,
      Inter: [400, 700]
    }
  },

  // TAILWINDCSS
  tailwindcss: {
    cssPath: false, //'assets/css/tailwind.css', // Dont's inject css file.
    configPath: 'tailwind.config.ts', // Caminho do arquivo de configuração.
    exposeConfig: true, // Em runtime.
    exposeLevel: 2,
    injectPosition: 'first',
    config: {},
    viewer: true,
  },

  postcss: {
    // Adicione os plugins do PostCSS aqui
    plugins: {
      // Exemplo: Adicione o Autoprefixer
      autoprefixer: {},
      // Outros plugins, se necessário
    },
  }
})
