<template>
  <div class="tw-pt-16 lg:tw-pt-32">
    <div class="clearfix">&nbsp;</div>
    <div class="clearfix">&nbsp;</div>
    <div class="tw-container tw-bg-white sm:tw-my-1 md:my-5 lg:my-5">
      <div class="p-3">
        <h2 class="tw-font-medium tw-text-blue-600">CARSON</h2>
        <p>
          Truth is, there are no so many alcohol experts around. Carson is a
          self taught enthusiast whose interests lie in the alcoholic realm and
          in the overall responsible use of alcoholic drinks. It would be really
          biased to say that Carson is a lover of spirits, wine lover, or beer.
          Carson believes that all this drinks are purposeful and the right
          drink is where the trick lies. Crack that and you can lead a buzzed
          life full of experiences, for you and those close to you.
        </p>

        <p>
          “Let the drink work for you.” Economists say that money should work
          for you. Carson equally and strongly believes that alcoholic drinks
          should work for you too. Get the right flavour, the right size, the
          right brand, the right ABV and consequentially alcohol regard as a
          downside will be a thing of the past.
        </p>

        <p>
          Carson drinking habits are a thing to emulate and this was a major
          motivation behind venturing in the great online alcohol delivery
          industry with the iconic Nairobi Drinks Limited, a company that deals
          with delivery of alcoholic drinks and chasers for individual orders
          and corporate orders. Drinking of alcohol should not be a forced
          thing. It should be people drinking the alcohol of their choice at
          their comfort while addressing their safety. Safety in this case could
          include avoiding unruly crowds, strangers and road safety by avoiding
          drunk driving. This is exactly what Nairobi Drinks Limited provides by
          offering alcohol delivery services to your doorstep and advising on
          what drinks could best serve the situation and their best prices.
        </p>

        <p>
          Imagine a party without drinks simply because the physical liquor
          stores closed. Or a stranded tourist trying to hop from shop to shop
          looking for a specific drink. Its at this point and other situations
          that Nairobi Drinks Limited comes through in rescue providing a vast
          library of drinks to choose from its website, mobile app, social media
          platforms or call via <b>0714798820.</b> It would be typical but
          acceptable anyway to refer to Nairobi Drinks Limited as the “drinks
          hero.”
        </p>

        <ul class="list-unstyled">
          <li>Best drinking experience.</li>
          <li>The best alcohol prices in the market.</li>
          <li>Best customer experience.</li>
          <li>Expert advice around alcohol.</li>
        </ul>

        <h4><strong>Academic Background</strong></h4>
        <ul>
          <li>BSC Mathematics and Computer Science</li>
          <li>Diploma in Cyber Security</li>
          <li>Digital Marketing Expert</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Carson',
  data() {
    return {};
  },
  async asyncData() {
    try {
      const defaultMeta = {
        metadescription:
          'Drinks, cakes & gift hampers delivery Nairobi. Buy whisky, wine, beer, online',
        title: 'Dial a delivery. Drinks, cakes, gifts delivery',
      };
      return { meta: { ...defaultMeta } };
    } catch (err) {}
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
        // { hid: 'og:url', name: 'og:url', content: `https://dialadelivery.co.ke/${this.category}/${this.subcategory}` },
        // { hid: 'og:image', name: 'og:image', content: `https://dialadelivery.co.ke/images/wine-glasses.png` }
      ],
    };
  },
  methods: {},
};
</script>
<style>
h1 {
  text-transform: capitalize;
}
</style>
