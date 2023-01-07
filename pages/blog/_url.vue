<template>
  <section class="tw-container mx-auto tw-pt-24 lg:tw-pt-32">
    <div v-if="article" class="tw-bg-white sm:tw-py-1 md:py-5 lg:py-5">
      <div class="article_title tw-py-3">
        <h1>{{ article.title }}</h1>
        <hr />
      </div>
      <div class="article_image">
        <nuxt-img :src="article.image_url" :alt="article.title" class="tw-object-contain" width="485" height="208"></nuxt-img>
      </div>
      <!-- start body -->
      <div class="tw-p-3">
        <div class="article_body" v-html="article.body"></div>
        <b-row>
          <b-col cols="12">
            <hr />
          </b-col>
          <b-col cols="12"
            ><strong>Published on: {{ article.created_at }} </strong>
            &nbsp;|&nbsp;
            <em>
              Author: <a href="#">{{ publishedBy }}</a>
            </em>
          </b-col>
        </b-row>
      </div>
      <!-- end body -->
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      publishedBy: (state) => state.publishedBy,
    }),

    env() {
      return process.env.imagesURL;
    },
  },
  data() {
    return {};
  },
  async asyncData({ params, $http }) {
    const url = params.url;
    try {
      const article = await $http
        .$get('articles/slug/' + url)
        .then((response) => response.result);
      return { article };
    } catch (err) {
      return { article: {} };
    }
  },
  head() {
    const article = this.article || {};
    return {
      title: article.title,
      meta: [
        { hid: 'description', name: 'description', content: article.meta },
        { hid: 'og:title', name: 'og:title', content: article.title },
        {
          hid: 'og:description',
          name: 'og:description',
          content: article.meta,
        },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://nairobidrinks.com/blog/${article.url}`,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://avimar.online' + this.$route.path,
        },
      ],
    };
  },
};
</script>

<style scoped>
.article_container {
  margin: 14px 14px 80px;
  padding-bottom: 30px;
}

.article > div {
  min-height: 80px;
  margin-top: 12px;
  margin-bottom: 10px;
}

.article_title h1 {
  font-size: 28px;
  font-weight: 600;
  text-align: center;
}

.article_image {
  text-align: center;
}
</style>
