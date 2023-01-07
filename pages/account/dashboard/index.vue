<template>
  <div>
    <section class="tw-pt-16 lg:tw-pt-32">
      <div class="container py-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
          </ol>
        </nav>
        <h5 class="text-success"><strong>Welcome {{ loggedInUser.name || 'auth user not found' }} </strong></h5>
        <div class="card justify-content-center my-3 rounded-0 p-4 shadow" style="border-left:3px solid #EC2326">
          <div class="row">
            <div class="col-sm-4">
              <a href="#" class="text-decoration-none">
                <div class="card text-white  text-center mb-3" style="max-width: 18rem;">
                  <div class="card-header bg-primary"><fa icon="list"></fa>Total Orders</div>
                  <div class="card-body">
                    <h2 class="card-title text-dark font-weight-bold">{{ orders.length || 0 }}</h2>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-sm-4">
              <nuxt-link to="/account/ratings/" class="text-decoration-none">
                <div class="card text-white  text-center mb-3 clearfix" style="max-width: 18rem;">
                  <div class="card-header bg-success"><fa icon="star"></fa> Total reviews</div>
                  <div class="card-body">
                    <h2 class="card-title text-dark font-weight-bold">{{ ratings.length || 0 }}</h2>
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="col-sm-4">
              <nuxt-link to="/favorite" class="text-decoration-none">
                <div class="card text-white  text-center mb-3 clearfix" style="max-width: 18rem;">
                  <div class="card-header bg-warning"><fa icon="heart"></fa> Total Wishlist items</div>
                  <div class="card-body">
                    <h2 class="card-title text-dark font-weight-bold">{{ favorites.length || 0 }}</h2>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div><!-- end stats -->
          <hr>
          <h5>My recent Orders</h5>
          <div class="card-body table-responsive">
            <table id="basic-datatable" class="text-center table table-bordered table-hover ">
              <thead class="thead-light">
              <tr>
                <th>Order No.</th>
                <th>My Location</th>
                <th>Placed On</th>
                <th>Total Amount</th>
                <th>Products</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="order in orders" :key="order._id">
                <td><strong class="text-danger">#{{ order.orderNo || '' }}</strong></td>
                <td>{{ order.location || '' }}</td>
                <td>{{ order.placedOn || '' }}</td>
                <td>{{ order.total |currency }}</td>
                <td>
                  <span class="badge badge-light p-2 d-inline-block" v-for="(product,key) in order.products" :key="key">
                    <b class="text-primary">{{ product.productQuantity }}</b>-{{
                      product.productName |capitalize
                    }},{{ product.productUnit }}
                                       </span>
                </td>
                <td>
                  <button class="btn btn-primary btn-sm m-1" v-b-modal="`wp-${order._id}`"><fa
                      icon="pen"></fa> Re-Order
                  </button>
                </td>
                <div>
                  <b-modal :id="`wp-${order._id}`" :ref="`${order._id}`" hide-footer>
                    <template #modal-title>
                      Order No. <code>{{ order.orderNo }}</code>
                    </template>
                    <div class="d-block">
                      <p>Are you sure you want to re-order this drink?</p>
                    </div>
                    <b-button class="mt-3 ml-3" variant="success" small @click="reOrder(order)">Ok</b-button>
                    <b-button class="mt-3 ml-3" variant="danger" small @click="$bvModal.hide(`wp-${order._id}`)">
                      Cancel
                    </b-button>
                  </b-modal>
                </div>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {mapGetters, mapState} from 'vuex'

export default {
  middleware: 'auth',
  data() {
    return {
      orders: [],
      ratings: [],
    }

  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    ...mapState({
      favorites: state => state.favorite.favorite,
    }),
  },
  mounted() {
    this.fetchOrders()
    this.fetchRatings()
  },
  methods: {
    async reOrder(order) {
      const formData = {
        name: order.name,
        phone: order.phone,
        email: order.email,
        location: order.location,
        instructions: order.instructions,
        total: order.total,
        products: order.products,
        paymentOption: order.paymentOption,
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
        orderCategory: "Home delivery",
        medium: "site",
        deliveryDate: ""
      }
      await this.$http.$post('place-order', JSON.stringify(formData),
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }
          }).then((response) => {
        console.log(response)
        this.$bvModal.hide(`wp-${order._id}`);
        this.$toast.success('Order successful!');
      }).catch((error) => {
        console.log(error)
      })
    },
    async fetchOrders() {
      await this.$http.$get('my-orders', {
        headers: {
          'Authorization': this.$auth.getToken('local'),
          'Content-Type': 'application/json',
        }
      }).then((response) => this.orders = response.result)
    },
    async fetchRatings() {
      await this.$http.$get('ratings/my-reviews', {
        headers: {
          'Authorization': this.$auth.getToken('local'),
          'Content-Type': 'application/json',
        }
      }).then((response) => this.ratings = response.result)
    },
  },
    async asyncData({ $http }) {
    try {
      const meta = await $http
        .$get(`/metas/get-by-category/dashboard`)
        .then((response) => response.result);
      return { meta };
    } catch (err) {
      return { meta: { } };
    }
  },

  head() {
    const meta =this.meta
    return {
      title: meta.title,
      meta: [
        {hid: 'description', name: 'description', content: meta.metadescription},
        {hid: 'og:title', name: 'og:title', content: meta.title},
        {hid: 'og:description', name: 'og:description', content: meta.metadescription},
        {hid: 'og:type', name: 'og:type', content: 'website'}
      ],
    }
  },
}
</script>
<style>

</style>
