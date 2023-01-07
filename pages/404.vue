<template>
  <section class="tw-pt-16 lg:tw-pt-32 tw-px-2">
    <div class="tw-container tw-mx-auto tw-py-5">
      <main class="tw-container tw-mx-auto">
        <div class="tw-py-5">
          <div style="font-size:1.0em;" class="tw-text-center tw-font-normal">
            <div style="border-right:2px solid #CE2F32;padding-right:5px;">
              404
            </div>
            Page or Product could not be found
          </div>
          <hr />
          <h6 class="tw-py-3 tw-text-center tw-text-gray-400">
            You can browse some of our products below or go
            <nuxt-link to="/">back to home </nuxt-link>
          </h6>
          <div v-if="loading">
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span>Loading...</span>
          </div>
          <div v-else>
            <Products :products="products"></Products>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>
<script>
const Products = () =>
  import(/* webpackChunkName: "404_Products" */ '~/components/Products');
export default {
  components: {
    Products,
  },
  data() {
    return {
      products: [],
      loading: false,
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      this.loading = true;
      await this.$http
        .$get('/random-products')
        .then((res) => {
          this.loading = false;
          this.products = res.result;
        })
        .catch((err) => {
          this.loading = false;
        });
    },
  },
  async asyncData({ $http }) {
    try {
      const meta = await $http
        .$get(`/metas/get-by-category/404`)
        .then((response) => response.result);
      return { meta };
    } catch (err) {
      return { meta: {} };
    }
  },

  head() {
    const meta = this.meta;
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
    };
  },
};
</script>

<style>
main {
  background: #fff;
  justify-content: center;
  align-items: center;
  font-family: 'Merriweather Sans', sans-serif;
}

main #g6219 {
  transform-origin: 85px 4px;
  -webkit-animation: an1 12s 0.5s infinite ease-out;
  animation: an1 12s 0.5s infinite ease-out;
}

</style>
