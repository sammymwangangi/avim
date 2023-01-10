<template>
  <div id="someshit">
    <!-- brand icons-->
    <section aria-labelledby="category-heading" class="tw-pt-24 sm:tw-pt-32 xl:tw-mx-auto xl:tw-max-w-7xl xl:tw-px-8">
      <div class="tw-px-4 sm:tw-flex sm:tw-items-center sm:tw-justify-between sm:tw-px-6 lg:tw-px-8 xl:tw-px-0">
        <h2 id="category-heading" class="tw-text-2xl tw-font-bold tw-tracking-tight tw-text-gray-900">Shop by
          Category</h2>
        <a href="#"
           class="tw-hidden tw-text-sm tw-font-semibold tw-text-indigo-600 hover:tw-text-indigo-500 sm:tw-block">
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div class="tw-mt-4 tw-flow-root">
        <div class="tw--my-2">
          <div class="tw-relative tw-box-content tw-h-80 tw-overflow-x-auto tw-py-2 xl:tw-overflow-visible">
            <div
                class="min-w-screen-xl tw-absolute tw-flex tw-space-x-8 tw-px-4 sm:tw-px-6 lg:tw-px-8 xl:tw-relative xl:tw-grid xl:tw-grid-cols-5 xl:tw-gap-x-8 xl:tw-space-x-0 xl:tw-px-0">
              <a href="#"
                 class="tw-relative tw-flex tw-h-80 tw-w-56 tw-flex-col tw-overflow-hidden tw-rounded-lg tw-p-6 hover:tw-opacity-75 xl:tw-w-auto">
                <span aria-hidden="true" class="tw-absolute tw-inset-0">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg" alt=""
                       class="tw-h-full tw-w-full tw-object-cover tw-object-center">
                </span>
                <span aria-hidden="true"
                      class="tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-2/3 tw-bg-gradient-to-t tw-from-gray-800 tw-opacity-50"></span>
                <span
                    class="tw-relative tw-mt-auto tw-text-center tw-text-xl tw-font-bold tw-text-white">New Arrivals</span>
              </a>

              <a href="#"
                 class="tw-relative tw-flex tw-h-80 tw-w-56 tw-flex-col tw-overflow-hidden tw-rounded-lg tw-p-6 hover:tw-opacity-75 xl:tw-w-auto">
                <span aria-hidden="true" class="tw-absolute tw-inset-0">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg" alt=""
                       class="tw-h-full tw-w-full tw-object-cover tw-object-center">
                </span>
                <span aria-hidden="true"
                      class="tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-2/3 tw-bg-gradient-to-t tw-from-gray-800 tw-opacity-50"></span>
                <span
                    class="tw-relative tw-mt-auto tw-text-center tw-text-xl tw-font-bold tw-text-white">Productivity</span>
              </a>

              <a href="#"
                 class="tw-relative tw-flex tw-h-80 tw-w-56 tw-flex-col tw-overflow-hidden tw-rounded-lg tw-p-6 hover:tw-opacity-75 xl:tw-w-auto">
                <span aria-hidden="true" class="tw-absolute tw-inset-0">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg" alt=""
                       class="tw-h-full tw-w-full tw-object-cover tw-object-center">
                </span>
                <span aria-hidden="true"
                      class="tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-2/3 tw-bg-gradient-to-t tw-from-gray-800 tw-opacity-50"></span>
                <span
                    class="tw-relative tw-mt-auto tw-text-center tw-text-xl tw-font-bold tw-text-white">Workspace</span>
              </a>

              <a href="#"
                 class="tw-relative tw-flex tw-h-80 tw-w-56 tw-flex-col tw-overflow-hidden tw-rounded-lg tw-p-6 hover:tw-opacity-75 xl:tw-w-auto">
                <span aria-hidden="true" class="tw-absolute tw-inset-0">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg" alt=""
                       class="tw-h-full tw-w-full tw-object-cover tw-object-center">
                </span>
                <span aria-hidden="true"
                      class="tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-2/3 tw-bg-gradient-to-t tw-from-gray-800 tw-opacity-50"></span>
                <span
                    class="tw-relative tw-mt-auto tw-text-center tw-text-xl tw-font-bold tw-text-white">Accessories</span>
              </a>

              <a href="#"
                 class="tw-relative tw-flex tw-h-80 tw-w-56 tw-flex-col tw-overflow-hidden tw-rounded-lg tw-p-6 hover:tw-opacity-75 xl:tw-w-auto">
                <span aria-hidden="true" class="tw-absolute tw-inset-0">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg" alt=""
                       class="tw-h-full tw-w-full tw-object-cover tw-object-center">
                </span>
                <span aria-hidden="true"
                      class="tw-absolute tw-inset-x-0 tw-bottom-0 tw-h-2/3 tw-bg-gradient-to-t tw-from-gray-800 tw-opacity-50"></span>
                <span class="tw-relative tw-mt-auto tw-text-center tw-text-xl tw-font-bold tw-text-white">Sale</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="tw-mt-6 tw-px-4 sm:tw-hidden">
        <a href="#" class="tw-block tw-text-sm tw-font-semibold tw-text-indigo-600 hover:tw-text-indigo-500">
          Browse all categories
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </section>
    <!-- end brand icons-->


    <!-- end products column-->
    <section class="tw-container mx-auto">
      <div class="p-2">
        <h2 class="tw-capitalize">Top Picks</h2>
        <LazyHydrate when-visible>
          <Products
              :products="topPicks"
              :display-id="display['top-picks']"
          ></Products>
        </LazyHydrate>
      </div>
      <!-- end products column-->
    </section>

    <!-- drinks on offer -->
    <section class="tw-container mx-auto" id="container-2">
      <div class="tw-p-2">
        <h2 class="tw-capitalize tw-mt-4">Trending Products</h2>
        <LazyHydrate when-visible>
          <Products
              :products="offers"
              :display-id="display['offers']"
          ></Products>
        </LazyHydrate>
      </div>
    </section>
    <!-- end drinks on offer-->

    <div class="tw-container mx-auto tw-px-4 tw-py-4 tw-my-2">
      <h2
          class="
          tw-text-lg tw-bg-white tw-text-center tw-p-2 tw-border-bottom tw-mb-2
        "
          id="headingTwo"
      >
        Shop by Collection
      </h2>
    </div>

    <div class="tw-container mx-auto tw-px-4 tw-py-4 tw-my-2">
      <div
          class="
          tw-bg-white tw-rounded tw-shadow-sm tw-mb-3 tw-pt-4 tw-pl-3 tw-pb-2
        "
          v-for="(brand, index) in homeBrands"
          :key="index"
      >
        <div class="flex flex-col">
          <div class="tw-text-xl tw-font-medium tw-pb-2 tw-text-red-600">
            {{ index | capitalize }}
          </div>
          <a
              :href="`/brands/${item.url}`"
              class="
              clearfix
              d-inline-block
              text-nowrap text-dark
              tw-p-1 tw-mb-2 tw-no-underline
            "
              v-for="(item, key) in brand"
              :key="key"
          ><span
              v-if="key < limit_by"
              class="
                hover:tw-bg-red-600 hover:tw-text-white
                tw-py-2
                tw-px-3
                tw-border
                tw-border-gray-400
                tw-rounded-md
                tw-shadow-sm
                tw-text-sm
                tw-leading-4
                tw-font-medium
                tw-text-gray-700
              "
          >{{ item.brand | capitalize }}</span
          >
          </a>
        </div>
        <a
            href="javascript:void(0)"
            class="
            tw-mt-1 tw-text-gray-900
            hover:tw-text-red-900
            tw-text-left
            tw-px-4
            tw-py-1
            tw-rounded-full
            tw-ring-1
            tw-ring-red-900
            tw-no-underline
          "
            @click="simple_toggle(default_limit, brand.length)"
        >{{ limit_by === 13 ? 'Show More' : 'Show Less' }}</a
        >
      </div>
    </div>

    <div class="tw-container mx-auto tw-px-4">
      <section
                class="tw-border-0 tw-my-2 tw-px-2 tw-py-2 tw-bg-white tw-shadow-lg tw-rounded tw-mx-auto tw-max-w-xl tw-px-4 tw-py-6 sm:tw-px-6 lg:tw-max-w-7xl lg:tw-px-8">
                <Link href="/" class="tw-text-3xl tw-font-medium tw-tracking-tight tw-text-blue-600">Avimar
                    International</Link>
                <div class="tw-mt-6 tw-text-base tw-text-gray-500">
                    <b>Avimar International</b> is a Kenyan E-commerce company currently operating locally but with
                    plans
                    to expand to other East African Countries. Our head office is situated in 7Km from Nairobi CBD.
                    It was founded in 2022 by two young entrepreneurs who also have interests in Tech and Financial
                    industry.
                    Our business model caters to customers both in urban and rural areas. <br/>

                    The platform provides a wide range of products covering Furniture, Metalwork Products like
                    wheelbarrows, home appliances, smartphones and accessories, spare parts , electronic products
                    such as computers, tw-tablets, and TVs, beauty and fashion products, among others

                </div>
            </section>
    </div>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import {vueWindowSizeMixin} from 'vue-window-size';
import {mapState} from 'vuex';

const Carousel = () => import('~/components/Carousel');
const Products = () => import('~/components/HomeProducts');

export default {
  mixins: [vueWindowSizeMixin],
  components: {
    Carousel,
    Products,
    LazyHydrate,
  },

  data() {
    return {
      meta: {},
      display: {
        'top-picks': 'top-picks',
        'sliders': 'sliders',
        'offers': 'offers',
      },
      default_limit: 13,
      limit_by: 13,
      readMore: true,
    };
  },
  computed: {
    ...mapState('products', [
      'topPicks',
      'offers',
      'homeBrands',
      'homeCarousels',
    ]),
  },
  async fetch() {
    await this.getOthers();
    await this.getMeta();
  },
  methods: {
    async getMeta() {
      await this.$http
          .$get('/metas/get-by-category/home')
          .then((response) => (this.meta = response.result))
          .catch((err) => false);
    },

    async getOthers() {
      await this.$store.dispatch('products/getTopPicks');
      await this.$store.dispatch('products/getHomeBrands');
      await this.$store.dispatch('products/getHomeOffers');
      await this.$store.dispatch('products/getHomeCarousels');
    },
    simple_toggle(default_limit, brand_length) {
      this.limit_by =
          this.limit_by === default_limit ? brand_length : default_limit;
    },
  },
  head() {
    const meta = this.meta || {};
    return {
      title: meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: meta.metadescription,
        },
        {hid: 'og:title', name: 'og:title', content: meta.title},
        {
          hid: 'og:description',
          name: 'og:description',
          content: meta.metadescription,
        },
        {hid: 'og:type', name: 'og:type', content: 'website'},
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://avimar.online' + this.$route.path,
        },
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: `
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "url": "https://avimar.online",
            "logo": "https://avimar.online/images/logo.png",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+254731722682",
              "contactType": "customer service"
            }]
          }
          `,
          type: 'application/ld+json',
        },
      ],
    };
  },
};
</script>
<style scoped>
.readLess {
  overflow: hidden;
  max-height: 20ch;
}

.read-more,
.read-less {
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

#headingOne,
#headingTwo {
  font-size: 1.7em;
  font-weight: 700;
}

h2 {
  font-size: 1.2em;
  font-weight: 600;
}

@media screen and (min-width: 769px) {
  #headingOne,
  #headingTwo {
    position: relative;
    top: 30px;
    overflow: hidden;
  }

  #someshit {
    margin-top: 40px;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  #headingOne,
  #headingTwo {
    position: relative;
    top: 20px;
    overflow: hidden;
  }

  #someshit {
    margin-top: 20px;
  }
}

@media screen and (min-width: 481px) and (max-width: 575px) {
  #headingOne {
    position: relative;
    top: 20px;
    overflow: hidden;
  }

  #headingTwo {
    position: relative;
    top: 20px;
    bottom: 20px;
    overflow: hidden;
  }
}

@media screen and (max-width: 481px) {
  #container-2 {
    margin-top: -50px;
  }

  #headingOne {
    margin-top: 50px;
  }

  #headingTwo {
    position: relative;
    top: 20px;
  }

  #someshit {
    margin-top: 0px;
  }

}
</style>
