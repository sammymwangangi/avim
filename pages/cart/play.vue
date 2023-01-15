<template>
  <div class="tw-text-center">
    <svg aria-hidden="true" class="tw-mx-auto tw-h-12 tw-w-12 tw-text-gray-400" fill="none" stroke="currentColor"
         viewBox="0 0 24 24">
      <path d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            vector-effect="non-scaling-stroke"/>
    </svg>
    <h3 class="tw-mt-2 tw-text-sm tw-font-medium tw-text-gray-900">Cart is empty</h3>
    <p class="tw-mt-1 tw-text-sm tw-text-gray-500">Looks like you have no items in your shopping cart.</p>
    <div class="tw-mt-6">
      <nuxt-link class="tw-inline-flex tw-items-center tw-rounded-md tw-border tw-border-transparent tw-bg-indigo-600 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-shadow-sm hover:tw-bg-indigo-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 focus:tw-ring-offset-2"
                 to="/">
        <!-- Heroicon name: mini/plus -->
        <svg aria-hidden="true" class="tw--ml-1 tw-mr-2 tw-h-5 tw-w-5" fill="currentColor"
             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"/>
        </svg>
        Continue Shopping
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "play"
}
</script>

<style scoped>

</style>