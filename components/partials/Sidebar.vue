<template>
  <div>
    <hr />
    <div class="container">
      <template>
        <div class="row">
          <div class="col-6" v-for="(group, i) in groupedCategories" :key="i">
            <ul class="list-unstyled">
              <li v-for="(category, index) in group" :key="index" class="tw-pb-6 tw-mx-4 tw-font-medium tw-text-md">
                <a
                  class="tw-text-gray-900 tw-no-underline"
                  :href="`/${category.url}`"
                  >{{ category.name | capitalize }}</a
                >
              </li>

            </ul>
          </div>
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
    font-size: 1.9rem;
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
