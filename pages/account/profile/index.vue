<template>
  <div>
    <section class="tw-pt-16 lg:tw-pt-32">
      <div class="container py-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <nuxt-link to="/account/dashboard">Dashboard</nuxt-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Profile</li>
          </ol>
        </nav>
        <div class="row justify-content-center">
          <div class="col-12">
            <h5 class="text-success"><strong>Profile</strong></h5>
            <div
              class="card justify-content-center my-3 rounded-0 p-4 shadow"
              style="border-left:3px solid #EC2326"
            >
              <div class="row">
                <div class="col-sm-6">
                  <h6>Info</h6>
                  <ul class="list-group clearfix">
                    <li
                      class="tw-flex tw-items-center tw-space-x-2 list-group-item"
                    >
                      <svg
                        class="tw-w-6 tw-h-6 tw-text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                      <span
                        class="tw-text-sm tw-font-medium tw-text-gray-700 tw-block"
                        >Name:
                      </span>
                      <span>{{ loggedInUser.name || '' }}</span>
                    </li>
                    <li
                      class="tw-flex tw-items-center tw-space-x-2 list-group-item"
                    >
                      <svg
                        class="tw-w-6 tw-h-6 tw-text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span
                        class="tw-text-sm tw-font-medium tw-text-gray-700 tw-block"
                        >Email:
                      </span>
                      <span>{{ loggedInUser.email || '' }}</span>
                    </li>
                    <li
                      class="tw-flex tw-items-center tw-space-x-2 list-group-item"
                    >
                      <svg
                        class="tw-w-6 tw-h-6 tw-text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                      <span
                        class="tw-text-sm tw-font-medium tw-text-gray-700 tw-block"
                        >Phone Number:
                      </span>
                      <span>{{ loggedInUser.phone || '' }}</span>
                    </li>
                    <li
                      class="tw-flex tw-items-center tw-space-x-2 list-group-item"
                    >
                      <svg
                        class="tw-w-6 tw-h-6 tw-text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      <span
                        class="tw-text-sm tw-font-medium tw-text-gray-700 tw-block"
                        >Address:
                      </span>
                      <span>{{ loggedInUser.location || '' }}</span>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-6 mt-sm-2">
                  <h6 class="text-danger border-bottom pb-2 font-weight-bolder">
                    Update info
                  </h6>
                  <ValidationObserver v-slot="{ handleSubmit }">
                    <form action="#" @submit.prevent="handleSubmit(onSubmit)">
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <ValidationProvider
                            name="firstName"
                            rules="required|alpha_spaces"
                            v-slot="{ errors }"
                          >
                            <label
                              class="tw-text-sm tw-font-medium tw-text-gray-700 tw-block tw-mb-2"
                              for="firstName"
                              >First Name<small class="text-danger"
                                >*</small
                              ></label
                            >
                            <input
                              type="text"
                              class="form-control"
                              v-model="userData.firstName"
                              placeholder="Enter First Name"
                              id="firstName"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </ValidationProvider>
                        </div>
                        <div class="form-group col-md-6">
                          <label
                            class="tw-text-sm tw-font-medium tw-text-gray-700 tw-block tw-mb-2"
                            for="lastName"
                            >LastName<small class="text-danger">*</small></label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="lastName"
                            v-model="userData.lastName"
                            placeholder="Enter Last Name"
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <div class="form-group">
                            <label
                              class="tw-text-sm tw-font-medium tw-text-gray-700 tw-block tw-mb-2"
                              for="address"
                              >Address</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="address"
                              placeholder="1234 Main St"
                              v-model="userData.address"
                            />
                          </div>
                        </div>
                        <div class="form-group col-md-6">
                          <div class="form-group">
                            <label
                              class="tw-text-sm tw-font-medium tw-text-gray-700 tw-block tw-mb-2"
                              for="town"
                              >Town of residence</label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="town"
                              placeholder="Nairobi"
                              v-model="userData.location"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <ValidationProvider
                            name="email"
                            rules="required|email"
                            v-slot="{ errors }"
                          >
                            <label
                              class="tw-text-sm tw-font-medium tw-text-gray-700 tw-block tw-mb-2"
                              for="email"
                              >Email<small class="text-danger">*</small></label
                            >
                            <input
                              type="email"
                              class="form-control"
                              id="email"
                              v-model="userData.email"
                              placeholder="Enter valid email"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </ValidationProvider>
                        </div>
                        <div class="form-group col-md-6">
                          <ValidationProvider
                            name="phone"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            <label
                              class="tw-text-sm tw-font-medium tw-text-gray-700 tw-block tw-mb-2"
                              for="phone"
                              >Phone Number<small class="text-danger"
                                >*</small
                              ></label
                            >
                            <input
                              type="text"
                              class="form-control"
                              id="phone"
                              v-model="userData.phone"
                              placeholder="Enter Phone number"
                            />
                            <small class="text-danger">{{ errors[0] }}</small>
                          </ValidationProvider>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-success mb-2">
                        Update Info
                      </button>
                    </form>
                  </ValidationObserver>
                </div>
              </div>
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
import { mapGetters } from 'vuex';

export default {
  middleware: 'auth',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      userData: {},
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  created() {
    this.defaultFormValues();
  },
  methods: {
    defaultFormValues() {
      this.userData = {
        email: this.loggedInUser.email,
        phone: this.loggedInUser.phone,
        location: this.loggedInUser.location,
        address: this.loggedInUser.address,
        firstName: this.loggedInUser.name.split(/\s+/)[0] || '',
        lastName: this.loggedInUser.name.split(/\s+/)[1] || '',
      };
    },
    async onSubmit() {
      const formData = {
        name: this.userData.firstName + ' ' + this.userData.lastName,
        phone: this.userData.phone,
        email: this.userData.email,
        location: this.userData.location,
        address: this.userData.address,
        role: 'user',
      };
      await this.$http
        .$put(
          `users/update/${this.loggedInUser._id}`,
          JSON.stringify(formData),
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          this.$auth.setUser(formData);
          window.location.reload(true);
          this.$toast.success('Profile updated successfully!');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async asyncData({ $http }) {
    try {
      const meta = await $http
        .$get(`/metas/get-by-category/profile`)
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
