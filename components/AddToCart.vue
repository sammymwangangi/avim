<template>
  <b-modal
    :id="`${product.url}`"
    :ref="`${product.url}`"
    :title="`${activeProduct.name}`"
    title-class="tw-capitalize"
    @hidden="resetQuantity"
    centered
    hide-footer
    class="cart-modal"
  >
    <template #modal-header="{ close }">
      <!-- Emulate built in modal header close button action -->
      <span style="cursor:pointer;" @click="close()">
        <fa icon="times" class="text-dark"></fa>
      </span>
      <h5 class="">{{ activeProduct.name }}</h5>
    </template>
    <div class="row pb-2">
      <div class="col-4 col-xs-6 col-sm-4 col-md-4 col-lg-4">
        <img
          :src="`${activeProduct.image_url}`"
          class="img-fluid"
          id="modal-image"
          alt="product"
        />
      </div>
      <!-- end image column-->
      <div class="col-8 col-xs-6 col-sm-8 col-md-8 col-lg-8">
        <div class="form-group">
          <label for="quantity">Quantity:</label>
          <input
            type="number"
            min="1"
            id="quantity"
            v-model="quantity"
            class="form-control rounded-0"
            value="1"
          />
        </div>
        <div class="form-group">
          <label for="productQuantity" class="sr-only">Product Quantity</label>
          <select
            class="form-control rounded-0"
            id="productQuantity"
            @change="onChange($event)"
            v-model="price"
          >
            <option
              v-for="(quantity, index) in product.quantities"
              :value="quantity"
              :key="index"
            >
              {{ quantity.quantity }} @ {{ quantity.discount }}
            </option>
          </select>
        </div>
        <small style="font-weight: bold"
          >Subtotal :<em class="text-danger">{{
            (price.discount * quantity) | currency
          }}</em></small
        >
        <button
          type="button"
          class=" btn btn-sm btn-block btn-dark rounded-0"
          @click="addToCart"
        >
          Add To Cart
        </button>
        <div class="mt-2">
          <button
            class="btn btn-danger btn-sm rounded-0 float-right"
            type="button"
            @click="$bvModal.hide(`${product.url}`)"
          >
            <fa icon="times"></fa>
          </button>
        </div>
      </div>
      <!-- end image column-->
    </div>
    <!-- end row -->
  </b-modal>
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
    selectedQuantity: {
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
    onChange(event) {
      console.log(event.target.value);
    },
    resetQuantity() {
      this.quantity = 1;
    },
    // Add to cart
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
