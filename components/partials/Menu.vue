<template>
  <div>
    <b-sidebar
        id="sidebar-1"
        shadow=""
        class="clearfix"
        width="320px"
        backdrop="backdrop"
        v-show="windowWidth < 768"
    >
      <template #title>
        <div class="d-inline-block">
          <NuxtLink to="/">
            <img
                :src="`/logo.png`"
                class="mobile-img text-decoration-none"
                alt="avimar-international-logo"
                width="70"
                height="70"
            />
          </NuxtLink>
          <NuxtLink class="navbar-brand d-inline" to="/">
            <img
                src="/mik.png"
                alt="avimar-international-logo"
                class="mobile-img tw-h-20 tw-w-auto"
            />
          </NuxtLink>
          <b-dropdown
              id="dropdown-right"
              right
              text="Right align"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
              style="margin-left: 30px;"
          >
            <template #button-content style="font-size: .5em;">
              <fa
                  :icon="['far', 'user']"
                  title="User Account"
                  style="font-size:1.2em;"
              ></fa>
              <span class="sr-only">Account</span>
            </template>
            <template v-if="isAuthenticated">
              <b-dropdown-item
                  :href="`/account/dashboard`"
                  style="font-size: 1.1em;"
              >
                <fa icon="tachometer-alt"></fa>
                Dashboard
              </b-dropdown-item
              >
              <b-dropdown-item
                  :href="`/account/profile`"
                  style="font-size: 1.1em;"
              >
                <fa :icon="['far', 'user']" title="User Account"></fa>
                Profile
              </b-dropdown-item
              >
              <b-dropdown-item @click="logout" style="font-size: 1.1em;"
              >
                <fa icon="sign-out-alt" title="Logout"></fa>
                Logout
              </b-dropdown-item
              >
            </template>
            <template v-else>
              <b-dropdown-item
                  :href="`/account/login`"
                  style="font-size: 1.1em;"
              >
                <fa icon="sign-in-alt" title="Login"></fa>
                >
                Login
              </b-dropdown-item
              >
              <b-dropdown-item
                  :href="`/account/register`"
                  style="font-size: 1.1em;"
              >
                <fa icon="pen" title="register"></fa>
                Register
              </b-dropdown-item
              >
            </template>
          </b-dropdown>
        </div>
      </template>
      <Sidebar :categories="navs"/>
    </b-sidebar>
    <!-- Main Nav Bar -->
    <nav
        class="navbar navbar-expand-md fixed-top tw-bg-[#277FBE] tw-mb-5"
        style="margin-top:90px; height: 4rem"
        id="navbarNav"
    >
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav tw-items-center">
            <li class="nav-item">
              <NuxtLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" aria-hidden="true" class="tw-h-6 tw-w-6 tw-text-white">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"></path>
                </svg>
              </NuxtLink>
            </li>
            <li
                class="nav-item dropdown"
                v-for="(brand, key) in navs"
                :key="key"
            >
              <NuxtLink
                  class="nav-link dropdown-toggle"
                  :to="`/${brand.url}`"
                  v-bind:id="key"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
              >
                <span
                    class="
                    tw-capitalize tw-text-sm tw-font-semibold
                    hover:tw-text-red-600
                  "
                >{{ brand.name }}</span
                >
              </NuxtLink>
              <ul
                  class="dropdown-menu tw-w-full tw-bg-black tw-border-0 tw-rounded-b-lg tw-mt-0 tw-pb-2"
                  v-bind:aria-labelledby="key"
              >
                <li
                    class="nav-item scrollable-menu dropdown"
                    v-for="cat in brand.subcategories"
                    :key="cat.name"
                >
                  <NuxtLink
                      :to="`/${brand.url}/${cat.name}`"
                      class="dropdown-item scrollable-menu text-capitalize dropdown-toggle hover:tw-text-red-600"
                      v-bind:id="cat.name"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                  >
                    <span
                        class="
                        tw-capitalize tw-text-sm tw-font-semibold
                      "
                    >{{ cat.name.replace(/-/g, ' ') }}</span
                    >
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink
                  to="/blog"
                  class="tw-capitalize tw-no-underline tw-text-sm tw-font-semibold tw-text-white hover:tw-text-red-600"
              >Blog
              </NuxtLink
              >
            </li>
          </ul>
          <div class="tw-ml-auto tw-flex tw-items-center">
            <div class="tw-flex tw-flex-1 tw-items-center tw-justify-end tw-space-x-6">
              <a href="#" class="tw-text-sm tw-font-medium tw-text-white">
                +254731722682
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Top Nav Bar -->
    <nav
        class="clearfix navbar navbar-expand-lg fixed-top navbar-dark tw-shadow-lg"
        style="height: 6rem"
        id="main-nav"
    >
      <div class="container-fluid">
        <div class="tw-flex">
          <NuxtLink class="navbar-brand d-inline" to="/">
            <img
                src="/logo.png"
                alt="avimar-international-logo"
                class="mobile-img"
                width="70"
                height="70"
            />
          </NuxtLink>
          <NuxtLink class="navbar-brand d-inline" to="/">
            <img
                src="/mik.png"
                alt="avimar-international-logo"
                class="mobile-img tw-h-20 tw-w-auto"
            />
          </NuxtLink>
        </div>

        <NuxtLink
            to="/cart"
            class="nav-link text-danger d-inline mobile-icon"
            style="cursor: pointer;margin-right: -24px;"
            v-show="windowWidth < 768"
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            ></path>
          </svg>
          <small
              class="badge badge-dark rounded-circle p-2 tw-text-xs tw-relative"
              style="top: -10px;"
          >
            <span v-if="cart.length > 0">{{ cart.length }}</span>
            <span v-else>0</span>
          </small></NuxtLink
        >
        <NuxtLink
            to="/favorite"
            class="nav-link text-danger mobile-icon d-inline tw-cursor-pointer tw-mr-2"
            style="cursor: pointer; margin-right: 2px;"
            v-show="windowWidth < 768"
        >
          <div v-if="favorite.length > 0">
            <fa icon="heart" style="font-size:1.1em;"></fa>
          </div>
          <div v-else>
            <fa :icon="['far', 'heart']" style="font-size:1.1em;"></fa>
          </div>
        </NuxtLink>
        <svg
            v-b-toggle.sidebar-1
            v-show="windowWidth < 768"
            class="nav-toggler tw-w-6 tw-h-6 d-lg-none d-md-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
        <div class="collapse navbar-collapse"></div>

        <div
            class="collapse navbar-collapse tw-justify-between"
            id="navbarSupportedContent"
        >
          <template>
            <div>
              <div
                  class=" d-sm-none d-md-none d-lg-inline"
                  v-show="windowWidth > 480"
              >
                <label for="search" class="sr-only">Search</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search products, brands, and categories"
                    @keyup.enter="searchPage"
                    @blur="hideSearch"
                    v-model="query"
                    autocomplete="off"
                    class="tw-px-2 tw-py-2 tw-bg-transparent focus:tw-ring-0"
                />
                <div
                    v-if="results.length > 0 && query"
                    class="tw-p-2 tw-bg-gray-100 tw-shadow-lg tw-rounded-0 tw-border-0 tw-z-30 tw-overflow-auto"
                    style="position: absolute;width: 29.4rem"
                >
                  <h6 v-for="result in results.slice(0, 8)" :key="result._id">
                    <a
                        :href="`/product/${result.url}`"
                        class="text-decoration-none"
                    >
                      {{ result.name.replace(/-/g, ' ') | capitalize }}
                    </a>
                  </h6>
                  <span class="border-bottom border-secondary"></span>
                  <div
                      v-for="(record, index) in brands.slice(0, 5)"
                      :key="index"
                  >
                    <a
                        :href="`/brands/${record.url}`"
                        class="text-dark text-decoration-none"
                    >
                      <span style="width: 250px;"
                      ><strong class="text-capitalize">{{
                          record.brand
                        }}</strong>
                        brand</span
                      >
                    </a>
                  </div>
                  <!-- <span class="border-bottom border-secondary"></span> -->
                  <div
                      v-for="(subcat, index) in subcats.slice(0, 8)"
                      :key="`subcat-${index}`"
                  >
                    <a
                        :href="`/${subcat.category_url}/${subcat.subcategory}`"
                        class="text-dark text-decoration-none"
                    >
                      <span style="width: 250px;"
                      ><strong class="text-capitalize">{{
                          subcat.subcategory.replace(/-/g, ' ')
                        }}</strong></span
                      >
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <ul class="float-right navbar-nav tw-items-center tw-right-0">
            <li class="nav-item">
              <NuxtLink
                  to="/cart"
                  class="nav-link"
                  id="spring"
                  style="cursor: pointer;font-weight:700;"
              >
                <svg
                    class="tw-w-6 tw-h-6 tw-text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  ></path>
                </svg>
                <small
                    class="badge badge-dark rounded-circle p-2"
                    style="font-size: 0.6em; position:relative;top: -10px;"
                >
                  <span v-if="cart.length > 0">{{ cart.length }}</span>
                  <span v-else>0</span>
                </small></NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink
                  to="/favorite"
                  class="nav-link"
                  id="spring"
                  style="cursor: pointer"
              >
                <b v-if="favorite.length > 0">
                  <svg
                      class="tw-w-6 tw-h-6 tw-text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        fill-rule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clip-rule="evenodd"
                    ></path>
                  </svg>
                </b>
                <b v-else>
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
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </b>
              </NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a
                  class="nav-link dropdown-toggle tw-text-red-600"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" aria-hidden="true" class="tw-h-6 tw-w-6 tw-text-gray-600">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                </svg>
              </a>
              <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                  v-if="isAuthenticated"
              >
                <NuxtLink to="/account/dashboard" class="dropdown-item"
                >Dashboard
                </NuxtLink
                >
                <NuxtLink to="/account/profile" class="dropdown-item"
                >Profile
                </NuxtLink
                >
                <a
                    @click="logout"
                    class="dropdown-item"
                    style="cursor: pointer;"
                >Logout</a
                >
              </div>
              <div
                  class="dropdown-menu dropdown-menu-right tw-absolute tw-z-40 tw-bg-red-600"
                  aria-labelledby="navbarDropdown"
                  v-else
              >
                <NuxtLink to="/account/login" class="dropdown-item"
                >Login
                </NuxtLink
                >
                <NuxtLink to="/account/register" class="dropdown-item"
                >Register
                </NuxtLink
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Search -->
    <div
        id="mobile-menu"
        class="clearfix tw-w-full form-group tw-py-4 rounded-0"
        v-show="windowWidth < 481"
    >
      <form @submit.prevent="searchPage">
        <label for="mobile_search" class="sr-only">Search</label>
        <input
            type="text"
            id="mobile_search"
            :value="query"
            @input="(e) => (query = e.target.value)"
            autocomplete="off"
            class="form-control tw-rounded-b-lg tw-mt-2 focus:tw-ring-1 focus:tw-ring-gray-400"
            placeholder="Search products ...."
        />
      </form>
      <div
          v-if="searchResults.length > 0 && query"
          class="z-10 tw-p-2 tw-bg-gray-50 tw-relative list-unstyled card tw-overflow-hidden tw-rounded-0 tw-w-100 tw-border-0 shadow"
      >
        <h6 v-for="result in searchResults.slice(0, 8)" :key="result._id">
          <a :href="`/product/${result.url}`">
            <div style="width: 250px;">
              {{ result.name.replace(/-/g, ' ') | capitalize }}
            </div>
          </a>
        </h6>
        <span class="tw-border-b tw-border-red-500"></span>
        <h6 v-for="(record, index) in brands.slice(0, 5)" :key="index">
          <a :href="`/brands/${record.url}`" class="text-dark">
            <span style="width: 250px;"
            ><strong>{{ record.brand }}</strong> brand</span>
          </a>
        </h6>
        <span class="tw-border-b tw-border-red-500"></span>
        <div
            v-for="(subcat, index) in subcats.slice(0, 8)"
            :key="`sub-${index}`"
        >
          <a
              :href="`/${subcat.category_url}/${subcat.subcategory}`"
              class="text-dark text-decoration-none"
          >
            <span style="width: 250px;"
            ><strong class="text-capitalize">{{
                subcat.subcategory.replace(/-/g, ' ')
              }}</strong></span
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const Sidebar = () => import('~/components/partials/Sidebar');
import {mapGetters, mapState} from 'vuex';
import {vueWindowSizeMixin} from 'vue-window-size';
import {debounce} from 'lodash';

export default {
  mixins: [vueWindowSizeMixin],
  name: 'Menu',
  components: {
    Sidebar,
  },
  data() {
    return {
      query: null,
      results: [],
      toggle: true,
      searchResults: [],
      brands: [],
      subcats: [],
    };
  },
  async fetch() {
    await this.$store.dispatch('menus/getMenus');
    await this.$store.dispatch('menus/getLiquorMenus');
  },
  created() {
    this.debounceQuery = debounce(this.searchProducts, 1000);
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    menus() {
      return this.$store.state.menus.all;
    },
    navs() {
      return this.$store.state.menus.liquorMenus;
    },
    ...mapState({
      cart: (state) => state.cart.cart,
      favorite: (state) => state.favorite.favorite,
    }),
  },
  watch: {
    query() {
      if (!this.query) return;
      this.debounceQuery();
    },
  },
  methods: {
    hideSearch() {
      setTimeout(() => {
        this.query = '';
      }, 300);
    },
    async logout() {
      await this.$auth.logout();
      this.$toast.success('You are logged out!');
    },
    searchPage() {
      if (this.query === '' || this.query === null) {
        return this.$router.push(`${this.$route.path}`);
      } else {
        this.$router.push(`/search/${this.query}`);
        this.query = '';
      }
    },
    searchProducts() {
      this.$http
          .$post('products/search', {query: this.query})
          .then((response) => {
            this.results = response.result.products;
            this.searchResults = response.result.products;
            this.subcats = response.result.subcategories;
            this.brands = response.result.brands;
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
};
</script>
<style>
.nav-toggler:focus {
  outline: none !important;
  box-shadow: none;
}

.btn-link {
  color: #202326;
}

.btn-link:hover {
  color: #202326;
}

i.heart {
  color: #277fbe;
}

#spring {
  color: #277fbe;
}

#search {
  width: 468px;
  outline: 0;
  border-width: 0 0 1px 0;
  border-color: #6f7275;
}

#search:focus {
  border-color: transparent;
}

nav#main-nav {
  background: white;
  height: 70px;
  border-top: 5px solid #277fbe;
}

nav#navbarNav {
  background: #ffffff;
  color: #000000;
}

.dropdown-toggle :hover {
  color: #277fbe;
  background: transparent;
}

.dropdown-toggle::after {
  display: none;
}

.dropdown-item {
  font-weight: 400;
  color: #ffffff;
}

.dropdown-item:hover {
  font-weight: 400;
  background: transparent;
}

.dropdown-menu {
  margin-top: 0;
  padding-top: 1px;
  text-transform: capitalize;
  background: #000000;
  color: #ffffff;
  border-radius: 0;
  height: auto;
  max-height: 450px;
  overflow-x: hidden;
}

.dropdown-menu:hover {
  margin-top: 0;
  padding-top: 1px;
  text-transform: capitalize;
  background: #000000;
  color: #277fbe;
  border-radius: 0;
}

.dropdown:hover > .dropdown-menu {
  display: table-column;
}

@media screen and (min-width: 992px) {
  #navbarNav .nav-item .nav-link {
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 500;
    font-size: 0.9em;
    z-index: 9999;
    padding-right: 20px;
  }

  .dropdown-menu {
    padding: 0;
    width: auto;
  }

  .scrollable-menu {
    height: auto;
    max-height: 40px;
    overflow-x: hidden;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  #navbarNav .nav-item .nav-link {
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 500;
    font-size: 0.7em;
    z-index: 9999;
    padding-right: 5px;
  }

  .dropdown-menu {
    font-size: 0.8em;
    width: auto;
  }

  .dropdown-item {
    margin-left: -20px;
  }
}

@media screen and (min-width: 481px) and (max-width: 767px) {
  #navbarNav {
    display: none;
  }
}

@media screen and (max-width: 481px) {
  #navbarNav {
    display: none;
  }

  .mobile-img {
    width: 160px;
    height: 40px;
  }

  #mobile-menu {
    position: fixed;
    top: 46px;
    overflow: hidden;
    z-index: 1000;
  }
}

@media screen and (min-width: 481px) {
  .mobile-icon {
    display: none;
    visibility: hidden;
  }
}

.group:hover .group-hover\:block {
  display: block !important;
}
</style>