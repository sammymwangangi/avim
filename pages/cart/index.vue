<template>
  <div>
    <section class="tw-pt-20 lg:tw-pt-32">
      <div class="tw-container tw-mx-auto tw-py-5 tw-px-2">
        <!-- crumbs -->
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5">
          <ol class="tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3">
            <li class="tw-inline-flex tw-items-center">
              <a :href="'/'"
                 class="tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white">
                <svg class="tw-w-4 tw-h-4 tw-mr-2" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </a>
            </li>
            <li aria-current="page">
              <div class="tw-flex items-center">
                <svg class="tw-w-6 tw-h-6 tw-text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        fill-rule="evenodd"></path>
                </svg>
                <span
                    class="tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500">Cart</span>
              </div>
            </li>
          </ol>
        </nav>
        <div v-if="items.length > 0" id="headerOne">
          <h5>
            <strong>Cart ({{ items.length }} items)</strong>
          </h5>
          <div class="tw-mt-12 lg:tw-grid lg:tw-grid-cols-12 lg:tw-items-start lg:tw-gap-x-12 xl:tw-gap-x-16">
            <section aria-labelledby="cart-heading" class="lg:tw-col-span-7">
              <h2 id="cart-heading" class="tw-sr-only">Items in your shopping cart</h2>
              <ul v-for="(item, key) in items" :key="key"
                  class="tw-divide-y tw-divide-gray-200 tw-border-t tw-border-b tw-border-gray-200" role="list">

                <li class="tw-flex tw-py-6 sm:tw-py-10">
                  <div class="tw-flex-shrink-0">
                    <img :alt="`${item.name}-avimar-online`"
                         :src="
              decodeURIComponent(`${
                item.image_url === 'undefined' || item.image_url === ''
                  ? ''
                  : item.image_url
              }`)
            "
                         class="tw-h-24 tw-w-24 tw-rounded-md tw-object-cover tw-object-center sm:tw-h-48 sm:tw-w-48">
                  </div>

                  <div class="tw-ml-4 tw-flex tw-flex-1 tw-flex-col tw-justify-between sm:tw-ml-6">
                    <div class="tw-relative tw-pr-9 sm:tw-grid sm:tw-grid-cols-2 sm:tw-gap-x-6 sm:tw-pr-0">
                      <div>
                        <div class="tw-flex tw-justify-between">
                          <h3 class="tw-text-sm">
                            <nuxt-link :to="`/product/${item.url}`"
                                       class="tw-font-medium tw-text-gray-700 hover:tw-text-gray-800">
                              {{ item.productName | capitalize }}
                            </nuxt-link>
                          </h3>
                        </div>
                        <div class="tw-mt-1 tw-flex tw-text-sm tw-text-gray-500">
                          {{ item.category | capitalize }}
                        </div>
                        <p class="tw-mt-1 tw-text-sm tw-font-medium tw-text-gray-900">{{ item.price | currency }}</p>
                      </div>

                      <div class="tw-mt-4 sm:tw-mt-0 sm:tw-pr-9">
                        <label class="tw-sr-only" for="quantity-2">Quantity, Product name</label>
                        <div class="tw-flex tw-gap-1 tw-items-center tw-justify-between">
                          <button @click="decreaseQuantity(item)" type="button" class="tw-inline-flex tw-items-center tw-rounded-full tw-border tw-border-transparent tw-bg-red-600 tw-p-1 tw-text-white tw-shadow-sm hover:tw-bg-red-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-500 focus:tw-ring-offset-2">
                            <!-- Heroicon name: mini/plus -->
                            <svg class="tw-h-5 tw-w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"></path>
                            </svg>
                          </button>
                          <input
                            :value="`${item.productQuantity}`"
                            aria-label="Amount (to the nearest dollar)"
                            class="form-control text-center"
                            disabled
                            type="text"
                        />
                          <button @click="increaseQuantity(item)" type="button" class="tw-inline-flex tw-items-center tw-rounded-full tw-border tw-border-transparent tw-bg-indigo-600 tw-p-1 tw-text-white tw-shadow-sm hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2">
                            <!-- Heroicon name: mini/plus -->
                            <svg class="tw-h-5 tw-w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg>
                          </button>
                        </div>
                        <div class="tw-absolute tw-top-0 tw-right-0">
                          <div class="tw--m-2 tw-inline-flex tw-p-2 tw-text-gray-400 hover:tw-text-gray-500 tw-cursor-pointer"
                                  @click="removeFromCart(item)">
                            <span class="tw-sr-only">Remove</span>
                            <!-- Heroicon name: mini/x-mark -->
                            <svg aria-hidden="true" class="tw-h-5 tw-w-5" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
            <section aria-labelledby="summary-heading"
                     class="tw-mt-16 tw-rounded-lg tw-bg-gray-50 tw-px-4 tw-py-6 sm:tw-p-6 lg:tw-col-span-5 lg:tw-mt-0 lg:tw-p-8">
              <h2 id="summary-heading" class="tw-text-lg tw-font-medium tw-text-gray-900">Order summary</h2>

              <dl class="tw-mt-6 tw-space-y-4">
                <div class="tw-flex tw-items-center tw-justify-between">
                  <dt class="tw-text-sm tw-text-gray-600">Subtotal</dt>
                  <dd class="tw-text-sm tw-font-medium tw-text-gray-900">{{ cartTotal | currency }}</dd>
                </div>
                <div class="tw-flex tw-items-center tw-justify-between tw-border-t tw-border-gray-200 tw-pt-4">
                  <dt class="tw-flex tw-items-center tw-text-sm tw-text-gray-600">
                    <span>Shipping estimate</span>
                    <a class="tw-ml-2 tw-flex-shrink-0 tw-text-gray-400 hover:tw-text-gray-500" href="#">
                      <span class="tw-sr-only">Learn more about how shipping is calculated</span>
                      <!-- Heroicon name: mini/question-mark-circle -->
                      <svg aria-hidden="true" class="tw-h-5 tw-w-5" fill="currentColor"
                           viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                              fill-rule="evenodd"/>
                      </svg>
                    </a>
                  </dt>
                  <dd class="tw-text-sm tw-font-medium tw-text-gray-900">__</dd>
                </div>
                <div class="tw-flex tw-items-center tw-justify-between tw-border-t tw-border-gray-200 tw-pt-4">
                  <dt class="tw-flex tw-text-sm tw-text-gray-600">
                    <span>Tax estimate</span>
                    <a class="tw-ml-2 tw-flex-shrink-0 tw-text-gray-400 hover:tw-text-gray-500" href="#">
                      <span class="tw-sr-only">Learn more about how tax is calculated</span>
                      <!-- Heroicon name: mini/question-mark-circle -->
                      <svg aria-hidden="true" class="tw-h-5 tw-w-5" fill="currentColor"
                           viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                              fill-rule="evenodd"/>
                      </svg>
                    </a>
                  </dt>
                  <dd class="tw-text-sm tw-font-medium tw-text-gray-900">__</dd>
                </div>
                <div class="tw-flex tw-items-center tw-justify-between tw-border-t tw-border-gray-200 tw-pt-4">
                  <dt class="tw-text-base tw-font-medium tw-text-gray-900">Order total</dt>
                  <dd class="tw-text-base tw-font-medium tw-text-gray-900">{{ cartTotal | currency }}</dd>
                </div>
              </dl>

              <div class="tw-mt-6">
                <nuxt-link
                    class="tw-w-full tw-rounded-md tw-border tw-border-transparent tw-bg-indigo-600 tw-py-3 tw-px-4 tw-text-base tw-font-medium tw-text-white tw-shadow-sm hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2 focus:tw-ring-offset-gray-50"
                    to="/checkout">Checkout
                </nuxt-link>
              </div>
            </section>
          </div>
          <!-- end row -->
        </div>
        <div v-else>
          <div class="tw-text-center">
            <div class="tw-mx-auto"><img alt="empty cart illustration" src="/images/empty_cart.svg"></div>
            <h3 class="tw-mt-2 tw-text-sm tw-font-medium tw-text-gray-900">Cart is empty</h3>
            <p class="tw-mt-1 tw-text-sm tw-text-gray-500">Looks like you have no items in your shopping cart.</p>
            <div class="tw-mt-6">
              <nuxt-link
                  class="tw-inline-flex tw-items-center tw-rounded-md tw-border tw-border-transparent tw-bg-indigo-600 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-shadow-sm hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2"
                  to="/">
                Continue Shopping
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import cartTotal from '@/mixins/cartTotal';

export default {
  mixins: [cartTotal],
  data() {
    return {
      quantity: null,
    };
  },
  computed: {
    ...mapState({
      items: (state) => state.cart.cart,
    }),
  },
  methods: {
    removeFromCart(item) {
      this.$store.commit('cart/removeFromCart', item);
    },
    updateQuantity(event, item) {
      const quantity = event.target.value;
      const record = {
        productId: item.productId,
        productQuantity: quantity,
      };
      this.$store.commit('cart/updateQuantity', record);
    },
    increaseQuantity(item) {
      if (item.productQuantity < 10) {
        this.$store.commit('cart/increaseQuantity', item);
      } else {
        return false;
      }
    },
    decreaseQuantity(item) {
      this.$store.commit('cart/decreaseQuantity', item);
    },

    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      let charCode = evt.which ? evt.which : evt.keyCode;
      if (
          charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
  async asyncData({$http, params}) {
    try {
      const meta = await $http
          .$get(`metas/get-by-category/cart`)
          .then((response) => response.result);
      return {meta};
    } catch (err) {
      return {meta: {}};
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
        {hid: 'og:title', name: 'og:title', content: meta.title},
        {
          hid: 'og:description',
          name: 'og:description',
          content: meta.metadescription,
        },
        {hid: 'og:type', name: 'og:type', content: 'website'},
      ],
    };
  },
};
</script>
<style scoped>
tr {
  padding: 10px !important;
}

@media screen and (max-width: 481px) {
  #breadcrumb {
    display: none;
  }

  #headerOne {
    position: relative;
    top: 25px;
  }
}
</style>
