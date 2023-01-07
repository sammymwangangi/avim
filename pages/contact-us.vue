<template>
  <div class="tw-pt-16 lg:tw-pt-32 tw-pb-6">
    <div
      class="tw-container tw-mx-auto tw-bg-white tw-py-10 contact_us slide_right"
    >
      <div class="tw-flex tw-flex-col tw-text-center">
        <div class="tw-text-2xl tw-font-semibold tw-py-4">Get In Touch</div>
        <div class="tw-text-sm tw-font-medium tw-py-2">
          Do you want to get in touch? We'd be delighted to hear from you.
          Here's how to get in touch with us.
        </div>
      </div>
      <hr class="tw-text-gray-600 tw-py-2" />
      <div
        class="tw-flex tw-flex-wrap tw-items-center tw-space-x-4 tw-px-4 tw-mb-4 tw-text-center"
      >
        <div class="tw-flex tw-items-center">
          <span class="tw-pr-2">
            <svg
              class="tw-w-6 tw-h-6 tw-text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              ></path>
            </svg>
          </span>
          {{ phone }}
        </div>
        <div class="tw-flex tw-items-center">
          <span class="tw-pr-2">
            <svg
              class="tw-w-6 tw-h-6 tw-text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              ></path>
            </svg>
          </span>
          {{ email }}
        </div>
        <div class="tw-flex tw-items-center">
          <span class="tw-pr-2">
            <svg
              class="tw-w-6 tw-h-6 tw-text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          Nairobi CBD
        </div>
      </div>
      <div
        class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-2 tw-gap-4"
      >
        <div class="tw-px-2 tw-py-2">
          <form @submit.prevent="contactUs">
            <div class="tw-shadow sm:tw-rounded-md sm:tw-overflow-hidden">
              <div class="tw-px-4 tw-py-5 tw-bg-white tw-space-y-6 sm:tw-p-6">
                <div class="tw-grid tw-grid-cols-2 tw-gap-6">
                  <div class="">
                    <label
                      for="name"
                      class="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
                      >Name</label
                    >
                    <input
                      v-model="contact.name"
                      type="text"
                      placeholder="John Doe"
                      class="tw-mt-1 focus:tw-ring-indigo-500 focus:tw-border-indigo-500 tw-block tw-w-full tw-shadow-sm sm:tw-text-sm tw-border-gray-300 tw-rounded-md tw-placeholder-gray-500 tw-placeholder-opacity-50"
                    />
                  </div>

                  <div class="">
                    <label
                      for="email"
                      class="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
                      >Your Email</label
                    >
                    <input
                      v-model="contact.email"
                      type="email"
                      placeholder="you@example.com"
                      class="tw-mt-1 focus:tw-ring-indigo-500 focus:tw-border-indigo-500 tw-block tw-w-full tw-shadow-sm sm:tw-text-sm tw-border-gray-300 tw-rounded-md tw-placeholder-gray-500 tw-placeholder-opacity-50"
                    />
                  </div>
                </div>
                <div class="">
                  <label
                    for="subject"
                    class="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
                    >Subject</label
                  >
                  <input
                    v-model="contact.subject"
                    type="text"
                    class="tw-mt-1 focus:tw-ring-indigo-500 focus:tw-border-indigo-500 tw-block tw-w-full tw-shadow-sm sm:tw-text-sm tw-border-gray-300 tw-rounded-md"
                  />
                </div>

                <div class="">
                  <label
                    for="message"
                    class="tw-block tw-text-sm tw-font-medium tw-text-gray-700"
                    >Message</label
                  >
                  <textarea
                    v-model="contact.message"
                    rows="3"
                    class="tw-shadow-sm focus:tw-ring-indigo-500 focus:tw-border-indigo-500 tw-mt-1 tw-block tw-w-full sm:tw-text-sm tw-border tw-border-gray-300 tw-rounded-md tw-placeholder-gray-500 tw-placeholder-opacity-75"
                    placeholder="Hello..."
                  ></textarea>
                  <p class="tw-mt-2 tw-text-sm tw-text-gray-500">
                    Tell us more about your issue/concern/appreciation.
                  </p>
                </div>
              </div>
              <div
                class="tw-px-4 tw-py-3 tw-bg-gray-50 tw-text-right sm:tw-px-6"
              >
                <button
                  type="submit"
                  class="tw-inline-flex tw-justify-center tw-py-2 tw-px-4 tw-border tw-border-transparent tw-shadow-sm tw-text-sm tw-font-medium tw-rounded-md tw-text-white tw-bg-red-600 hover:tw-bg-red-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="map_area tw-overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8182862860544!2d36.81951371475389!3d-1.2828548990643256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3467e7802e4812cc!2sNAIROBI+DRINKS!5e0!3m2!1sen!2ske!4v1525864637139"
            width="600"
            height="220"
            frameborder="0"
            style="border:0"
            allowfullscreen
          ></iframe>
          <div class="tw-px-4 tw-py-4">
            <div class="tw-text-lg tw-font-semibold">Find Us On:</div>
            <div class="tw-flex tw-space-x-2 tw-my-4">
              <div>
                <a
                  href="https://www.facebook.com/nairobidrinks/"
                  target="_blank"
                  class="text-decoration-none "
                  ><fa
                    :icon="['fab', 'facebook']"
                    class="text-primary fa-2x"
                    title="Facebook"
                  ></fa
                ></a>
              </div>
              <div>
                <a
                  href="https://www.twitter.com/nairobidrinks/"
                  target="_blank"
                  class="text-decoration-none "
                  ><fa
                    :icon="['fab', 'twitter']"
                    class="text-info fa-2x"
                    title="Twitter"
                  ></fa
                ></a>
              </div>
              <div>
                <a
                  href="https://instagram.com/nairobidrinks/"
                  target="_blank"
                  class="text-decoration-none "
                >
                  <fa
                    :icon="['fab', 'instagram']"
                    class="tw-text-red-600 fa-2x"
                    title="Instagram"
                  ></fa>
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
import { mapGetters } from 'vuex';

export default {
  name: 'ContactPage',
  transition: 'slide-right',
  computed: {
    ...mapGetters(['phone', 'email']),
  },
  data() {
    return {
      truthy: true,
      contact: {},
    };
  },

  methods: {
    async contactUs() {
      await this.$http
        .$post('/contact-us', JSON.stringify(this.contact), {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
        .then((res) => {
          this.$toast.success(res.message);
          this.contact = {};
        })
        .catch((err) => {
          console.log(err);
          this.$toast.error(err.message);
        });
    },
  },
  async asyncData({ $http }) {
    try {
      const meta = await $http
        .$get(`/metas/get-by-category/contact`)
        .then((response) => response.result);
      return { meta };
    } catch (err) {
      return { meta: {} };
    }
  },
  head() {
    const meta = this.meta || {};
    return {
      title: this.meta.title || '',
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
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://nairobidrinks.co.ke/contact-us`,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://nairobidrinks.co.ke' + this.$route.path,
        },
      ],
    };
  },
};
</script>

<style>

/* .contact_us {
  margin-bottom: 140px;
  padding-bottom: 20px;
}

.details {
  min-height: 120px;
  margin-bottom: 30px;
  margin-top: 60px;
  padding: 12px;
  background-color: #fff;
}

.input_item {
  margin-top: 15px;
}

.map_area {
  padding-top: 15px;
  overflow: hidden;
}

.social_media {
  min-height: 100px;
  /* background-color:; */
/* padding: 12px;
  text-align: right;
} */

/* .contact_item {
  padding: 4px;
  margin-top: 3px;
} */
</style>
