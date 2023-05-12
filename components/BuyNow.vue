<template>
  <div
              @click="addToCart"
              :disabled="product.available == false"
              class="tw-cursor-pointer tw-inline-flex tw-items-center tw-rounded-full tw-border tw-border-transparent tw-bg-[#277fbe] tw-px-4 tw-py-1.5 tw-text-xs tw-font-medium tw-text-white tw-shadow-sm hover:tw-bg-[#1b88d6]focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2"
            >
            Buy now
          </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    product: {
      required: true,
    },
    price: {
      required: true,
    },
    activeProduct: {
      required: true,
    },
  },
  data() {
    return {
      quantity: 1,
      item: {},
    };
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),
  },
  methods: {
    // Add to cart
    addToCart() {
      this.item = {
        productName: this.activeProduct.name,
        productImage: this.activeProduct.image,
        productImageUrl: this.product.image_url,
        productId: this.activeProduct.id,
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
.cart-modal {
  border-radius: 0;
}
@media screen and (max-width: 768px) {
  #modal-image {
    height: 137px;
    width: 137px;
  }
}
</style>
