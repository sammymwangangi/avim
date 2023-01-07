<template>
  <div>
    <section class="tw-pt-20 lg:tw-pt-32">
      <div class="tw-container tw-mx-auto tw-py-5 tw-px-2">
        <!-- crumbs -->
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
            <span class="tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500">Cart</span>
          </div>
        </li>
      </ol>
    </nav>
        <span id="headerOne" v-if="items.length > 0">
          <h5>
            <strong>Cart ({{ items.length }} items)</strong>
          </h5>
          <div class="card tw-my-3 tw-rounded-0 tw-p-2">
            <div class="row">
              <div class="col-xs-12 col-sm-7 col-md-8 col-lg-9">
                <div class="table-responsive">
                  <table class="table table-sm table-bordered text-center">
                    <thead class="bg-secondary text-white">
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, key) in items" :key="key">
                        <td>
                          <fa
                            icon="times"
                            class=" text-danger"
                            @click="removeFromCart(item)"
                            style="cursor: pointer;position: relative;top:1px;"
                          ></fa>
                          | {{ item.productName | capitalize }}
                          <span class="text-primary">{{
                            item.productUnit
                          }}</span>
                        </td>
                        <td>{{ item.price | currency }}</td>
                        <td class="tw-pl-2 tw-pr-2" style="width: 150px;">
                          <div class="input-group input-group-sm">
                            <div class="input-group-prepend">
                              <span
                                class="input-group-text bg-danger btn-sm text-white"
                                @click="decreaseQuantity(item)"
                                style="cursor: pointer"
                                ><fa icon="minus"></fa
                              ></span>
                            </div>
                            <!--                    <select @input="updateQuantity($event,item)" class="form-control text-dark">-->
                            <!--                      <option>1</option>-->
                            <!--                      <option>2</option>-->
                            <!--                    </select>-->
                            <!--                    <input type="text" class="form-control text-dark" @keypress="isNumber($event)" @input="updateQuantity($event,item)" :value="`${item.productQuantity}`"  aria-label="Amount (to the nearest dollar)">-->
                            <input
                              type="text"
                              class="form-control text-center"
                              :value="`${item.productQuantity}`"
                              disabled
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <div class="input-group-append">
                              <span
                                class="input-group-text bg-success input-group-sm text-white"
                                @click="increaseQuantity(item)"
                                style="cursor: pointer"
                                ><fa icon="plus"></fa>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>{{ item.subTotal | currency }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-xs-12 col-sm-5 col-md-4 col-lg-3">
                <h4 class="border-bottom  border-dark">Cart Totals</h4>
                <ul class="list-group list-group-flush pl-0">
                  <li class="list-group-item">
                    <span>Subtotal: </span
                    ><strong class="ml-4">{{ cartTotal | currency }}</strong>
                  </li>
                  <li class="list-group-item">
                    <span>Discount: </span><span class="ml-4">__</span>
                  </li>
                  <li class="list-group-item">
                    <span>Total: </span
                    ><strong class="ml-4">{{ cartTotal | currency }}</strong>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end row -->
            <hr />
            <div
              class="text-md-right text-lg-right d-sm-block d-md-inline-block d-lg-inline-block"
            >
              <nuxt-link to="/" class="btn btn-info btn-sm text-uppercase mr-3"
                ><fa icon="arrow-left"></fa> Continue Shopping</nuxt-link
              >
              <nuxt-link
                to="/checkout"
                class="btn btn-dark btn-sm  text-uppercase"
                >Proceed to Checkout<fa icon="arrow-right"></fa
              ></nuxt-link>
            </div>
          </div>
        </span>
        <span v-else>
          <div class="card my-3 rounded-0">
            <div class="card-header bg-secondary text-white">
              <h5>Your cart is empty!</h5>
            </div>
            <div class="card-body p-2">
              <nuxt-link
                to="/"
                class="btn btn-info btn-sm text-uppercase float-left"
              >
                <i class="ri-arrow-left-fill"></i>
                Continue Shopping
              </nuxt-link>
            </div>
          </div>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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

    isNumber: function(evt) {
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
  async asyncData({ $http, params }) {
    try {
      const meta = await $http
        .$get(`metas/get-by-category/cart`)
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
