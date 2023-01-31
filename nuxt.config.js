export default {
  /*
   ** Headers of the page
   */
  delayHydration: {
    mode: 'init'
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  loading: {
    color: '#277FBE',
    height: '5px'
  },
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      { 'http-equiv': 'pragma', content: 'no-cache' },
      { 'http-equiv': 'cache-control', content: 'no-cache' },
      { 'http-equiv': 'expires', content: '0' }
    ],
    link: [
      {
        rel: 'icon canonical dns-prefetch',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  env: {
    // baseURL: 'http://nairobi-drinks-api.io/api',
    baseURL: 'https://api.avimar.online/api/',
    imagesURL: 'https://api.avimar.online/api/uploads'
  },
  /*
   ** Customize the progress-bar color
   */
  /*
   ** Global CSS
   */
  css: [
    '@/assets/main.css',
    'node_modules/lite-youtube-embed/src/lite-yt-embed.css'
  ],
  /*
   ** Global Js
   */
  render: {
    static: {
      maxAge: 60 * 60 * 24 * 365 * 3000
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/http' },
    { src: '~/plugins/capitalize' },
    { src: '~/plugins/truncateText' },
    { src: '~/plugins/currency-filter' },
    { src: '~/plugins/persistedState.client' },
    { src: '~/plugins/vueToast', ssr: false },
    { src: '~/plugins/vue-observe-visibility.client.js' },
    { src: '~/plugins/youtube.client.js' }
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxt/http',
    'bootstrap-vue/nuxt',
    '@nuxtjs/robots',
    '@nuxt/image'
  ],
  robots: [
    {
      UserAgent: '*',
      Disallow: '/account'
    },
    {
      UserAgent: '*',
      Disallow: '/cart'
    },
    {
      UserAgent: '*',
      Disallow: '/checkout'
    },
    {
      UserAgent: '*',
      Disallow: '/order'
    },
    {
      UserAgent: '*',
      Disallow: '/carson'
    },
    {
      UserAgent: '*',
      Disallow: '/404'
    }
  ],
  pwa: {
    meta: {
      title: 'Avimar International',
      author: 'Avimar International',
      theme_color: '#ffffff'
    },
    manifest: {
      name: 'Avimar International - Click It, Own It',
      short_name: 'Avimar International',
      lang: 'en',
      theme_color: '#ffffff'
    },
    icon: {
      /* icon options */
    }
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)

  bootstrapVue: {
    bootstrapCSS: true,
    bootstrapVueCSS: true,
    componentPlugins: [
      'LayoutPlugin',
      'FormPlugin',
      'FormInputPlugin',
      'FormTextareaPlugin',
      'ModalPlugin',
      'AlertPlugin',
      'CollapsePlugin',
      'CardPlugin',
      'NavbarPlugin',
      'SidebarPlugin',
      'PopoverPlugin',
      'ButtonPlugin',
      'CarouselPlugin',
      'TablePlugin'
    ],
    directivePlugins: [
      'VBPopoverPlugin',
      'VBTooltipPlugin',
      'VBTogglePlugin',
      'VBHoverPlugin',
      'VBScrollspyPlugin'
    ]
  },

  http: {
    baseURL: 'https://api.avimar.online/api/'
    //baseURL: 'http://nairobi-drinks-api.io/api',
  },
  axios: {
    baseURL: 'https://api.avimar.online/api/'
    //baseURL: 'http://nairobi-drinks-api.io/api',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'result.accessToken'
          },
          user: { url: 'auth/profile', method: 'get', propertyName: 'result' },
          logout: false
        }
      }
    }
  },
  generate: {
    fallback: true
  },

  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    '@nuxtjs/fontawesome',
    '@nuxtjs/tailwindcss',
    'nuxt-delay-hydration',
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    display: "swap",
  families: {
    Poppins: true
  }
},

  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faCartPlus',
        'faShoppingCart',
        'faHeart',
        'faAngleDown',
        'faAngleRight',
        'faSignInAlt',
        'faSignOutAlt',
        'faPen',
        'faTimes',
        'faPhoneAlt',
        'faStar',
        'faShareAlt',
        'faFilter',
        'faPlus',
        'faMinus',
        'faArrowLeft',
        'faArrowRight',
        'faTachometerAlt',
        'faList'
      ],
      regular: ['faHeart', 'faUser', 'faStar'],
      brands: [
        'faFacebook',
        'faTwitter',
        'faInstagram',
        'faYoutube',
        'faWhatsapp',
        'faBlogger'
      ]
    }
  },
  googleAnalytics: {
    // id: 'UA-87949390-1'
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    },
    configureWebpack: {
      optimization: {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 0,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                return `npm.${packageName.replace('@', '')}`;
              }
            }
          }
        }
      }
    },
    analyze: false,
    // Add exception
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: {
      compact: true,
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]]
    }
  },
  router: {
    base: '/'
  }
};

