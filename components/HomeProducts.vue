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
            class="ribbon tw-absolute tw-top-0 tw-left-0 tw-bg-[#277fbe] tw-text-white tw-font-medium tw-text-xs tw-text-center tw-uppercase tw-p-1 tw-shadow-md tw-shadow-[#277fbe]/30 tw-whitespace-no-wrap"
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
          class="tw-flex tw-space-x-4 tw-px-2 tw-py-2"
          style="font-family: 'Roboto', sans-serif;margin-top: 5px;"
        >
        <div class="tw-flex-auto tw-flex tw-space-x-4">
          <div
              @click="addToCart"
              class="tw-inline-flex tw-items-center tw-rounded-full tw-border tw-border-transparent tw-bg-[#277fbe] tw-px-4 tw-py-1.5 tw-text-xs tw-font-medium tw-text-white tw-shadow-sm hover:tw-bg-[#1b88d6]focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2"
            >
            Buy now
          </div>
          <div
            v-b-modal="`${product.url}-${displayId}`"
            @click="productInfo(product)"
            :disabled="product.available === false"
            class="tw-inline-flex tw-items-center tw-rounded-full tw-border tw-border-transparent tw-px-3 tw-py-1.5 tw-text-xs tw-font-medium tw-text-gray-800 hover:tw-text-white tw-shadow-sm hover:tw-bg-[#1b88d6] focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2"
          >
            Add to cart
          </div>
        </div>

          <div
            class="tw-flex-none tw-flex tw-items-center tw-justify-center tw-w-9 tw-h-9 tw-rounded-full tw-bg-red-50"
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
          <!-- <WhatsAppOrder
            :product="product"
            :active-product="activeProduct"
            :selected-quantity="selectedQuantity"
            :price="price"
            :display-id="displayId"
          ></WhatsAppOrder> -->
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
    addToCart() {
      this.item = {
        productName: this.activeProduct.name,
        productImage: this.activeProduct.image,
        productImageUrl: this.product.image_url,
        productId: this.activeProduct._id,
        productQuantity: this.quantity,
        productUnit: this.price.quantity,
        productType: this.activeProduct.category,
        price: this.price.discount,
        subTotal: this.price.discount * this.quantity,
      };
      let found = this.cart.find(
        (product) => product.productId === this.item.productId
      );
      if (found) {
        this.$toast.info('Item already in cart');
        this.$bvModal.hide(`${this.activeProduct.url}`);
      } else if (this.item.productQuantity < 1) {
        this.$toast.warning('Quantity must be equal or greater than 1');
        this.$bvModal.hide(`${this.activeProduct.url}`);
      } else {
        this.$store.commit('cart/addToCart', this.item);
        this.$bvModal.hide(`${this.activeProduct.url}`);
        this.$toast.success('Added to cart');
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
