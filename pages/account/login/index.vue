<template>
  <div>
    <!--    <section class="tw-pt-16 lg:tw-pt-32">-->
    <!--      <div class="container my-3 py-5">-->
    <!--        <div class="row justify-content-center">-->
    <!--          <div class="col-12 col-md-6">-->
    <!--            <h4 class="text-success"><strong>Login</strong></h4>-->
    <!--            <b-alert-->
    <!--                show="show"-->
    <!--                variant="danger"-->
    <!--                dismissible-->
    <!--                v-if="apiErrors.length > 0"-->
    <!--            >-->
    <!--              <p>{{ apiErrors }}</p>-->
    <!--            </b-alert>-->
    <!--            <div-->
    <!--                class="card justify-content-center my-3 rounded-0 p-4 shadow"-->
    <!--                style="border-left:3px solid #EC2326"-->
    <!--            >-->
    <!--              <ValidationObserver v-slot="{ handleSubmit }">-->
    <!--                <form action="#" @submit.prevent="handleSubmit(loginUser)">-->
    <!--                  <div class="form-group">-->
    <!--                    <ValidationProvider-->
    <!--                        name="email"-->
    <!--                        rules="required"-->
    <!--                        v-slot="{ errors }"-->
    <!--                    >-->
    <!--                      <label-->
    <!--                          for="email"-->
    <!--                          class="tw-text-sm tw-font-medium tw-text-gray-700 tw-block tw-mb-2"-->
    <!--                      >Email<small class="text-danger">*</small></label-->
    <!--                      >-->
    <!--                      <input-->
    <!--                          type="email"-->
    <!--                          class="form-control tw-bg-white tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-px-2 tw-py-4"-->
    <!--                          id="email"-->
    <!--                          v-model="email"-->
    <!--                          placeholder="Enter email"-->
    <!--                      />-->
    <!--                      <small class="text-danger">{{ errors[0] }}</small>-->
    <!--                    </ValidationProvider>-->
    <!--                  </div>-->
    <!--                  <div class="form-group">-->
    <!--                    <ValidationProvider-->
    <!--                        name="password"-->
    <!--                        rules="required"-->
    <!--                        v-slot="{ errors }"-->
    <!--                    >-->
    <!--                      <label-->
    <!--                          for="password"-->
    <!--                          class="tw-text-sm tw-font-medium tw-text-gray-700 tw-block tw-mb-2"-->
    <!--                      >Password<small class="text-danger">*</small></label-->
    <!--                      >-->
    <!--                      <input-->
    <!--                          type="password"-->
    <!--                          class="form-control tw-bg-white tw-border tw-border-gray-300 tw-text-gray-900 sm:tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-px-2 tw-py-4"-->
    <!--                          id="password"-->
    <!--                          v-model="password"-->
    <!--                          placeholder="Enter password"-->
    <!--                      />-->
    <!--                      <small class="text-danger">{{ errors[0] }}</small>-->
    <!--                    </ValidationProvider>-->
    <!--                  </div>-->
    <!--                  <button-->
    <!--                      type="submit"-->
    <!--                      class="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center"-->
    <!--                  >-->
    <!--                    {{ loading ? 'Processing...' : 'Login' }}-->
    <!--                  </button>-->
    <!--                  <p-->
    <!--                      class="tw-mt-2 tw-text-sm tw-text-gray-500 tw-no-underline"-->
    <!--                  >-->
    <!--                    Don't have an account?-->
    <!--                    <nuxt-link to="/account/register" class="tw-no-underline"-->
    <!--                    >Register here-->
    <!--                    </nuxt-link-->
    <!--                    >-->
    <!--                  </p>-->
    <!--                </form>-->
    <!--              </ValidationObserver>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->

    <div
        class="tw-flex tw-min-h-full tw-flex-col tw-justify-center tw-py-12 sm:tw-px-6 lg:tw-px-8 tw-pt-16 lg:tw-pt-32">
      <div class="sm:tw-mx-auto sm:tw-w-full sm:tw-max-w-md tw-mt-4">
        <h2 class="tw-mt-6 tw-text-center tw-text-3xl tw-font-bold tw-tracking-tight tw-text-gray-900">Sign in to your
          account</h2>
        <p class="tw-mt-2 tw-text-center tw-text-sm tw-text-gray-600">
          Or
          {{ ' ' }}
          <nuxt-link to="/account/register" class="tw-font-medium tw-text-indigo-600 hover:tw-text-indigo-500"
          >Register here
          </nuxt-link
          >
        </p>
        <b-alert
            show="show"
            variant="danger"
            dismissible
            v-if="apiErrors.length > 0"
        >
          <p>{{ apiErrors }}</p>
        </b-alert>
      </div>

      <div class="tw-mt-6 sm:tw-mx-auto sm:tw-w-full sm:tw-max-w-md">
        <div class="tw-bg-white tw-py-8 tw-px-4 tw-shadow sm:tw-rounded-lg sm:tw-px-10">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form class="tw-space-y-6" action="#" @submit.prevent="handleSubmit(loginUser)">
              <div>
                <ValidationProvider
                    name="email"
                    rules="required"
                    v-slot="{ errors }"
                >
                  <label for="email" class="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Email address</label>
                  <div class="tw-mt-1">
                    <input v-model="email" id="email" name="email" type="email" autocomplete="email" required=""
                           class="tw-block tw-w-full tw-appearance-none tw-rounded-md tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-placeholder-gray-400 tw-shadow-sm focus:tw-border-indigo-500 focus:tw-outline-none focus:tw-ring-indigo-500 sm:tw-text-sm"/>
                  </div>
                </ValidationProvider>
              </div>

              <div>
                <ValidationProvider
                    name="password"
                    rules="required"
                    v-slot="{ errors }"
                >
                  <label for="password" class="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Password</label>
                  <div class="tw-mt-1">
                    <input v-model="password" id="password" name="password" type="password"
                           autocomplete="current-password" required=""
                           class="tw-block tw-w-full tw-appearance-none tw-rounded-md tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-placeholder-gray-400 tw-shadow-sm focus:tw-border-indigo-500 focus:tw-outline-none focus:tw-ring-indigo-500 sm:tw-text-sm"/>
                  </div>
                </ValidationProvider>
              </div>

              <div>
                <button type="submit"
                        class="tw-flex tw-w-full tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-bg-indigo-600 tw-py-2 tw-px-4 tw-text-sm tw-font-medium tw-text-white tw-shadow-sm hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2">
                  {{ loading ? 'Processing...' : 'Login' }}
                </button>
              </div>
            </form>
          </ValidationObserver>

          <div class="tw-mt-6">
            <div class="tw-relative">
              <div class="tw-absolute tw-inset-0 tw-flex tw-items-center">
                <div class="tw-w-full tw-border-t tw-border-gray-300"/>
              </div>
              <div class="tw-relative tw-flex tw-justify-center tw-text-sm">
                <span class="tw-bg-white tw-px-2 tw-text-gray-500">Or continue with</span>
              </div>
            </div>

            <div class="tw-mt-6 tw-grid tw-grid-cols-3 tw-gap-3">
              <div>
                <a href="#"
                   class="tw-inline-flex tw-w-full tw-justify-center tw-rounded-md tw-border tw-border-gray-300 tw-bg-white tw-py-2 tw-px-4 tw-text-sm tw-font-medium tw-text-gray-500 tw-shadow-sm hover:tw-bg-gray-50">
                  <span class="tw-sr-only">Sign in with Facebook</span>
                  <svg class="tw-h-5 tw-w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                          d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                          clip-rule="evenodd"/>
                  </svg>
                </a>
              </div>

              <div>
                <a href="#"
                   class="tw-inline-flex tw-w-full tw-justify-center tw-rounded-md tw-border tw-border-gray-300 tw-bg-white tw-py-2 tw-px-4 tw-text-sm tw-font-medium tw-text-gray-500 tw-shadow-sm hover:tw-bg-gray-50">
                  <span class="tw-sr-only">Sign in with Twitter</span>
                  <svg class="tw-h-5 tw-w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
              </div>

              <div>
                <a href="#"
                   class="tw-inline-flex tw-w-full tw-justify-center tw-rounded-md tw-border tw-border-gray-300 tw-bg-white tw-py-2 tw-px-4 tw-text-sm tw-font-medium tw-text-gray-500 tw-shadow-sm hover:tw-bg-gray-50">
                  <span class="tw-sr-only">Sign in with GitHub</span>
                  <svg class="tw-h-5 tw-w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clip-rule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ValidationProvider} from 'vee-validate/dist/vee-validate.full.esm';
import {ValidationObserver} from 'vee-validate';

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
        let response = await this.$auth.loginWith('local', {data: loginData});
        this.loading = false;
        this.$router.push('/account/dashboard');
        this.$toast.success('Login successful!');
      } catch (err) {
        this.loading = false;
        this.apiErrors = err.response.data.message;
      }
    },
  },
  async asyncData({$http, params}) {
    try {
      const meta = await $http
          .$get(`metas/get-by-category/login`)
          .then((response) => response.result);
      return {meta};
    } catch (err) {
      return {meta: {}};
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
        {hid: 'og:title', name: 'og:title', content: meta.title},
        {
          hid: 'og:description',
          name: 'og:description',
          content: meta.metadescription,
        },
        {hid: 'og:type', name: 'og:type', content: 'website'},
      ],
    };
  },
};
</script>
<style>

</style>
