<template>
  <div>
    <div
      class="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 lg:tw-grid-cols-6 tw-gap-2"
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
          class="tw-text-gray-500 tw-text-left tw-capitalize tw-font-thin tw-text-xs tw-italic tw-w-auto"
        >
          <template v-if="Object.keys(product.subcategory).length !== 0">{{
            product.subcategory[0].replace(/-/g, ' ')
          }}</template>
          <template>{{ '' }}</template>
          | {{ product.percentage }}%
        </div>
        <div class="tw-text-left">
          <nuxt-link
            :to="`/product/${product.url}`"
            class="tw-no-underline tw-text-left"
          >
            <div
              class="hover:tw-z-50 tw-text-gray-600 tw-font-semibold tw-text-sm tw-capitalize tw-line-clamp-2"
              :title="product.name"
            >
              {{ product.name | truncate(20, '...') }}
            </div>
            <ul
              class="list-unstyled tw-space-y-1 tw-text-xs"
              v-for="quantity in product.quantities"
              :key="quantity.quantity"
            >
              <li
                class="tw-flex tw-justify-start"
                style="font-family: 'Roboto', sans-serif;margin-bottom:-1rem"
              >
                <div class="tw-text-gray-800">{{ quantity.quantity }}</div>
                <span class="tw-font-semibold tw-text-gray-900 tw-ml-2">{{
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
            <fa
              :icon="['fas', 'cart-plus']"
              title="cart"
              style="font-size:1.2em;"
            ></fa>
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
              <fa
                :icon="['far', 'heart']"
                title="favorite"
                class="tw-text-red-600"
                style="font-size:1.2em;;"
              ></fa>
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
