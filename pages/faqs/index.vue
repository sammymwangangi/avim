<template>
  <div>
    <section class="tw-pt-32 lg:tw-pt-32">
      <div class="tw-bg-white tw-container tw-mx-auto tw-px-2">
        <!-- Breadcrumb -->
        <nav id="breadcrumb" class="tw-flex tw-text-gray-700 tw-border tw-py-3 tw-px-5" aria-label="breadcrumb">
          <ol class="tw-list-none tw-no-underline tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3">
            <li class="tw-inline-flex tw-items-center">
              <a :href="'/'" class="tw-no-underline tw-text-sm tw-text-gray-700 hover:tw-text-gray-900 tw-inline-flex tw-items-center dark:tw-text-gray-400 dark:hover:tw-text-white">
                <svg class="tw-w-4 tw-h-4 tw-mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                Home
              </a>
            </li>
            <li aria-current="page">
              <div class="tw-flex items-center">
                <svg class="tw-w-6 tw-h-6 tw-text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="tw-text-gray-400 tw-ml-1 md:tw-ml-2 tw-text-sm tw-font-medium dark:tw-text-gray-500">Faqs</span>
              </div>
            </li>
          </ol>
        </nav>
        <span class="header_area tw-mt-1">
          <h1
            class="tw-mt-2 border-top tw-capitalize tw-text-center tw-text-red-600 heading_one"
          >
            {{ meta.headerOne || '' }}
          </h1>
        </span>
        <div class="tw-p-2">
          <ul class="list-group">
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">1. Are you open 24/7.</h5>
              <p>
                yes we are open 24/7 and we supply drinks at all times anywhere
                within Nairobi for free and other places at discounted prices.
              </p>
            </li>
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">
                2. Do you have a physical outlet and where are you located ?
              </h5>
              <p>
                Nairobi drinks is an online shop and we do not currently have a
                physical outlet
              </p>
            </li>
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">
                3. Which is the most expensive whiskey?
              </h5>
              <p>
                Nairobi drinks stocks some of the most expensive whiskeys that
                one can find.
              </p>
              <p>This are :</p>
              <ul>
                <li>1. The macallan no. 6 @ ksh 600000</li>
                <li>2. Remy martin louis xiii @ ksh 450,000</li>
                <li>3. Hennessy paradis @ ksh 250,000</li>
                <li>4. Johnnie walker odyssey @ ksh 150,000</li>
              </ul>
            </li>
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">
                4. Which is the most expensive wine?
              </h5>
              <p>
                Some of the most expensive wines stocked by Nairobi Drinks
                include:
              </p>
              <ul>
                <li>1. Simonsig rose @ kshs5999.</li>
                <li>2. Simonsig sparkling brut @ ksh5999</li>
              </ul>
            </li>
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">5. Which is the sweetest wine?</h5>
              <p>
                Some of the sweet wines stocked in Nairobi Drinks are inclusive
                of : red sweet wines (mara nyekundu, martini rosso, robertson
                winery sweet red) white sweet wines (robertson winery sweet
                white, 4th street white sweet, bird and bees white sweet malbec)
              </p>
            </li>
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">6. Which is the best champagne?</h5>
              <p>Veuve clicquot la grande dame</p>
            </li>
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">
                7. What is the best wine for ladies?
              </h5>
              <p>
                Most ladies will go for red sweet wines. Other great wines for
                ladies are inclusive of shiraz and pinotage. Call nairobi drinks
                to explain your taste preferences and get recommendations.
              </p>
            </li>
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">
                8. Which drink can a pregnant woman have?
              </h5>
              <p>
                Pregnant women should have nonalcoholic drinks such as chamdor
                or other prescriptions as per their doctors.
              </p>
            </li>
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">9. Is there delivery fee?</h5>
              <p>
                Nairobi Drinks delivers drinks and products for free within
                Nairobi. Deliveries outside of Nairobi will inccur some delivery
                fee as discussed before the delivery is dispatched from Nairobi
                Drinks.
              </p>
            </li>
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">
                10. How do I place my order online?
              </h5>
              <p>
                It is simple. Simply visit our website
                <b>www.nairobidrinks.co.ke</b> or download our mobile
                application (nairobi drinks) on play store or app store.
              </p>
            </li>
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">
                11. Can you deliver for someone else on my behalf?
              </h5>
              <p>
                Yes . All we shall require is delivery details.
              </p>
            </li>
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">12. Which is the best gift pack?</h5>
              <p>
                According to the occasion Nairobi Drinks has a wide variety of
                gift pack and advice on this will be done for free.
              </p>
            </li>
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">
                13. Can you deliver alcohol in Embakasi?
              </h5>
              <p>YES we can.</p>
            </li>
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">
                14. Do you have wholesale prices?
              </h5>
              <p>
                Yes we have discounted wholesale prices for all our products.
              </p>
            </li>
            <li class="list-group-item">
              <h5 class="tw-text-blue-800">15. Can I have your pricelist?</h5>
              <p>
                Yes you can as per the drinks you desire or comprehensively.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Faqs',
  data() {
    return {};
  },
  async asyncData({ $http }) {
    try {
      const meta = await $http
        .$get('metas/get-by-category/faqs')
        .then((response) => response.result);
      return { meta };
    } catch (err) {
      return { meta: {} };
    }
  },
  head() {
    const meta = this.meta || {};
    return {
      title: this.meta.title,
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
      link: [
        {
          rel: 'canonical',
          href: 'https://nairobidrinks.co.ke' + this.$route.path,
        },
      ],
    };
  },
};
</script>
<style>
.header_area {
  min-height: 20px;
  text-align: center;
  background: #f5f5f5;
}
@media screen and (min-width: 769px) {
  #breadcrumb {
    position: relative;
    top: -15px;
    overflow: hidden;
  }

  .heading_one {
    margin-top: -20px;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  #breadcrumb {
    position: relative;
    top: -15px;
    overflow: hidden;
  }

  .heading_one {
    margin-top: -20px;
  }
}

@media screen and (min-width: 481px) and (max-width: 575px) {
  #breadcrumb {
    position: relative;
    top: -15px;
    overflow: hidden;
  }

  .heading_one {
    margin-top: -20px;
  }
}

@media screen and (max-width: 481px) {
  #breadcrumb {
    display: none;
  }

  .heading_one {
    padding: 10px;
    font-size: 1.2em;
    margin-bottom: 1px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
}
</style>
