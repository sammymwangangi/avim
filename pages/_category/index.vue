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
              <span class="tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500">{{ $route.params.category.replace(/-/g, ' ') | capitalize }}</span>
            </div>
          </li>
        </ol>
      </nav>
    <!-- heading section -->
    <div class="heading">
      <h1 class="heading_one tw-text-center tw-capitalize tw-text-red-600">
        {{
          meta.headerOne ||
            'Nairobi Drinks - Best alcohol delivery services in Kenya'
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
    <!-- filter sidebar -->
    <LazyHydrate when-visible>
      <category-filter
        :category="category.category"
        :sub-categories="category.category.subcategories"
      >
      </category-filter>
    </LazyHydrate>
    <!-- end filter sidebar -->
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
                    v-model="sort_by"
                    @change="filterProducts"
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
                    v-model="sort_by"
                    @change="filterProducts"
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
              <div class="text-justify d-inline pl-3">
                <div class="form-check">
                  <input
                    class="form-check-input tw-ring-1 tw-ring-gray-600 focus:tw-ring-0"
                    type="radio"
                    name="sort_by"
                    v-model="sort_by"
                    @change="filterProducts"
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
                    v-model="sort_by"
                    @change="filterProducts"
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

            <div
              class="tw-py-2 tw-rounded-0 tw-border-0 tw-bg-white"
              v-show="windowWidth > 576"
            >
              <span class="tw-text-red-600 lg:tw-pl-3 tw-uppercase">
                Filter Selection
              </span>
              <ul class="list-unstyled text-justify pl-lg-3">
                <li
                  class="tw-block hover:tw-bg-gray-100 tw-px-4 tw-py-2 tw-text-left tw-text-sm"
                  v-for="(cat, index) in category.category.subcategories"
                  :key="index"
                >
                  <a
                    :href="`/${category.category.url}/${cat.name}`"
                    class="tw-no-underline tw-text-gray-900"
                  >
                    {{ cat.name.replace(/-/g, ' ') | capitalize }}</a
                  >
                </li>
              </ul>
            </div>
            <!-- end category filters -->
            <!-- end brands filters -->
            <div
              class="tw-py-2 tw-my-2 tw-rounded-0 tw-border-0 tw-bg-white"
              v-show="windowWidth > 576 && category.brands.length"
            >
              <span class="tw-text-red-600 pl-lg-3 tw-uppercase">Brands</span>
              <ul class="list-unstyled pl-lg-3">
                <li
                  class="tw-block hover:tw-bg-gray-100 tw-px-4 tw-py-2 tw-text-left tw-text-sm"
                  v-for="(brand, index) in category.brands"
                  :key="`b-${index}`"
                >
                  <a
                    :href="`/brands/${brand.url}`"
                    class="tw-no-underline tw-text-gray-900"
                  >
                    {{ brand.brand | capitalize }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- end filters -->
          <div class="col-sm-10 products">
            <LazyHydrate when-visible>
              <Products :products="products" />
            </LazyHydrate>
            <div
              v-if="products.length"
              v-observe-visibility="handleScrolledToBottom"
            ></div>
          </div>
          <!-- end products column-->
        </div>
      </div>
    </section>
    <!-- end first section -->
    <!-- start brands table -->
    <section class="my-2" v-if="category.brands.length"> 
      <div class="tw-container tw-mx-auto tw-px-4">
        <div class="tw-flex tw-flex-col">
          <div class="-tw-my-2 tw-overflow-x-auto sm:-tw-mx-6 lg:-tw-mx-8">
            <div
              class="tw-py-2 tw-align-middle tw-inline-block tw-min-w-full sm:tw-px-6 lg:tw-px-8"
            >
              <div class="tw-shadow tw-overflow-hidden">
                <table class="tw-min-w-full">
                  <thead class="tw-bg-gray-800">
                    <tr>
                      <th
                        scope="tw-col"
                        class="py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider"
                      >
                        #
                      </th>
                      <th
                        scope="tw-col"
                        class="py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider"
                      >
                        Brand
                      </th>
                      <th
                        scope="tw-col"
                        class="py-3 tw-px-6 tw-text-left tw-text-xs tw-font-medium tw-text-white tw-uppercase tw-tracking-wider"
                      >
                        Country of Origin
                      </th>
                    </tr>
                  </thead>
                  <tbody class="tw-bg-white">
                    <tr
                      v-for="(brand, index) in category.brands"
                      :key="index"
                      class="even:tw-bg-gray-100"
                    >
                      <td class="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                        <div class="tw-text-sm tw-text-gray-600">
                          &nbsp;{{ index + 1 }}
                        </div>
                      </td>
                      <td class="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                        &nbsp;
                        <nuxt-link
                          :to="`/brands/${brand.url}`"
                          class="tw-no-underline tw-text-sm tw-text-blue-500"
                        >
                          {{ brand.brand | capitalize }}
                        </nuxt-link>
                      </td>
                      <td
                        class="tw-px-6 tw-py-4 tw-whitespace-nowrap tw-text-sm tw-text-gray-500"
                      >
                        {{ brand.country || '--' }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end table -->
    </section>
    <!-- end brands section -->
    <section class="my-2" v-show="meta.footercontent">
      <div class="tw-container tw-mx-auto tw-px-4">
        <div
          class="
          tw-border-0
          tw-my-2
          tw-px-2
          tw-py-2
          tw-bg-white
          tw-shadow-lg
          tw-rounded
        "
        >
          <div :class="{ readLess: readMore == true }" class="p-4">
            <span v-html="meta.footercontent"></span>
          </div>
          <div v-if="readMore == true" class="read-more tw-mx-4">
            <a
              @click="readMore = !readMore"
              class="
              tw-cursor-pointer tw-my-6 tw-text-gray-900
              hover:tw-text-red-600
              tw-text-left
              tw-px-4
              tw-py-1
              tw-rounded-full
              tw-ring-1
              tw-ring-red-600
              tw-no-underline
            "
              >Show More</a
            >
          </div>
          <div v-else class="read-less tw-mx-4">
            <a
              @click="readMore = !readMore"
              class="
              tw-cursor-pointer tw-my-2 tw-text-gray-900
              hover:tw-text-red-600
              tw-text-left
              tw-px-4
              tw-py-1
              tw-rounded-full
              tw-ring-1
              tw-ring-red-600
              tw-no-underline
            "
              >Show Less</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
const Products = () => import('~/components/Products');
const CategoryFilter = () => import('~/components/partials/CategoryFilter');
import { vueWindowSizeMixin } from 'vue-window-size';
export default {
  mixins: [vueWindowSizeMixin],
  components: {
    Products,
    LazyHydrate,
    CategoryFilter,
  },
  data() {
    return {
      sort_by: 'price',
      page: 1,
      lastPage: 0,
      brands: [],
      products: [],
      meta: {},
      readMore: true,
    };
  },

  async asyncData({ $http, params }) {
    try {
      const meta = await $http
        .$get(`metas/get-by-category/${params.category}`)
        .then((response) => response.result);
      const category = await $http
        .$get(`categories/get-by-slug/${params.category}`)
        .then((response) => response.result);
      return { meta, category };
    } catch (err) {
      return { meta: {}, category: {} };
    }
  },
  async fetch() {
    let products = await this.$http.$get(
      `products?category=${this.category.category.name}&page=${this.page}&sort_by=${this.sort_by}`
    );
    this.products.push(...products.result.data);
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
    const meta = this.meta || {};
    return {
      title: meta.title,
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
};
</script>
<style scoped>
.readLess {
  overflow: hidden;
  max-height: 25ch;
}
.read-more,
.read-less {
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.btn:focus,
.btn:active {
  outline: none;
  box-shadow: none;
  border: none;
}

</style>
