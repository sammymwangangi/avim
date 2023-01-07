<template>
  <div class="tw-pt-32 lg:tw-pt-32">
    <!-- Breadcrumb -->
    <nav class="tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5" aria-label="breadcrumb">
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
            <span class="tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500">Brands</span>
          </div>
        </li>
      </ol>
    </nav>
    <div class="tw-container tw-mx-auto tw-py-2">
      <div>
        <h1 class="tw-text-center tw-text-red-600 tw-pb-3">
          {{ meta.headerOne || '' }}
        </h1>
      </div>

      <div
        class="tw-shadow tw-px-4 tw-py-4 tw-mb-3 tw-rounded tw-border-0 tw-bg-white"
        v-for="(item, key) in brands"
        :key="key"
      >
        <span
          class="tw-text-red-600 tw-font-medium tw-uppercase tw-tracking-wider tw-pb-2"
        >
          {{ key | capitalize }} brands
        </span>
        <div class="">
          <table class="tw-table-auto tw-min-w-full">
            <thead>
              <tr>
                <th
                  class="tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider"
                >
                  Brand
                </th>
                <th
                  class="tw-font-medium tw-text-gray-500 tw-uppercase tw-tracking-wider"
                >
                  Country of Origin
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(brand, index) in item"
                :key="index"
                class="even:tw-bg-gray-100"
              >
                <td class="tw-px-6 tw-py-4 tw-whitespace-nowrap">
                  <nuxt-link
                    :to="`/brands/${brand.url}`"
                    class="tw-no-underline tw-text-blue-600"
                  >
                    {{ brand.brand | capitalize }}
                  </nuxt-link>
                </td>
                <td class="tw-whitespace-nowrap tw-text-sm tw-text-gray-500">
                  {{ brand.country || '--' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- end table -->
      </div>
    </div>
  </div>
</template>
<script>
import { vueWindowSizeMixin } from 'vue-window-size';
export default {
  mixins: [vueWindowSizeMixin],
  name: 'Brands',
  data() {
    return {};
  },
  async asyncData({ $http }) {
    try {
      const brands = await $http
        .$get('brands/grouped')
        .then((response) => response.result);
      const meta = await $http
        .$get('metas/get-by-category/brands')
        .then((response) => response.result);

      return { meta, brands };
    } catch (err) {
      return { meta: {}, brands: [] };
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
  methods: {
    init() {},
  },
};
</script>
<style scoped>
@media screen and (max-width: 481px) {

  .heading_one {
    margin-top: -10px;
    font-size: 1.2em;
    margin-bottom: 1px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
}
</style>
