<template>
  <div>
    <section class="tw-pt-16 lg:tw-pt-32">
      <div class="tw-container tw-mx-auto tw-py-5">
        <!-- Breadcrumb -->
        <nav id="breadcrumb" class="tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5" aria-label="breadcrumb">
          <ol class="tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3">
            
          </ol>
        </nav>
        <h5 class="tw-text-green-600">
          <strong>Order placed successfully</strong>
        </h5>
        <div
          class="card tw-my-3 tw-rounded-0 tw-p-2 tw-shadow"
          style="border-left:3px solid #EC2326"
        >
          <p>
            Hello, we have received your order, we will call you in a few
            minutes<br />
            as we dispatch your products from our stores. Thank you.
          </p>
          <div class="tw-text-right">
            <a
              ><img
                :src="`/android.webp`"
                style="cursor: pointer;width: 100px;height:50px;"
                alt="Google play store"
            /></a>
            <a
              ><img
                :src="`/ios.webp`"
                style="cursor:pointer;width: 100px;height:50px;"
                alt="Apple store"
            /></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $http }) {
    try {
      const meta = await $http
        .$get(`/metas/get-by-category/order`)
        .then((response) => response.result);
      return { meta };
    } catch (err) {
      return { meta: {} };
    }
  },
  head() {
    const meta = this.meta;
    return {
      title: meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: meta.metadescription,
        },
        { hid: 'og:title', name: 'og:title', content: meta.title },
        {
          hid: 'og:description',
          name: 'og:description',
          content: meta.metadescription,
        },
        { hid: 'og:type', name: 'og:type', content: 'website' },
      ],
    };
  },
};
</script>

<style>
@media screen and (min-width: 769px) {
  #breadcrumb {
    position: relative;
    top: -15px;
    overflow: hidden;
  }
}


@media (min-width: 576px) and (max-width: 768px) {
  #breadcrumb {
    position: relative;
    top: -15px;
    overflow: hidden;
  }
}

@media screen and (min-width: 481px) and (max-width: 575px) {
  #breadcrumb {
    position: relative;
    top: -15px;
    overflow: hidden;
  }
}

@media screen and (max-width: 481px) {
  #breadcrumb {
    position: relative;
    top: 37px;
    overflow: hidden;
  }
}
</style>
