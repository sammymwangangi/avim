<template>
  <div>
    <div
      class="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 lg:tw-grid-cols-5 tw-gap-2"
    >
      <div
        class="tw-flex tw-flex-col tw-min-h-[360px] tw-bg-white tw-relative tw-p-1 tw-shadow-md hover:tw-shadow-xl tw-rounded-md tw-transition tw-duration-700 tw-ease-in-out tw-transform hover:-tw-translate-y-1 hover:tw-scale-100 tw-overflow-hidden"
        v-for="product in products"
        :key="product._id"
      >
        <nuxt-link
          :to="`/product/${product.url}`"
          class="tw-flex-1 tw-no-underline"
        >
          <div
            v-if="product.label.includes('on-offer')"
            class="ribbon tw-absolute tw-top-0 tw-left-0 tw-bg-red-600 tw-text-white tw-font-medium tw-text-xs tw-text-center tw-uppercase tw-p-1 tw-shadow-md tw-shadow-red-600/30 tw-whitespace-no-wrap"
          >
            Offer
          </div>
          <img
            :src="
              `${
                product.image_url === 'undefined' || product.image_url === ''
                  ? ''
                  : product.image_url
              }`
            "
            class="img-fluid"
            width="320"
            height="362"
            :alt="`${product.name}-nairobidrinks`"
          />
        </nuxt-link>
        <div
          class="tw-text-gray-400 tw-text-left tw-capitalize tw-font-thin tw-text-xs tw-italic tw-w-auto"
        >
          <template v-if="Object.keys(product.subcategory).length !== 0">{{
            product.subcategory[0].replace(/-/g, ' ')
          }}</template>
        </div>
        <div class="tw-text-left">
          <nuxt-link
            :to="`/product/${product.url}`"
            class="tw-no-underline tw-text-left"
          >
            <div
              class="hover:tw-z-50 tw-text-gray-700 tw-mt-2 tw-text-sm tw-capitalize tw-line-clamp-2"
              :title="product.name"
            >
              {{ product.name | truncate(20, '...') }}
            </div>
            <ul
              class="list-unstyled tw-space-y-1 tw-text-md tw-mt-2"
              v-for="quantity in product.quantities"
              :key="quantity.quantity"
            >
              <li
                class="tw-flex tw-justify-start"
                style="font-family: 'Roboto', sans-serif;margin-bottom:-1rem"
              >
                <span class="tw-font-semibold tw-text-gray-900">{{
                  quantity.discount | currency
                }}</span>
              </li>
            </ul>
          </nuxt-link>
        </div>
        <div>
          <button
            v-show="product.available === false"
            type="button"
            class="btn btn-danger btn-sm btn-block rounded-0"
          >
            Out of stock
          </button>
        </div>
        <div
          class="tw-flex tw-justify-around tw-px-2 tw-py-2"
          style="font-family: 'Roboto', sans-serif;margin-top: 5px;"
        >
          <div
            v-b-modal="`${product.url}-${displayId}`"
            @click="productInfo(product)"
            :disabled="product.available === false"
            class="tw-self-end"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="tw-h-6 tw-w-6"><path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
          </div>
          <div
            v-b-modal="`wp-${product.url}-${displayId}`"
            @click="whatsAppInfo(product)"
            :disabled="product.available === false"
            class="tw-self-end"
          >
            <fa
              :icon="['fab', 'whatsapp']"
              title="WhatsApp Order"
              style="font-size:1.2em; color:#28AB81;"
            ></fa>
          </div>

          <div
            class="tw-self-end"
            @click="wishList(product)"
            style="cursor: pointer"
          >
            <b v-if="favorite.find((item) => item._id === product._id)">
              <fa
                icon="heart"
                title="favorite"
                class="tw-text-red-600"
                style="font-size:1.2em;"
              ></fa>
            </b>
            <b v-else>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="tw-h-6 tw-w-6 tw-text-red-600"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>
            </b>
          </div>
          <!-- start modal -->
          <AddToCart
            :product="product"
            :active-product="activeProduct"
            :selected-quantity="selectedQuantity"
            :price="price"
            :display-id="displayId"
          ></AddToCart>
          <!-- end modal -->
          <!-- start whatsApp modal -->
          <WhatsAppOrder
            :product="product"
            :active-product="activeProduct"
            :selected-quantity="selectedQuantity"
            :price="price"
            :display-id="displayId"
          ></WhatsAppOrder>
          <!-- end whatsApp modal -->
        </div>
      </div>
      <!-- end products column-->
    </div>
    <!-- end products row -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
const AddToCart = () => import('~/components/Home/AddCart');
const WhatsAppOrder = () => import('~/components/Home/WpOrder');

export default {
  components: {
    AddToCart,
    WhatsAppOrder,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    displayId: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      activeProduct: '',
      price: {},
      selectedQuantity: null,
    };
  },
  computed: {
    ...mapState({
      favorite: (state) => state.favorite.favorite,
    }),
  },
  methods: {
    productInfo(product) {
      let kivy = product.quantities[0];
      this.activeProduct = product;
      this.price = kivy;
    },
    whatsAppInfo(product) {
      let kivy = product.quantities[0];
      this.activeProduct = product;
      this.price = kivy;
    },
    wishList(product) {
      let found = this.favorite.find((record) => record._id === product._id);
      if (found) {
        this.$store.commit('favorite/removeFromFavorite', product);
      } else {
        this.$store.commit('favorite/addToFavorite', product);
        this.$toast.success('Added to favorites');
      }
    },
  },
};
</script>

<style scoped>
.modal-open .modal,
.modal-btn:focus {
  outline: none;
}

i.heart {
  color: #ff4081;
}

.cart-modal {
  border-radius: 0;
}

.ribbon {
  width: 150px;
  height: 24px;
  margin-left: -50px;
  margin-top: 15px;
  -ms-transform: rotate(-45deg); /* IE 9 */
  -webkit-transform: rotate(-45deg); /* Safari prior 9.0 */
  transform: rotate(-45deg); /* Standard syntax */
}

@media screen and (max-width: 481px) {
  .product-quantity {
    font-size: 0.8em;
  }
}
</style>
