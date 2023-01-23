<template>
  <nav
    class="navbar navbar-expand-md fixed-top tw-bg-[#277FBE] tw-mb-5"
    style="margin-top: 90px; height: 4rem"
    id="navbarNav"
  >
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav tw-items-center">
          <!-- Home icon -->
          <li class="nav-item">
            <NuxtLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="tw-h-6 tw-w-6 tw-text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                ></path>
              </svg>
            </NuxtLink>
          </li>
          <!-- Categories -->
          <li class="nav-item dropdown" v-for="(brand, key) in navs" :key="key">
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
                class="tw-text-sm tw-font-medium tw-text-white tw-capitalize"
                >{{ brand.name }}</span
              >
            </NuxtLink>
            <ul
              class="
                dropdown-menu
                tw-bg-[#277FBE] tw-mx-auto tw-w-screen tw-h-screen tw-px-8
              "
              v-bind:aria-labelledby="key"
            >
              <li
                class="nav-item scrollable-menu dropdown"
                v-for="cat in brand.subcategories"
                :key="cat.name"
              >
                <NuxtLink
                  :to="`/${brand.url}/${cat.name}`"
                  class="
                    dropdown-item
                    scrollable-menu
                    text-capitalize
                    dropdown-toggle
                  "
                  v-bind:id="cat.name"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="tw-capitalize tw-text-sm tw-font-semibold">{{
                    cat.name.replace(/-/g, " ")
                  }}</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
          <!-- Blog -->
          <li class="nav-item">
            <NuxtLink to="/blog" class="tw-text-sm tw-font-medium tw-text-white"
              >Blog
            </NuxtLink>
          </li>
        </ul>
        <div class="tw-ml-auto tw-flex tw-items-center">
          <div
            class="
              tw-flex tw-flex-1 tw-items-center tw-justify-end tw-space-x-6
            "
          >
            <a href="#" class="tw-text-sm tw-font-medium tw-text-white">
              +254731722682
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>