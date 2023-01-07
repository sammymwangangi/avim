<template>
  <div>
    <section class="tw-pt-16 lg:tw-pt-32">
      <div class="container my-3 py-5">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6">
            <h4 class="text-success"><strong>Login</strong></h4>
            <b-alert
              show="show"
              variant="danger"
              dismissible
              v-if="apiErrors.length > 0"
            >
              <p>{{ apiErrors }}</p>
            </b-alert>
            <div
              class="card justify-content-center my-3 rounded-0 p-4 shadow"
              style="border-left:3px solid #EC2326"
            >
              <ValidationObserver v-slot="{ handleSubmit }">
                <form action="#" @submit.prevent="handleSubmit(loginUser)">
                  <div class="form-group">
                    <ValidationProvider
                      name="email"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <label
                        for="email"
                        class="tw-text-sm tw-font-medium tw-text-gray-700 tw-block tw-mb-2"
                        >Email<small class="text-danger">*</small></label
                      >
                      <input
                        type="email"
                        class="form-control tw-bg-white tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-px-2 tw-py-4"
                        id="email"
                        v-model="email"
                        placeholder="Enter email"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <ValidationProvider
                      name="password"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <label
                        for="password"
                        class="tw-text-sm tw-font-medium tw-text-gray-700 tw-block tw-mb-2"
                        >Password<small class="text-danger">*</small></label
                      >
                      <input
                        type="password"
                        class="form-control tw-bg-white tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-px-2 tw-py-4"
                        id="password"
                        v-model="password"
                        placeholder="Enter password"
                      />
                      <small class="text-danger">{{ errors[0] }}</small>
                    </ValidationProvider>
                  </div>
                  <button
                    type="submit"
                    class="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center"
                  >
                    {{ loading ? 'Processing...' : 'Login' }}
                  </button>
                  <p
                    class="tw-mt-2 tw-text-sm tw-text-gray-500 tw-no-underline"
                  >
                    Don't have an account?
                    <nuxt-link to="/account/register" class="tw-no-underline"
                      >Register here</nuxt-link
                    >
                  </p>
                </form>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import { ValidationObserver } from 'vee-validate';

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      email: null,
      password: null,
      apiErrors: [],
      loading: false,
    };
  },
  methods: {
    async loginUser() {
      const loginData = {
        email: this.email,
        password: this.password,
      };
      this.loading = true;
      try {
        let response = await this.$auth.loginWith('local', { data: loginData });
        this.loading = false;
        this.$router.push('/account/dashboard');
        this.$toast.success('Login successful!');
      } catch (err) {
        this.loading = false;
        this.apiErrors = err.response.data.message;
      }
    },
  },
  async asyncData({ $http, params }) {
    try {
      const meta = await $http
        .$get(`metas/get-by-category/login`)
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
<style>

</style>
