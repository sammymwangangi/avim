<template>

<div class="tw-bg-white">

  <header class="tw-relative tw-bg-white">
    <nav aria-label="Top" class="navbar navbar-expand-lg tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div class="collapse navbar-collapse tw-border-b tw-border-gray-200">
        <div class="navbar-nav tw-flex tw-h-16 tw-items-center">
          <!-- Home Icon -->
          <div class="nav-item tw-ml-4 tw-flex lg:tw-ml-0">
            <NuxtLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" aria-hidden="true" class="tw-h-6 tw-w-6 tw-text-white">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"></path>
                </svg>
              </NuxtLink>
          </div>

          <!-- Flyout menus -->
          <div class="tw-hidden lg:tw-ml-8 lg:tw-block lg:tw-self-stretch">
            <div class="tw-flex tw-h-full tw-space-x-8">
              <div class="nav-item dropdown tw-flex" v-for="(brand, key) in navs" :key="key">
                <div class="tw-relative tw-flex">
                  <!-- Item active: "tw-border-indigo-600 tw-text-indigo-600", Item inactive: "tw-border-transparent tw-text-gray-700 hover:tw-text-gray-800" -->
                  <NuxtLink 
                  :to="`/${brand.url}`" 
                  role="button" 
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  class="nav-link dropdown-toggle tw-border-transparent tw-text-gray-700 hover:tw-text-gray-800 tw-relative tw-z-10 tw--mb-px tw-flex tw-items-center tw-border-b-2 tw-pt-px tw-text-sm tw-font-medium tw-transition-colors tw-duration-200 tw-ease-out">{{ brand.name }}</NuxtLink>
                </div>

                <!--
                  'Category' flyout menu, show/hide based on flyout menu state.
                -->
                <div class="tw-absolute tw-inset-x-0 tw-top-full tw-text-sm tw-text-gray-500">
                  <!-- Presentational element used to render the bottom tw-shadow, if we put the tw-shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the tw-shadow -->
                  <!-- <div class="tw-absolute tw-inset-0 tw-top-1/2 tw-bg-white tw-shadow" aria-hidden="true"></div> -->

                  <div class="dropdown-menu tw-relative tw-bg-white w-100" v-bind:aria-labelledby="key">
                    <div class="tw-mx-auto tw-max-w-7xl tw-px-8 container-fluid">
                      <div class="tw-grid tw-grid-cols-2 tw-gap-y-10 tw-gap-x-8 tw-py-16">
                        <div class="tw-col-start-2 tw-grid tw-grid-cols-2 tw-gap-x-8">
                          <div class="tw-group tw-relative tw-text-base sm:tw-text-sm">
                            <div class="aspect-w-1 aspect-h-1 tw-overflow-hidden tw-rounded-lg tw-bg-gray-100 group-hover:tw-opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="tw-object-cover tw-object-center md:tw-w-48 md:tw-h-auto">
                            </div>
                            <a href="#" class="tw-mt-6 tw-block tw-font-medium tw-text-gray-900">
                              <span class="tw-absolute tw-inset-0 tw-z-10" aria-hidden="true"></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" class="tw-mt-1">Shop now</p>
                          </div>
                        </div>
                        <div class="tw-row-start-1 tw-grid tw-grid-cols-3 tw-gap-y-10 tw-gap-x-8 tw-text-sm">
                          <div>
                            <p id="Clothing-heading" class="tw-font-medium tw-text-gray-900">{{ brand.name }}</p>
                            <ul 
                            role="list"
                            class="tw-mt-6 tw-space-y-6 sm:tw-mt-4 sm:tw-space-y-4"
                            v-bind:aria-labelledby="key">
                              <li 
                              class="tw-flex nav-item scrollable-menu dropdown"
                              v-for="cat in brand.subcategories" 
                              :key="cat.name">
                                <nuxt-link  
                                :to="`/${brand.url}/${cat.name}`"
                                class="hover:tw-text-gray-800"
                                v-bind:id="cat.name"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">{{ cat.name.replace(/-/g, ' ') }}</nuxt-link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <NuxtLink to="/blog" class="tw-flex tw-items-center tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-800">Blog</NuxtLink>
            </div>
          </div>

          <div class="tw-ml-auto tw-flex tw-items-center">
            <div class="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-items-center lg:tw-justify-end lg:tw-space-x-6">
              <a href="#" class="tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-800">Sell</a>
              <span class="tw-h-6 tw-w-px tw-bg-gray-200" aria-hidden="true"></span>
              <a href="#" class="tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-800">+254731722682</a>
            </div>
          </div>


          <div class="tw-flex-auto tw-flex tw-space-x-4">
            <button class="tw-h-10 tw-px-6 tw-font-semibold tw-rounded-full bg-violet-600 tw-text-white" type="submit">
              Buy now
            </button>
            <button class="tw-h-10 tw-px-6 tw-font-semibold tw-rounded-full tw-border tw-border-slate-200 tw-text-slate-900" type="button">
              Add to bag
            </button>
          </div>




          <div class="tw-container tw-mx-auto">
        <div class="tw-flex tw-flex-col md:tw-grid md:tw-grid-cols-5 tw-gap-0 tw-bg-white">
            <nuxt-link to="/fashion" class="tw-no-underline tw-flex-shrink-0 tw-flex tw-flex-col tw-items-center tw-justify-center hover:tw-shadow tw-bg-white tw-w-[239px] tw-h-auto">
                <nuxt-img src="/icons/fashion.webp" width="172" height="172" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                    <p class="tw-text-gray-800">Fashion</p>
            </nuxt-link>
            <div class="tw-flex tw-flex-col tw-gap-2">
                <div class="md:tw-flex tw-grid tw-grid-cols-2 tw-px-4 tw-py-4 tw-gap-2">
                    <nuxt-link to="electronics" class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white">
                        <nuxt-img src="/icons/electronics.webp" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800">Electronics</p>
                    </nuxt-link>
                    <nuxt-link to="home-and-office" class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white md:tw-w-[239px] md:tw-h-[134px]">
                        <nuxt-img src="/icons/home.webp" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800">Home</p>
                    </nuxt-link>
                    <nuxt-link to="phones-and-tablets" class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white md:tw-w-[239px] md:tw-h-[134px]">
                        <nuxt-img src="/icons/phones.webp" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-cover" />
                        <p class="tw-text-gray-800">Phones</p>
                    </nuxt-link>
                    <nuxt-link to="laptops" class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white md:tw-w-[239px] md:tw-h-[134px]">
                        <nuxt-img src="/icons/computing.jpg" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-cover" />
                        <p class="tw-text-gray-800">Computing</p>
                    </nuxt-link>
                </div>
                <div class="md:tw-flex tw-grid tw-grid-cols-2 tw-px-4 tw-py-4 tw-gap-2">
                    <nuxt-link to="health-and-beauty" class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white md:tw-w-[239px] md:tw-h-[134px]">
                        <nuxt-img src="/icons/beauty.jpg" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800">Health</p>
                    </nuxt-link>
                    <nuxt-link to="juakali" class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white md:tw-w-[239px] md:tw-h-[134px]">
                        <nuxt-img src="/icons/juakali.jpg" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800">Juakali</p>
                    </nuxt-link>
                    <nuxt-link to="autoparts" class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white md:tw-w-[239px] md:tw-h-[134px]">
                        <nuxt-img src="/icons/autoparts.jpg" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800">Autoparts</p>
                    </nuxt-link>
                    <nuxt-link to="others" class="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-px-2 tw-py-2 hover:tw-shadow tw-no-underline tw-justify-center tw-bg-white md:tw-w-[239px] md:tw-h-[134px]">
                        <nuxt-img src="/icons/jameson.jpg" width="112" height="112" class="tw-rounded-full tw-px-2 tw-py-2 tw-object-contain" />
                        <p class="tw-text-gray-800">Others</p>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
        </div>
      </div>
    </nav>
  </header>
</div>

</template>

<script>
export default {
  name: "play"
}
</script>

<style scoped>

</style>