<template>
  <div>
    <nuxt-link :to="`/blog/${url}`" class="tw-group tw-no-underline">
      <div
        class="tw-flex tw-flex-col tw-overflow-hidden tw-min-h-[360px] tw-max-h-[360px] tw-pb-4 tw-bg-white tw-shadow-md tw-border tw-border-gray-200 tw-rounded-lg tw-max-w-sm hover:tw-shadow-lg hover:tw-border-transparent tw-transition tw-duration-500 tw-ease-in-out"
      >
        <nuxt-img
          :src="image_url"
          class="tw-flex-1 tw-object-contain tw-rounded-t-lg"
          :alt="url"
          height="219"
          width="384"
        ></nuxt-img>
        <div class="tw-px-4 tw-py-4 tw-mb-4">
          <div class="tw-font-medium tw-font-serif tw-text-gray-500 tw-mb-3">
            {{ publishedOn }} by {{ publishedBy }}
          </div>
          <div
            class="tw-clear-both tw-text-gray-900 tw-font-semibold tw-text-xl tw-tracking-tight tw-mb-2 tw-capitalize"
          >
            {{ title }}
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'articleList',
  props: {
    title: String,
    preview: String,
    url: String,
    image: String,
    image_url: String,
    publishedOn: String,
  },
  computed: {
    ...mapState({
      publishedBy: (state) => state.publishedBy,
    }),
    env() {
      return process.env.imagesURL;
    },
    _preview() {
      return this.preview.slice(0, 255) || '';
    },
  },
  data() {
    return {};
  },
};
</script>
<style></style>
