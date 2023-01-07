<template>
  <div>
    <b-sidebar
      id="sidebar-2"
      :title="category.name | capitalize"
      header-class="header-mono"
      shadow
    >
      <div class="tw-px-3 tw-py-2">
        <ul
          class="list-unstyled text-justify pl-lg-3"
          style="overflow:auto; height:420px;"
        >
          <li
            class="border-bottom pb-2"
            v-for="(cat, index) in subCategories"
            :key="index"
          >
            <a
              :href="`/${category.url}/${cat.name}`"
              class="text-decoration-none"
              style="font-family: 'Roboto', sans-serif"
            >
              {{ cat.name.replace(/-/g, ' ') | capitalize }}</a
            >
          </li>
        </ul>
      </div>
      <template>
        <div class="text-center" style="position:fixed;bottom: 16%;left: 22%;">
          <nuxt-img
            :src="`/till.jpg`"
            style="cursor:pointer;border-radius: 5px; width: 168px;height:48px;"
            alt="Till Number"
          />
        </div>
        <div class="text-center pl-4" style="position:fixed;bottom: 8%;">
          <a
            ><nuxt-img
              :src="`/android.webp`"
              style="cursor: pointer;width: 120px;height:50px;"
              alt="Google play store"
          /></a>
          <a
            ><nuxt-img
              :src="`/ios.webp`"
              style="cursor:pointer;width: 120px;height:50px;"
              alt="Apple store"
          /></a>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  props: {
    category: '',
    subCategories: Array,
  },
  methods: {},
};
</script>

<style>
#sidebar-2 {
  overflow-y: auto;
}
@media screen and (max-width: 481px) {
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
}
</style>
