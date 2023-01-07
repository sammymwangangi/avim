<template>
  <div class="tw-pt-16 lg:tw-pt-32">
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
            <span class="tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500">{{ $route.params.brand.replace(/-/g, ' ') | capitalize }}</span>
          </div>
        </li>
      </ol>
    </nav>
    <div class="tw-mb-3 tw-mt-1">
      <div class="heading tw-mt-1">
        <h1 class="heading_one tw-text-center tw-text-red-600">
          {{
            brand.headerOne ||
              'Avimar International - Click it, Own It'
          }}
        </h1>
      </div>
      <!-- filter button -->

      <div class="tw-mt-5 clearfix tw-flex sm:tw-hidden md:tw-hidden lg:tw-hidden tw-justify-center">
        <div>

          <button
            type="button"
            class="btn btn-sm btn-dark tw-ml-2 tw-mr-2 tw-inline sm:tw-hidden md:tw-hidden lg:tw-hidden"
            v-b-toggle.sidebar-2
          >
            <fa icon="filter"></fa> Filters
          </button>
        </div>
        <div>

          <label class="sr-only" for="sort"></label>
          <select
            class="form-control form-control-sm tw-inline modal-btn tw-bg-transparent focus:tw-ring-0"
            id="sort"
            style="width:220px;"
            v-model="sort_by"
            @change="filterProducts"
          >
            <option value="price" selected>Sort By Price / ABV</option>
            <option value="price_low">Price Low - High</option>
            <option value="price_high">Price High - Low</option>
            <option value="alcohol_low">Alcohol % Low-High</option>
            <option value="alcohol_high">Alcohol % High-Low</option>
          </select>
        </div>
      </div>
      <!-- end filter button -->
    </div>

    <section>
      <div class="tw-container tw-px-4 tw-py-4 tw-mx-auto">
        <div class="row">
          <div class="col-sm-2">
            <div
              class="tw-text-left tw-px-2 tw-py-2 tw-my-2 tw-rounded tw-bg-white"
              v-show="windowWidth > 576"
            >
              <span class="tw-text-red-600 tw-uppercase">Sort by price</span>
              <div class="text-justify d-inline pl-3">
                <div class="form-check">
                  <input
                    class="form-check-input tw-ring-1 tw-ring-gray-600 focus:tw-ring-0"
                    type="radio"
                    name="sort_by"
                    @change="filterProducts"
                    v-model="sort_by"
                    id="sortPrice1"
                    value="price_high"
                  />
                  <label class="form-check-label" for="sortPrice1">
                    High-low
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input tw-ring-1 tw-ring-gray-600 focus:tw-ring-0"
                    type="radio"
                    name="sort_by"
                    @change="filterProducts"
                    v-model="sort_by"
                    id="sortPrice2"
                    value="price_low"
                  />
                  <label class="form-check-label" for="sortPrice2">
                    Low-High
                  </label>
                </div>
              </div>
            </div>
            <div
              class="tw-text-left tw-px-2 tw-py-2 tw-my-2 tw-rounded tw-bg-white"
              v-show="windowWidth > 576"
            >
              <span class="tw-text-red-600 tw-my-2 tw-uppercase"
                >Sort by Alcohol %</span
              >
              <div class="tw-text-justify d-inline tw-pl-3">
                <div class="form-check">
                  <input
                    class="form-check-input tw-ring-1 tw-ring-gray-600 focus:tw-ring-0"
                    type="radio"
                    name="sort_by"
                    @change="filterProducts"
                    v-model="sort_by"
                    id="alcoholPercentage1"
                    value="alcohol_high"
                  />
                  <label class="form-check-label" for="alcoholPercentage1">
                    High-low
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input tw-ring-1 tw-ring-gray-600 focus:tw-ring-0"
                    type="radio"
                    name="sort_by"
                    @change="filterProducts"
                    v-model="sort_by"
                    id="alcoholPercentage2"
                    value="alcohol_low"
                  />
                  <label class="form-check-label" for="alcoholPercentage2">
                    Low-High
                  </label>
                </div>
                <hr />
                <nuxt-link
                  class="text-decoration-none text-dark"
                  to="/countries"
                  >Shop By Country
                </nuxt-link>
              </div>
            </div>

            <!-- end brands filters -->
          </div>
          <!-- end filters -->
          <div class="col-sm-10 products">
            <Products :products="products"></Products>
            <div
              v-if="products.length"
              v-observe-visibility="handleScrolledToBottom"
            ></div>
          </div>
          <!-- end products-->
        </div>
      </div>
    </section>
    <!-- end first section -->

    <div class="tw-container tw-mx-auto tw-py-4">
      <div class="tw-flex tw-flex-col">
        <div class="-tw-my-2 tw-overflow-x-auto sm:-tw-mx-6 lg:-tw-mx-8">
          <div
            class="tw-py-2 tw-align-middle tw-inline-block tw-min-w-full sm:tw-px-6 lg:tw-px-8"
          >
            <div class="tw-shadow overflow-hidden" v-if="products.length > 0">
              <table class="tw-min-w-full">
                <thead class="tw-bg-gray-800">
                  <tr>
                    <th
                      scope="tw-col"
                      class="py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider"
                    >
                      Product Name
                    </th>
                    <th
                      scope="tw-col"
                      class="py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider"
                    >
                      Size
                    </th>
                    <th
                      scope="tw-col"
                      class="py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="tw-col"
                      class="py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider"
                    >
                      Alcohol Content
                    </th>
                    <th
                      scope="tw-col"
                      class="py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider"
                    >
                      Country
                    </th>
                    <th
                      scope="tw-col"
                      class="py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider"
                    >
                      Category
                    </th>
                  </tr>
                </thead>
                <tbody
                  v-for="(item, key) in products"
                  :key="key"
                  class="tw-bg-white"
                >
                  <tr
                    class="tw-p-2 even:tw-bg-gray-100"
                    v-for="(quantity, i) in item.quantities"
                    :key="`i-${i}`"
                  >
                    <td class="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                      <nuxt-link
                        :to="`/product/${item.url}`"
                        class="tw-no-underline tw-text-blue-600"
                        ><div>&nbsp;{{ item.name | capitalize }}</div>
                      </nuxt-link>
                    </td>
                    <td
                      class="tw-whitespace-nowrap tw-text-sm tw-text-gray-500"
                    >
                      <div>&nbsp;{{ quantity.quantity }}</div>
                    </td>
                    <td
                      class="tw-whitespace-nowrap tw-text-sm tw-text-gray-500"
                    >
                      <div>&nbsp;{{ quantity.discount | currency }}</div>
                    </td>
                    <td
                      class="tw-whitespace-nowrap tw-text-sm tw-text-gray-500"
                    >
                      <div>&nbsp;{{ item.percentage }}%</div>
                    </td>
                    <td
                      class="tw-whitespace-nowrap tw-text-sm tw-text-gray-500"
                    >
                      <div>&nbsp;{{ item.country }}</div>
                    </td>
                    <td
                      class="tw-whitespace-nowrap tw-text-sm tw-text-gray-500"
                    >
                      <div>&nbsp;{{ item.category }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end table-->
    <section class="tw-my-2 tw-bg-transparent" v-show="brand.description">
      <div class="tw-container tw-mx-auto">
        <div
          class="tw-bg-white tw-shadow tw-px-4 tw-py-4 tw-mb-3 tw-rounded tw-border-0"
        >
          <div class="tw-p-4">
            <span v-html="brand.description"></span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const Products = () => import('~/components/Products');
import { vueWindowSizeMixin } from 'vue-window-size';

export default {
  mixins: [vueWindowSizeMixin],
  components: {
    Products,
  },
  data() {
    return {
      sort_by: 'price',
      page: 1,
      lastPage: 0,
      isInit: true,
      products: [],
      category: {},
      infiniteId: +new Date(),
      display: {
        'brand-picks': 'brand-picks',
      },
    };
  },
  async asyncData({ $http, params }) {
    try {
      const brand = await $http
        .$get(`/brands/slug/${params.brand}`)
        .then((response) => response.result);
      return { brand };
    } catch (err) {
      return { brand: {} };
    }
  },
  async fetch() {
    let products = await this.$http.$get(
      `products?brand=${this.brand.brand}&page=${this.page}&sort_by=${this.sort_by}`
    );
    this.products = this.products.concat(products.result.data);
    this.lastPage = products.result.last_page;
  },
  methods: {
    handleScrolledToBottom(isVisible) {
      if (!isVisible) {
        return;
      }
      if (this.page >= this.lastPage) {
        return;
      }
      this.page++;
      this.$fetch();
    },
    filterProducts() {
      this.products = [];
      this.page = 1;
      this.$fetch();
    },
  },

  head() {
    const meta = this.brand || {};
    return {
      title: meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: meta.description,
        },
        { hid: 'og:title', name: 'og:title', content: meta.title },
        {
          hid: 'og:description',
          name: 'og:description',
          content: meta.description,
        },
        { hid: 'og:type', name: 'og:type', content: 'website' },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://avimar.online' + this.$route.path,
        },
      ],
    };
  },
};
</script>

<style scoped>
.btn-dark {
  outline: none;
}

.btn-dark:focus,
.btn-dark:active {
  outline: none;
  border: none;
}

@media screen and (max-width: 481px) {
  #jumbo {
    position: relative;
    top: 21px;
  }

  hr {
    margin-top: -20px;
  }
}
</style>