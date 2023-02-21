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

<script>
export default {
  computed: {
    checkAll: {
      get: function () {
        return this.langs ? this.checked.length == this.langs.length : false;
      },
      set: function (value) {
        var checked = [];
        if (value) {
          this.langs.forEach(function (lang) {
            checked.push(lang.id);
          });
        }
        this.checked = checked;
      }
    }
  }
}
</script>