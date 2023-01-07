<template>
  <b-modal :id="`wp-${product.url}-${displayId}`" :ref="`wp-${product.url}-${displayId}`"
           title-class="text-capitalize text-white" modal-class="rounded-0"
           @hidden="resetWhatsApp" centered hide-footer  header-class="header-bg" style="background-color: #075E54;">
    <template #modal-header="{ close }" style="background-color: #075E54;">
      <!-- Emulate built in modal header close button action -->
      <span style="cursor:pointer;"  @click="close()">
       <fa icon="times" class="text-white"></fa>
      </span>
      <h5 class="text-white">Order Via WhatsApp</h5>
    </template>
    <h6 class="text-success">{{ product.name | capitalize }}</h6>
    <div class="form-group">
      <label for="location">Delivery Location<small class="text-danger">*</small></label>
      <input type="text" id="location" v-model="location" class="form-control">
    </div>
    <div class="row pb-2">
      <div class="form-group col-6 col-md">
        <label for="quantity">Quantity:</label>
        <input type="number" min="1" id="quantity" v-model="quantity" class="form-control"
               value="1">
      </div>
      <div class="form-group col-6 col-md">
        <label for="productQuantity">Select Size</label>
        <select class="form-control" id="productQuantity" @change="onChange($event)" v-model="price">
          <option v-for="(quantity,index) in product.quantities" :value="quantity"
                  :key="index">
            {{ quantity.quantity }} @ {{ quantity.discount }}
          </option>
        </select>
      </div>
    </div>
    <small style="font-weight: bold">Subtotal :<em
        class="text-danger border-bottom ">{{ price.discount * quantity | currency }}</em></small>
    <button type="button" class=" btn btn-dark float-right" @click="makeOrder">
      <i class="fas fa-send"></i>Send
    </button>
    <div class="border-bottom clearfix">&nbsp;</div>
    <div class="mt-2 clearfix">
      <button class="btn btn-danger btn-sm  float-right" type="button"
              @click="$bvModal.hide(`wp-${product.url}-${displayId}`)"><fa icon="times"></fa>
      </button>
    </div>
    <!-- end row -->
  </b-modal>
</template>

<script>
import {mapState} from "vuex";

export default {
  props: {
    product: {
      required: true
    },
    activeProduct: {
      required: true
    },
    price: {
      required: true
    },
    selectedQuantity: {
      required: true
    },
    displayId: {
      required: true
    },
  },
  data() {
    return {
      quantity: 1,
      item: {},
      location:'',
      phoneNumber:'+254731722682',
    }
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart,
    }),
  },
  methods: {
    onChange(event){
      console.log(event.target.value)
    },
    // Make Order
    makeOrder() {
      if (this.location === '') {
        this.$toast.warning('Location cannot be empty');
        this.$bvModal.hide(`wp-${this.activeProduct.url}-${this.displayId}`);
      } else if (this.quantity < 1 || this.quantity === '') {
        this.$toast.warning('Quantity cannot be less than 1');
        this.$bvModal.hide(`wp-${this.activeProduct.url}-${this.displayId}`);
      } else {
        let msg = `Hello *Avimar International*, I would like `
        let url
        if (this.quantity > 1) {
          let total=(this.quantity)*(this.price.discount);
          let more = `to order ${this.quantity} piece(s) of ${this.activeProduct.name} ${this.price.quantity} at Ksh ${total} to be delivered to ${this.location}.`
          msg += more
        } else {
          msg += `to order  ${this.quantity} piece(s) of ${this.activeProduct.name} ${this.price.quantity} at Ksh ${this.price.discount} to be delivered to ${this.location}.`
        }
        url = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${msg}`
        let win = window.open(url, '_blank')
        win.focus()
      }
    },
    resetWhatsApp() {
      this.quantity = 1;
      this.location = '';
    },
  },
}
</script>

<style>
.header-bg{
  background:#075E54;;
}
.modal-backdrop
{
  opacity:0.3 !important;
}
.modal {
  border-radius: 0;
  border: 0;
}


</style>
