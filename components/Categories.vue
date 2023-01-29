<template>
    <div class="tw-container tw-mx-auto">
        <div class="tw-flex tw-flex-col md:tw-grid md:tw-grid-cols-5 tw-gap-0 tw-bg-white">
            <div class="tw-flex-shrink-0 tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-shadow tw-bg-white tw-w-[239px] tw-h-auto" v-for="(brand, key) in navs.slice(3, 4)"
                :key="key">

                <nuxt-link to="/fashion" class="tw-no-underline">
                    <nuxt-img src="/icons/fashion.webp" width="172" height="172" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800 tw-text-sm tw-text-center">Fashion</p>
                </nuxt-link>
            </div>
            <div class="tw-flex tw-flex-col tw-gap-2">
                <div class="md:tw-flex tw-grid tw-grid-cols-2 tw-px-4 tw-py-4 tw-gap-2 md:tw-gap-x-24" >
                    <div v-for="(brand, key) in navs.slice(0, 3).concat(navs.slice(4,5))"
                :key="key">
                        <nuxt-link :to="`/${brand.url}`" class="tw-flex tw-flex-col tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white">
                        <nuxt-img :src="`https://ik.imagekit.io/qqkp8wchu/${brand.photo}`" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800 tw-text-sm tw-text-center">{{ brand.name }}</p>
                    </nuxt-link>
                    </div>
                </div>
                <div class="md:tw-flex tw-grid tw-grid-cols-2 tw-px-4 tw-py-4 tw-gap-2 md:tw-gap-x-24" >
                    <div v-for="(brand, key) in navs.slice(5)"
                :key="key">
                        <nuxt-link :to="`/${brand.url}`" class="tw-flex tw-flex-col tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white">
                        <nuxt-img :src="`https://ik.imagekit.io/qqkp8wchu/${brand.photo}`" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800 tw-text-sm tw-text-center">{{ brand.name }}</p>
                    </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {vueWindowSizeMixin} from 'vue-window-size';

export default {
  mixins: [vueWindowSizeMixin],
  name: 'Menu',
  data() {
    return {
      brands: [],
      subcats: [],
    };
  },
  async fetch() {
    await this.$store.dispatch('menus/getMenus');
    await this.$store.dispatch('menus/getLiquorMenus');
  },
  computed: {
    menus() {
      return this.$store.state.menus.all;
    },
    navs() {
      return this.$store.state.menus.liquorMenus;
    },
  },
};
</script>

<style scoped>
</style>