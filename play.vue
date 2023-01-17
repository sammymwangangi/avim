<template>

<div class="tw-bg-white">

  <header class="tw-relative tw-bg-white">
    <p class="tw-flex tw-h-10 tw-items-center tw-justify-center tw-bg-indigo-600 tw-px-4 tw-text-sm tw-font-medium tw-text-white sm:tw-px-6 lg:tw-px-8">Get free delivery on orders over $100</p>

    <nav aria-label="Top" class="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
      <div class="tw-border-b tw-border-gray-200">
        <div class="tw-flex tw-h-16 tw-items-center">
          <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
          <button type="button" class="tw-rounded-md tw-bg-white tw-p-2 tw-text-gray-400 lg:tw-hidden">
            <span class="tw-sr-only">Open menu</span>
            <!-- Heroicon name: outline/bars-3 -->
            <svg class="tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <!-- Logo -->
          <div class="tw-ml-4 tw-flex lg:tw-ml-0">
            <a href="#">
              <span class="tw-sr-only">Your Company</span>
              <img class="tw-h-8 tw-w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
            </a>
          </div>

          <!-- Flyout menus -->
          <div class="tw-hidden lg:tw-ml-8 lg:tw-block lg:tw-self-stretch">
            <div class="tw-flex tw-h-full tw-space-x-8">
              <div class="tw-flex">
                <div class="tw-relative tw-flex">
                  <!-- Item active: "tw-border-indigo-600 tw-text-indigo-600", Item inactive: "tw-border-transparent tw-text-gray-700 hover:tw-text-gray-800" -->
                  <button type="button" class="tw-border-transparent tw-text-gray-700 hover:tw-text-gray-800 tw-relative tw-z-10 tw--mb-px tw-flex tw-items-center tw-border-b-2 tw-pt-px tw-text-sm tw-font-medium tw-transition-colors tw-duration-200 tw-ease-out" aria-expanded="false">Women</button>
                </div>

                <!--
                  'Women' flyout menu, show/hide based on flyout menu state.
                -->
                <div class="tw-absolute tw-inset-x-0 tw-top-full tw-text-sm tw-text-gray-500">
                  <!-- Presentational element used to render the bottom tw-shadow, if we put the tw-shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the tw-shadow -->
                  <div class="tw-absolute tw-inset-0 tw-top-1/2 tw-bg-white tw-shadow" aria-hidden="true"></div>

                  <div class="tw-relative tw-bg-white">
                    <div class="tw-mx-auto tw-max-w-7xl tw-px-8">
                      <div class="tw-grid tw-grid-cols-2 tw-gap-y-10 tw-gap-x-8 tw-py-16">
                        <div class="tw-col-start-2 tw-grid tw-grid-cols-2 tw-gap-x-8">
                          <div class="group tw-relative tw-text-base sm:tw-text-sm">
                            <div class="aspect-w-1 aspect-h-1 tw-overflow-hidden tw-rounded-lg tw-bg-gray-100 group-hover:tw-opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="tw-object-cover tw-object-center">
                            </div>
                            <a href="#" class="tw-mt-6 tw-block tw-font-medium tw-text-gray-900">
                              <span class="tw-absolute tw-inset-0 tw-z-10" aria-hidden="true"></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" class="tw-mt-1">Shop now</p>
                          </div>

                          <div class="group tw-relative tw-text-base sm:tw-text-sm">
                            <div class="aspect-w-1 aspect-h-1 tw-overflow-hidden tw-rounded-lg tw-bg-gray-100 group-hover:tw-opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." class="tw-object-cover tw-object-center">
                            </div>
                            <a href="#" class="tw-mt-6 tw-block tw-font-medium tw-text-gray-900">
                              <span class="tw-absolute tw-inset-0 tw-z-10" aria-hidden="true"></span>
                              Basic Tees
                            </a>
                            <p aria-hidden="true" class="tw-mt-1">Shop now</p>
                          </div>
                        </div>
                        <div class="tw-row-start-1 tw-grid tw-grid-cols-3 tw-gap-y-10 tw-gap-x-8 tw-text-sm">
                          <div>
                            <p id="Clothing-heading" class="tw-font-medium tw-text-gray-900">Clothing</p>
                            <ul role="list" aria-labelledby="Clothing-heading" class="tw-mt-6 tw-space-y-6 sm:tw-mt-4 sm:tw-space-y-4">
                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Tops</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Dresses</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Pants</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Denim</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Sweaters</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">T-Shirts</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Jackets</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Activewear</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Browse All</a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <p id="Accessories-heading" class="tw-font-medium tw-text-gray-900">Accessories</p>
                            <ul role="list" aria-labelledby="Accessories-heading" class="tw-mt-6 tw-space-y-6 sm:tw-mt-4 sm:tw-space-y-4">
                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Watches</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Wallets</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Bags</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Sunglasses</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Hats</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Belts</a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <p id="Brands-heading" class="tw-font-medium tw-text-gray-900">Brands</p>
                            <ul role="list" aria-labelledby="Brands-heading" class="tw-mt-6 tw-space-y-6 sm:tw-mt-4 sm:tw-space-y-4">
                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Full Nelson</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">My Way</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Re-Arranged</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Counterfeit</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Significant Other</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tw-flex">
                <div class="tw-relative tw-flex">
                  <!-- Item active: "tw-border-indigo-600 tw-text-indigo-600", Item inactive: "tw-border-transparent tw-text-gray-700 hover:tw-text-gray-800" -->
                  <button type="button" class="tw-border-transparent tw-text-gray-700 hover:tw-text-gray-800 tw-relative tw-z-10 tw--mb-px tw-flex tw-items-center tw-border-b-2 tw-pt-px tw-text-sm tw-font-medium tw-transition-colors tw-duration-200 tw-ease-out" aria-expanded="false">Men</button>
                </div>

                <!--
                  'Men' flyout menu, show/hide based on flyout menu state.

                  Entering: "tw-transition tw-ease-out tw-duration-200"
                    From: "tw-opacity-0"
                    To: "tw-opacity-100"
                  Leaving: "tw-transition tw-ease-in tw-duration-150"
                    From: "tw-opacity-100"
                    To: "tw-opacity-0"
                -->
                <div class="tw-absolute tw-inset-x-0 tw-top-full tw-text-sm tw-text-gray-500">
                  <!-- Presentational element used to render the bottom tw-shadow, if we put the tw-shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the tw-shadow -->
                  <div class="tw-absolute tw-inset-0 tw-top-1/2 tw-bg-white tw-shadow" aria-hidden="true"></div>

                  <div class="tw-relative tw-bg-white">
                    <div class="tw-mx-auto tw-max-w-7xl tw-px-8">
                      <div class="tw-grid tw-grid-cols-2 tw-gap-y-10 tw-gap-x-8 tw-py-16">
                        <div class="tw-col-start-2 tw-grid tw-grid-cols-2 tw-gap-x-8">
                          <div class="group tw-relative tw-text-base sm:tw-text-sm">
                            <div class="aspect-w-1 aspect-h-1 tw-overflow-hidden tw-rounded-lg tw-bg-gray-100 group-hover:tw-opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="tw-object-cover tw-object-center">
                            </div>
                            <a href="#" class="tw-mt-6 tw-block tw-font-medium tw-text-gray-900">
                              <span class="tw-absolute tw-inset-0 tw-z-10" aria-hidden="true"></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" class="tw-mt-1">Shop now</p>
                          </div>

                          <div class="group tw-relative tw-text-base sm:tw-text-sm">
                            <div class="aspect-w-1 aspect-h-1 tw-overflow-hidden tw-rounded-lg tw-bg-gray-100 group-hover:tw-opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on tw-table with same line drawing of hands and shapes overlapping on front of shirt." class="tw-object-cover tw-object-center">
                            </div>
                            <a href="#" class="tw-mt-6 tw-block tw-font-medium tw-text-gray-900">
                              <span class="tw-absolute tw-inset-0 tw-z-10" aria-hidden="true"></span>
                              Artwork Tees
                            </a>
                            <p aria-hidden="true" class="tw-mt-1">Shop now</p>
                          </div>
                        </div>
                        <div class="tw-row-start-1 tw-grid tw-grid-cols-3 tw-gap-y-10 tw-gap-x-8 tw-text-sm">
                          <div>
                            <p id="Clothing-heading" class="tw-font-medium tw-text-gray-900">Clothing</p>
                            <ul role="list" aria-labelledby="Clothing-heading" class="tw-mt-6 tw-space-y-6 sm:tw-mt-4 sm:tw-space-y-4">
                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Tops</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Pants</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Sweaters</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">T-Shirts</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Jackets</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Activewear</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Browse All</a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <p id="Accessories-heading" class="tw-font-medium tw-text-gray-900">Accessories</p>
                            <ul role="list" aria-labelledby="Accessories-heading" class="tw-mt-6 tw-space-y-6 sm:tw-mt-4 sm:tw-space-y-4">
                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Watches</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Wallets</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Bags</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Sunglasses</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Hats</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Belts</a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <p id="Brands-heading" class="tw-font-medium tw-text-gray-900">Brands</p>
                            <ul role="list" aria-labelledby="Brands-heading" class="tw-mt-6 tw-space-y-6 sm:tw-mt-4 sm:tw-space-y-4">
                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Re-Arranged</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Counterfeit</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">Full Nelson</a>
                              </li>

                              <li class="tw-flex">
                                <a href="#" class="hover:tw-text-gray-800">My Way</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" class="tw-flex tw-items-center tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-800">Company</a>

              <a href="#" class="tw-flex tw-items-center tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-800">Stores</a>
            </div>
          </div>

          <div class="tw-ml-auto tw-flex tw-items-center">
            <div class="tw-hidden lg:tw-flex lg:tw-flex-1 lg:tw-items-center lg:tw-justify-end lg:tw-space-x-6">
              <a href="#" class="tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-800">Sign in</a>
              <span class="tw-h-6 tw-w-px tw-bg-gray-200" aria-hidden="true"></span>
              <a href="#" class="tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-gray-800">Create account</a>
            </div>

            <div class="tw-hidden lg:tw-ml-8 lg:tw-flex">
              <a href="#" class="tw-flex tw-items-center tw-text-gray-700 hover:tw-text-gray-800">
                <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="tw-block tw-h-auto tw-w-5 tw-flex-shrink-0">
                <span class="tw-ml-3 tw-block tw-text-sm tw-font-medium">CAD</span>
                <span class="tw-sr-only">, change currency</span>
              </a>
            </div>

            <!-- Search -->
            <div class="tw-flex lg:tw-ml-6">
              <a href="#" class="tw-p-2 tw-text-gray-400 hover:tw-text-gray-500">
                <span class="tw-sr-only">Search</span>
                <!-- Heroicon name: outline/magnifying-glass -->
                <svg class="tw-h-6 tw-w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </a>
            </div>

            <!-- Cart -->
            <div class="tw-ml-4 tw-flow-root lg:tw-ml-6">
              <a href="#" class="group tw--m-2 tw-flex tw-items-center tw-p-2">
                <!-- Heroicon name: outline/shopping-bag -->
                <svg class="tw-h-6 tw-w-6 tw-flex-shrink-0 tw-text-gray-400 group-hover:tw-text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span class="tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-700 group-hover:tw-text-gray-800">0</span>
                <span class="tw-sr-only">items in cart, view bag</span>
              </a>
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