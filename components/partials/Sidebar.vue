<template>
  <div>
    <hr />
    <div class="container">
      <template>
        <div class="row">
          <div class="col-6" v-for="(group, i) in groupedCategories" :key="i">
            <ul class="list-unstyled">
              <li v-for="(category, index) in group" :key="index">
                <a
                  class="pb-4 text-dark text-decoration-none mx-3"
                  style="font-size:1.2em; font-weight:500; line-height:46px;"
                  :href="`/${category.url}`"
                  >{{ category.name | capitalize }}</a
                >
              </li>

            </ul>
          </div>
        </div>
        <div class="">
          <nuxt-link
            to="/blog"
            class="tw-capitalize tw-no-underline tw-text-xl tw-font-medium tw-text-gray-700 mx-3"
            >Blog</nuxt-link
          >
        </div>
      </template>
    </div>
    <template>
      <!-- <div class="text-center" style="position:fixed;bottom: 16%;left: 22%;">
        <img
          src="/till.jpg"
          style="cursor:pointer;border-radius: 5px; width: 168px;height:48px;"
          alt="Till Number"
        />
      </div> -->

      <div class="text-center pl-4" style="position:fixed;bottom: 8%;">
        <a
          ><img
            src="/android.webp"
            style="cursor: pointer;width: 120px;height:50px;"
            alt="Google play store"
        /></a>
        <a
          ><img
            src="/ios.webp"
            style="cursor:pointer;width: 120px;height:50px;"
            alt="Apple store"
        /></a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      required: true,
    },
  },
  data() {
    return {
      itemsPerRow: 7,
    };
  },
  computed: {
    groupedCategories() {
      return this.categories.reduce((accumulator, category, index) => {
        if (index % this.itemsPerRow === 0) {
          accumulator.push([category]);
        } else {
          accumulator[accumulator.length - 1].push(category);
        }
        return accumulator;
      }, []);
    },
  },
};
</script>

<style>
@media screen and (max-width: 768px) {
  .ico-nav {
    position: relative;
    top: 2px;
  }

  .nav-link {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 0.9em;
    z-index: 9999;
  }

  .dropdown-toggle::after {
    display: none;
  }

  .dropdown-menu {
    padding-top: 0;
    border-radius: 0;
    width: 50px;
    text-transform: capitalize;
  }
}
</style>
