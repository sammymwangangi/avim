<template>
  <div>
    <section class="tw-pt-16 lg:tw-pt-32">
      <div class="container py-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><nuxt-link to="/account/dashboard">Dashboard</nuxt-link></li>
            <li class="breadcrumb-item active" aria-current="page">Reviews and Ratings</li>
          </ol>
        </nav>
        <div class="card justify-content-center my-3 rounded-0 p-4 shadow" style="border-left:3px solid #EC2326">
          <h5>My ratings and reviews</h5>
           <div class="card-body table-responsive">
            <table id="basic-datatable" class="table table-bordered table-hover ">
              <thead class="thead-light">
              <tr>
                <th>Total Stars</th>
                <th>Review</th>
                <th>Product</th>
                <th>Reviewed On</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="rating in ratings" :key="rating._id">
                <td><strong class="text-danger">{{ rating.stars }}</strong></td>
                <td>{{ rating.review  }}</td>
                <td>
                  {{ rating.product.name |capitalize }}
                </td>
                <td>{{rating.created_at || '' }}</td>
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
import {mapGetters} from 'vuex'

export default {
  middleware: 'auth',
  data() {
    return {
      ratings: [],
    }

  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  mounted() {
    this.fetchRatings()
  },
  methods: {
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
        .$get(`/metas/get-by-category/rating`)
        .then((response) => response.result);
      return { meta };
    } catch (err) {
      return { meta: { } };
    }
  },
  head() {
    const meta = this.meta
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
