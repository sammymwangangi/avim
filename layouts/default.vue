<template>
  <div>
    <Menu />
    <nuxt></nuxt>
    <call-button></call-button>
    <whats-app></whats-app>
    <Footer />
  </div>
</template>

<script>
const Menu = () =>
  import(/* webpackChunkName: "Menu" */ '~/components/partials/Menu');
const Footer = () =>
  import(/* webpackChunkName: "Footer" */ '~/components/partials/Footer');
const CallButton = () =>
  import(/* webpackChunkName: "CallButton" */ '~/components/shared/call');
const WhatsApp = () =>
  import(/* webpackChunkName: "WhatsApp" */ '~/components/shared/whatsapp');
const Blogger = () =>
  import(/* webpackChunkName: "Blogger" */ '~/components/shared/blog');

export default {
  components: {
    Menu,
    Footer,
    CallButton,
    WhatsApp,
    Blogger,
  },
};
</script>
<style>
html,
body {
  background-color: rgb(248 250 252);
  height: 100%;
}

@media screen and (min-width: 1024px) {
  h1 {
    font-size: 2rem !important;
  }

  .heading_one {
    margin-bottom: 20px;
  }
}

@media screen and (min-width: 769px) {
  h1 {
    font-size: 2rem !important;
  }


  .heading_one {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 481px) {
  h1 {
    font-size: 1.125rem !important;
  }
  #breadcrumb {
    display: none;
  }
  #banner {
    display: none;
  }

  .filters {
    position: absolute;
    overflow: hidden;
  }
}

</style>
