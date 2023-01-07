<template>
  <div>
    <section class="tw-pt-32 lg:tw-pt-32 tw-px-2">
      <div class="tw-container mx-auto">
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
                <span class="tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500">{{'Pricelist' | capitalize}}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <!-- best selling spirits -->
      <div class="tw-container mx-auto">
        <h1 class="tw-text-red-600 tw-text-center tw-font-semibold">
          {{ meta.headerOne || '' }}
        </h1>
        <button
          class="btn btn-primary clearfix d-print-none float-right"
          id="download-btn"
          @click="print"
        >
          <i class="fas fa-download fa-fw"></i> Download
        </button>
        <div class="clearfix">&nbsp;</div>
        <div v-if="loading">
          <span
            class="spinner-border justify-content-center tw-text-red-600 spinner-border-md"
            role="status"
            aria-hidden="true"
          ></span>
          ..loading pricelist
        </div>
        <div id="printList" v-else>
          <!-- print header -->
          <div style="text-align:center;border-bottom:2px solid #D45052 ">
            <img :src="`/logo.png`" alt="logo" />
            <h5>Avimar International</h5>
            <p>
              <span style="color:#D45052;">+254731722682</span><br />
              avimar@gmail.com<br />
              Website: https://avimar.online
            </p>
          </div>
          <!-- end print header -->

          <div
            class="card tw-shadow tw-bg-white tw-p-4 tw-mb-2 tw-rounded-0 "
            v-for="(product, index) in products"
            :key="index"
          >
            <h3 class="tw-capitalize tw-text-red-600">
              {{ index | capitalize }} Prices
            </h3>
            <div class="table-responsive">
              <table class="table table-bordered  text-wrap">
                <thead>
                  <tr class="text-left">
                    <th style="text-align:left">Product Name</th>
                    <th>Price</th>
                    <th>Availability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in product" :key="`${i}-${item._id}`">
                    <td>
                      &nbsp;&nbsp;
                      <nuxt-link
                        :to="`/product/${item.url}`"
                        style="text-decoration: none"
                        >{{ item.name | capitalize }}
                        {{ item.quantity }}
                      </nuxt-link>
                    </td>
                    <td>&nbsp;&nbsp;{{ item.discount | currency }}</td>
                    <td>
                      &nbsp;&nbsp;
                      <template v-if="item.available === true">
                        In Stock
                      </template>
                      <template v-else>
                        Out of stock
                      </template>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- end products column-->
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      products: [],
      meta: {},
    };
  },
  async fetch() {
    this.loading = true;
    await this.$http
      .$get('products/price-list')
      .then((data) => {
        this.loading = false;
        this.products = data.result;
      })
      .catch((err) => {
        this.loading = false;
        console.log(err.message);
      });
  },
  methods: {
    print() {
      let divContents = document.getElementById('printList').innerHTML;
      let a = window.open('', '', 'height=500, width=500');
      a.document.write('<html lang="en">');
      a.document.write(divContents);
      a.document.write('</body></html>');
      a.document.close();
      a.print();
    },
  },
  async asyncData({ $http }) {
    try {
      const meta = await $http
        .$get('metas/get-by-category/pricelist')
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
          href: 'https://avimar.online' + this.$route.path,
        },
      ],
    };
  },
};
</script>
<style scoped>
.table th {
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
}

#download-btn {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 15%;
  z-index: 10;
}

@media screen and (max-width: 481px) {
  #breadcrumb {
    display: none;
  }
  #download-btn {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 18%;
    z-index: 10;
  }
}
</style>
