<template>
    <div>
        <div class="tw-grid tw-grid-cols-5 tw-gap-0 tw-bg-white">
            <nuxt-link to="/fashion" class="tw-no-underline tw-flex-shrink-0 tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-shadow tw-bg-white tw-w-[239px] tw-h-auto">
                <nuxt-img src="/icons/fashion.webp" width="172" height="172" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                    <p class="tw-text-gray-800">Fashion</p>
            </nuxt-link>
            <div class="tw-flex tw-flex-col tw-gap-2">
                <div class="tw-flex tw-px-4 tw-py-4 tw-gap-2">
                    <nuxt-link to="electronics" class="tw-flex tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white">
                        <nuxt-img src="/icons/electronics.webp" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800">Electronics</p>
                    </nuxt-link>
                    <nuxt-link to="home-and-office" class="tw-flex tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white tw-w-[239px] tw-h-[134px]">
                        <nuxt-img src="/icons/home.webp" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800">Home</p>
                    </nuxt-link>
                    <nuxt-link to="phones-and-tablets" class="tw-flex tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white tw-w-[239px] tw-h-[134px]">
                        <nuxt-img src="/icons/phones.webp" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-cover" />
                        <p class="tw-text-gray-800">Phones</p>
                    </nuxt-link>
                    <nuxt-link to="laptops" class="tw-flex tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white tw-w-[239px] tw-h-[134px]">
                        <nuxt-img src="/icons/computing.jpg" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-cover" />
                        <p class="tw-text-gray-800">Computing</p>
                    </nuxt-link>
                </div>
                <div class="tw-flex tw-px-4 tw-py-4 tw-gap-2">
                    <nuxt-link to="health-and-beauty" class="tw-flex tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white tw-w-[239px] tw-h-[134px]">
                        <nuxt-img src="/icons/beauty.jpg" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800">Health</p>
                    </nuxt-link>
                    <nuxt-link to="juakali" class="tw-flex tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white tw-w-[239px] tw-h-[134px]">
                        <nuxt-img src="/icons/juakali.jpg" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800">Juakali</p>
                    </nuxt-link>
                    <nuxt-link to="autoparts" class="tw-flex tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white tw-w-[239px] tw-h-[134px]">
                        <nuxt-img src="/icons/autoparts.jpg" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800">Autoparts</p>
                    </nuxt-link>
                    <nuxt-link to="others" class="tw-flex tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white tw-w-[239px] tw-h-[134px]">
                        <nuxt-img src="/icons/jameson.jpg" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800">Others</p>
                    </nuxt-link>
                </div>
               
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch("menus/getCategories");
  },

  computed: {
    categories() {
      return this.$store.state.menus.categories;
    },
  },
};
</script>

<style scoped>
</style>