<template>
  <div>
    <section class="tw-pt-16 lg:tw-pt-32 tw-px-4">
      <div class="tw-container tw-mx-auto sm:tw-py-1 md:tw-py-5 lg:tw-py-5">
        <!-- Breadcrumb -->
        <nav id="breadcrumb" class="tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5" aria-label="breadcrumb">
          <ol class="tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3">
            <li class="tw-inline-flex tw-items-center">
              <a :href="'/'" class="tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white">
                <svg class="tw-w-4 tw-h-4 tw-mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </a>
            </li>
            <li aria-current="page">
              <div class="tw-flex items-center">
                <svg class="tw-w-6 tw-h-6 tw-text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500">{{'Most Expensive Alcohol' | capitalize }}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <!-- best selling spirits -->
      <div class="tw-container tw-mx-auto" style="margin-top:-20px;">
        <h1 class="tw-text-red-600 tw-text-center tw-font-semibold heading_one">
          {{ meta.headerOne }}
        </h1>
        <div v-if="loading">
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          ..loading products
        </div>
        <div
          v-else
          class="card tw-shadow tw-bg-white tw-p-2 tw-mb-2 tw-rounded-0"
          v-for="(product, index) in products"
          :key="index"
        >
          <h1 class="tw-capitalize tw-text-red-600 tw-font-semibold heading_one tw-py-5">
            Most Expensive {{ index | capitalize }} in Kenya
          </h1>
          <Products
            :products="product"
            :display-id="display['most-expensive']"
          ></Products>
        </div>
      </div>
      <!-- end products column-->
    </section>
    <!-- end section -->
  </div>
</template>
<script>
const Products = () => import('~/components/HomeProducts');

export default {
  components: {
    Products,
  },
  data() {
    return {
      display: {
        'most-expensive': 'most-expensive',
      },
      loading: false,
      meta: {},
      products: [],
    };
  },
  methods: {
    async getExpensiveProducts() {
      this.loading = true;
      try {
        await this.$http.$get('products/expensive').then((res) => {
          this.loading = false;
          this.products = res.result;
        });
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
    },
  },
  created() {
    this.getExpensiveProducts();
  },

  async asyncData({ $http }) {
    try {
      const meta = await $http
        .$get('metas/get-by-category/most-expensive')
        .then((response) => response.result);
      return { meta };
    } catch (err) {
      return { meta: {} };
    }
  },
  head() {
    const meta = this.meta || {};
    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: meta.metadescription,
        },
        { hid: 'og:title', name: 'og:title', content: meta.title },
        {
          hid: 'og:description',
          name: 'og:description',
          content: meta.metadescription,
        },
        { hid: 'og:type', name: 'og:type', content: 'website' },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://nairobidrinks.co.ke' + this.$route.path,
        },
      ],
    };
  },
  filters: {
    formatName(value) {
      return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>
<style>
.table td {
  border-top: 0 !important;
  padding: 0 !important;
}

#product-image img {
  width: 230px;
  height: auto;
}

.small_headers p {
  line-height: 40px;
  font-weight: 600;
}

@media screen and (max-width: 481px) {
  #breadcrumb {
    display: none;
  }
  .heading_one {
    padding: 10px;
    font-size: 1.2em;
    margin-bottom: 1px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
}

</style>
