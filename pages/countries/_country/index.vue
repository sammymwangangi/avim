<template>
  <div class="tw-pt-16 lg:tw-pt-32">
    <div class="tw-container tw-mx-auto">
      
      <!-- Breadcrumb -->
      <nav id="breadcrumb" class="tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5" aria-label="breadcrumb">
        <ol class="tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3">
          <li class="tw-inline-flex tw-items-center">
            <a :href="'/'" class="tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white">
              <svg class="tw-w-4 tw-h-4 tw-mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              Home
            </a>
          </li>
          <li>
            <div class="tw-flex tw-items-center">
              <svg class="tw-w-6 tw-h-6 tw-text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <a :href="`/countries`" class="tw-no-underline tw-text-gray-700 hover:tw-text-gray-900 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-400 dark:hover:tw-text-white">Countries</a>
            </div>
          </li>
          <li aria-current="page">
            <div class="tw-flex items-center">
              <svg class="tw-w-6 tw-h-6 tw-text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <span class="tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500">{{ $route.params.country.replace(/-/g, ' ') | capitalize }}</span>
            </div>
          </li>
        </ol>
      </nav>
      <span class="tw-mt-1">
        <h1
          class="tw-text-center tw-text-red-600 heading_one"
        >
          {{ $route.params.country.replace(/-/g, ' ') }}
        </h1>
      </span>
      <div class="tw-p-2">
        <div
          class="tw-p-2 tw-mb-2 tw-rounded-0"
          v-for="(product, index) in products"
          :key="index"
        >
          <h2 class="tw-capitalize tw-text-red-600 tw-font-semibold">
            {{ index | capitalize }} from
            {{ $route.params.country.replace(/-/g, ' ') }}
          </h2>
          <Products :products="product"></Products>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const Products = () => import('~/components/Products');

export default {
  name: 'Country',
  components: {
    Products,
  },
  data() {
    return {};
  },
  async asyncData({ params, $http }) {
    try {
      let q = params.country.replace(/-/g, ' ');
      const products = await $http
        .$get(`products/country/${q}`)
        .then((response) => response.result);
      const meta = await $http
        .$get('metas/get-by-category/shop-by-country')
        .then((response) => response.result);
      return { products, meta };
    } catch (err) {
      return { products: [], meta: {} };
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
};
</script>
<style>
.header_area {
  text-align: center;
  background: #f5f5f5;
}

</style>