<template>
  <div>
    <section class="tw-pt-16 lg:tw-pt-32 tw-px-2" id="jumbo">
      <div class="tw-container tw-mx-auto tw-py-5">
        <div v-if="items.length > 0">
          <h5 class="tw-uppercase">Checkout Details</h5>
          <div class="card tw-my-3 tw-rounded-0 tw-p-2">
            <ValidationObserver v-slot="{ handleSubmit }">
              <form action="#" @submit.prevent="handleSubmit(onSubmit)">
                <div class="row">
                  <div class="col-sm-9 border-right border-secondary">
                    <div class="row">
                      <div class="form-group col-sm-6">
                        <ValidationProvider
                          name="firstName"
                          rules="required|alpha"
                          v-slot="{ errors }"
                        >
                          <label for="firstName"
                            >First name<small class="tw-text-red-600"
                              >*</small
                            ></label
                          >
                          <input
                            type="text"
                            class="form-control tw-rounded-0"
                            id="firstName"
                            v-model="defaultData.firstName"
                            placeholder="First name"
                          />
                          <small class="tw-text-red-600">{{ errors[0] }}</small>
                        </ValidationProvider>
                      </div>

                      <div class="form-group col-sm-6">
                        <label for="lastName">Last name</label>
                        <input
                          type="text"
                          class="form-control tw-rounded-0"
                          id="lastName"
                          v-model="defaultData.lastName"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <!-- end row -->
                    <div class="row">
                      <div class="form-group col-sm-6">
                        <ValidationProvider
                          name="phone"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <label for="phone"
                            >Phone Number<small class="tw-text-red-600"
                              >*</small
                            ></label
                          >
                          <input
                            type="text"
                            id="phone"
                            class="form-control tw-rounded-0"
                            v-model="defaultData.phone"
                            placeholder="Phone Number"
                          />
                          <small class="tw-text-red-600">{{ errors[0] }}</small>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-sm-6">
                        <ValidationProvider
                          name="email"
                          rules="required|email"
                          v-slot="{ errors }"
                        >
                          <label for="email"
                            >Email Address<small class="tw-text-red-600"
                              >*</small
                            ></label
                          >
                          <input
                            type="email"
                            id="email"
                            class="form-control tw-rounded-0"
                            v-model="defaultData.email"
                            placeholder="Email Address"
                          />
                          <small class="tw-text-red-600">{{ errors[0] }}</small>
                        </ValidationProvider>
                      </div>
                    </div>
                    <!-- end row -->
                    <div class="row">
                      <div class="form-group col-sm-12">
                        <ValidationProvider
                          name="location"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <label for="location"
                            >Delivery Address<small class="tw-text-red-600"
                              >*</small
                            ></label
                          >
                          <input
                            type="text"
                            id="location"
                            class="form-control tw-rounded-0"
                            v-model="defaultData.location"
                            placeholder="eg. Ngong road ,4th avenue, House no. 3"
                          />
                          <small class="tw-text-red-600">{{ errors[0] }}</small>
                        </ValidationProvider>
                      </div>
                    </div>
                    <!-- end row -->
                    <div class="row">
                      <div class="form-group col-sm-12">
                        <label for="instructions">Order Instructions </label>
                        <textarea
                          class="form-control tw-rounded-0"
                          id="instructions"
                          v-model="instructions"
                          placeholder=""
                        ></textarea>
                        <small class="text-info"
                          ><i class="fas fa-info-circle"></i> please add
                          information in case ordering for someone</small
                        >
                      </div>
                    </div>
                    <!-- end row -->
                    <div class="form-group">
                      <h6>* Payment Option</h6>
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          id="cash"
                          name="paymentOption"
                          v-model="defaultData.paymentOption"
                          value="cash"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="cash"
                          >Cash on Delivery</label
                        >
                      </div>
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          id="mpesa"
                          name="paymentOption"
                          value="mpesa"
                          v-model="defaultData.paymentOption"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="mpesa"
                          >MPESA</label
                        >
                      </div>
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          id="swiping"
                          name="paymentOption"
                          value="swiping"
                          v-model="defaultData.paymentOption"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="swiping"
                          >Swiping Machine(+2.5% processing fee)</label
                        >
                      </div>
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          id="online"
                          name="paymentOption"
                          value="card"
                          v-model="defaultData.paymentOption"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="online"
                          >Pay Online(Mastercard,Visa, Union Pay)</label
                        >
                      </div>
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          id="paypal"
                          name="paymentOption"
                          value="paypal"
                          v-model="defaultData.paymentOption"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="paypal"
                          >PayPal</label
                        >
                      </div>
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          id="remitly"
                          name="paymentOption"
                          value="remitly"
                          v-model="defaultData.paymentOption"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="remitly"
                          >Remitly</label
                        >
                      </div>
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          id="world_remit"
                          name="paymentOption"
                          value="world_remit"
                          v-model="defaultData.paymentOption"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="world_remit"
                          >World Remit</label
                        >
                      </div>
                      <div class="custom-control custom-radio">
                        <input
                          type="radio"
                          id="send_wave"
                          name="paymentOption"
                          value="send_wave"
                          v-model="defaultData.paymentOption"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="send_wave"
                          >Sendwave (UK, US and Canada)</label
                        >
                      </div>
                    </div>
                    <div
                      class="custom-control custom-checkbox border-top mb-2 pt-1"
                      v-if="
                        !isAuthenticated && Object.keys(savedInfo).length === 0
                      "
                    >
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        v-model="info"
                        id="customCheck1"
                      />
                      <label
                        class="custom-control-label text-warning font-weight-bolder"
                        for="customCheck1"
                        >Save information for future orders</label
                      >
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <h5 style="border-bottom: 1px solid #F3F5F9">
                      Cart Totals
                    </h5>
                    <ul class="list-group list-group-flush tw-pl-0">
                      <li class="list-group-item">
                        <span>Subtotal: </span
                        ><strong class="ml-4">{{
                          cartTotal | currency
                        }}</strong>
                      </li>
                      <li class="list-group-item">
                        <span>Discount: </span><span class="tw-ml-4">__</span>
                      </li>
                      <li class="list-group-item">
                        <span>Total: </span
                        ><strong class="tw-ml-4">{{
                          cartTotal | currency
                        }}</strong>
                      </li>
                    </ul>
                    <template v-if="loading">
                      <button
                        class="btn btn-dark btn-block"
                        type="button"
                        disabled
                      >
                        {{ 'Processing Order...' }}
                      </button>
                    </template>
                    <template v-else>
                      <button class="btn btn-dark btn-block" type="submit">
                        {{ 'Place Order' }}
                      </button>
                    </template>
                  </div>
                </div>
              </form>
            </ValidationObserver>
            <!-- end row -->
            <hr />
            <div class="tw-text-left d-inline-block">
              <nuxt-link to="/" class="btn btn-info btn-sm tw-uppercase"
                ><fa icon="arrow-left"></fa>
                Continue Shopping
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="card tw-my-3 tw-rounded-0" v-else>
          <div class="card-header tw-bg-gray-400 tw-text-white">
            <h5>Your cart is empty!</h5>
          </div>
          <div class="card-body tw-p-2">
            <nuxt-link
              to="/"
              class="btn btn-info btn-sm tw-uppercase float-left"
            >
              <fa icon="arrow-left"></fa>
              Continue Shopping
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import cartTotal from '@/mixins/cartTotal';
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';

export default {
  mixins: [cartTotal],
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      loading: false,
      quantity: null,
      instructions: null,
      info: null,
      defaultData: {},
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    ...mapState({
      items: (state) => state.cart.cart,
      savedInfo: (state) => state.savedInfo,
    }),
  },
  created() {
    this.defaultFormValues();
  },
  methods: {
    defaultFormValues() {
      if (this.isAuthenticated) {
        this.defaultData = {
          email: this.loggedInUser.email,
          phone: this.loggedInUser.phone,
          location: this.loggedInUser.location,
          firstName: this.loggedInUser.name.split(/\s+/)[0] || '',
          lastName: this.loggedInUser.name.split(/\s+/)[1] || '',
          paymentOption: 'cash',
        };
      } else if (
        !this.isAuthenticated &&
        Object.keys(this.savedInfo).length !== 0
      ) {
        this.defaultData = {
          email: this.savedInfo.email,
          phone: this.savedInfo.phone,
          location: this.savedInfo.location,
          firstName: this.savedInfo.name.split(/\s+/)[0] || '',
          lastName: this.savedInfo.name.split(/\s+/)[1] || '',
          paymentOption: 'cash',
        };
      } else {
        this.defaultData = {
          email: null,
          phone: null,
          location: null,
          firstName: null,
          lastName: null,
          paymentOption: 'cash',
        };
      }
    },
    async onSubmit() {
      this.loading = true;
      try {
        const infoData = {
          name: this.defaultData.firstName + ' ' + this.defaultData.lastName,
          phone: this.defaultData.phone,
          email: this.defaultData.email,
          location: this.defaultData.location,
        };
        const formData = {
          name: this.defaultData.firstName + ' ' + this.defaultData.lastName,
          phone: this.defaultData.phone,
          email: this.defaultData.email,
          location: this.defaultData.location,
          instructions: this.instructions,
          total: this.cartTotal,
          products: this.items,
          paymentOption: this.defaultData.paymentOption,
          pending: true,
          rejected: false,
          handled: false,
          approved: false,
          confirmed: false,
          amountPaid: 0,
          paid: false,
          scheduled: false,
          shipped: false,
          discountApplied: 0,
          orderCategory: 'Home delivery',
          medium: 'site',
          deliveryDate: '',
        };
        if (this.info === true) {
          this.$store.commit('setInfo', infoData);
        }
        await this.$http
          .$post('place-order', JSON.stringify(formData), {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          })
          .then((response) => {
            console.log(response);
          });
        this.loading = false;
        this.$router.push('/order');
        this.$store.commit('cart/emptyCart');
      } catch (err) {
        this.loading = false;
        console.log(err.response.data.message);
      }
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
  head() {
    const meta = {
      metadescription:
        'Buy products online from Avimar International. Enjoy wide varieties, discounted prices, free & fast deliveries in less than 30 mins',
      title: 'Avimar International - Click it, Own It',
    };
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

</style>
