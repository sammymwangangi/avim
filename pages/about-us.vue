<template>
  <div>
    <section class="tw-pt-16 lg:tw-pt-32 tw-px-2">
      <div class="tw-bg-white tw-container tw-mx-auto tw-py-5">
        <!-- Breadcrumb -->
        <nav id="breadcrumb" class="tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5" aria-label="breadcrumb">
          <ol class="tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3">
            <li class="tw-inline-flex tw-items-center">
              <a :href="'/'"
                 class="tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white">
                <svg class="tw-w-4 tw-h-4 tw-mr-2" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </a>
            </li>
            <li aria-current="page">
              <div class="tw-flex items-center">
                <svg class="tw-w-6 tw-h-6 tw-text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500">About Us</span>
              </div>
            </li>
          </ol>
        </nav>
        <div class="tw-relative tw-overflow-hidden tw-bg-white tw-py-16">
          <div
              class="tw-hidden lg:tw-absolute lg:tw-inset-y-0 lg:tw-block lg:tw-h-full lg:tw-w-full lg:[overflow-anchor:none]">
            <div
                class="tw-relative tw-mx-auto tw-h-full tw-max-w-prose tw-text-lg"
                aria-hidden="true"
            >
              <svg
                  class="tw-absolute tw-top-12 tw-left-full tw-translate-x-32 tw-transform"
                  width="404"
                  height="384"
                  fill="none"
                  viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                      id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                  >
                    <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        class="tw-text-gray-200"
                        fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                    width="404"
                    height="384"
                    fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                />
              </svg>
              <svg
                  class="tw-absolute tw-top-1/2 tw-right-full tw--translate-y-1/2 tw--translate-x-32 tw-transform"
                  width="404"
                  height="384"
                  fill="none"
                  viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                      id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                  >
                    <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        class="tw-text-gray-200"
                        fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                    width="404"
                    height="384"
                    fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                />
              </svg>
              <svg
                  class="tw-absolute tw-bottom-12 tw-left-full tw-translate-x-32 tw-transform"
                  width="404"
                  height="384"
                  fill="none"
                  viewBox="0 0 404 384"
              >
                <defs>
                  <pattern
                      id="d3eb07ae-5182-43e6-857d-35c643af9034"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                  >
                    <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        class="tw-text-gray-200"
                        fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                    width="404"
                    height="384"
                    fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                />
              </svg>
            </div>
          </div>
          <div class="tw-relative tw-px-4 sm:tw-px-6 lg:tw-px-8">
            <div class="tw-mx-auto tw-max-w-prose tw-text-lg">
              <h1>
              <span class="tw-block tw-text-center tw-text-lg tw-font-semibold tw-text-indigo-600">
                Avimar International
              </span>
                <span
                    class="tw-mt-2 tw-block tw-text-center tw-text-3xl tw-font-bold tw-leading-8 tw-tracking-tight tw-text-gray-900 sm:tw-text-4xl">
                About Us
              </span>
              </h1>
              <p class="tw-prose tw-prose-lg prose-indigo tw-mt-8 tw-leading-8 tw-text-gray-500" v-html="meta.footercontent">
              </p>
            </div>
            <div class="tw-prose tw-prose-lg prose-indigo tw-mx-auto tw-mt-6 tw-text-gray-500">
              <p>
                The platform provides a wide range of products covering Furniture,
                Metalwork Products like wheelbarrows, home
                appliances, smartphones and accessories, spare parts , electronic
                products such as computers, tw-tablets, and TVs, beauty and fashion
                products, among others
              </p>
              <h2>Vision</h2>
              <p>To be the Leading E-commerce company in Africa.</p>
              <h2>Mission</h2>
              <p>
                Helping SMEs access a wider market and providing consumers with a
                wide range of products and world-class customer service
              </p>
              <h2>Values</h2>
              <ul role="list">
                <li>Trust</li>
                <li>Speed</li>
                <li>Sustainability</li>
                <li>Growth</li>
                <li>Efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'AboutUs',
  data() {
    return {};
  },
  async asyncData({$http}) {
    try {
      const meta = await $http
          .$get('metas/get-by-category/about-us')
          .then((response) => response.result);
      return {meta};
    } catch (err) {
      return {meta: {}};
    }
  },
  head() {
    const meta = this.meta || {};
    return {
      title: this.meta.title,
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
      link: [
        {
          rel: 'canonical',
          href: 'https://avimar.online' + this.$route.path,
        },
      ],
    };
  },
  methods: {
    init() {
    },
  },
};
</script>
<style scoped>
.header_area {
  min-height: 20px;
  text-align: center;
  background: #f5f5f5;
}

@media screen and (min-width: 769px) {
  #breadcrumb {
    display: none;
  }

  .heading_one {
    margin-top: 1px;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
}

@media screen and (min-width: 481px) and (max-width: 575px) {
}

@media screen and (max-width: 481px) {
  #breadcrumb {
    display: none;
  }

  .heading_one {
    margin-top: 20px;
    padding: 10px;
    font-size: 1.2em;
    margin-bottom: 1px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
}
</style>
