<template>
  <div class="tw-container mx-auto tw-px-4 tw-pt-2">
    <b-row>
      <LazyHydrate when-visible>
        <blog-carousel />
      </LazyHydrate>
    </b-row>
    <div v-if="loading">
      <span
        class="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      ..loading blogs
    </div>
    
    <div v-else class="lg:tw-grid lg:tw-grid-cols-3 tw-gap-4 tw-py-3">
      <div
        class="tw-mb-2"
        v-for="(article, index) in articles"
        :key="`${index + article._id}`"
      >
        <LazyHydrate when-visible>
          <article-list
            :title="article.title"
            :url="article.url"
            :preview="article.body"
            :image_url="article.image_url"
            :published-on="article.created_at"
          ></article-list>
        </LazyHydrate>
        <div
          v-if="articles.length"
          v-observe-visibility="handleScrolledToBottom"
        ></div>
      </div>
    </div>
    <client-only>
      <infinite-loading
        spinner="spinner"
        :identifier="infiniteId"
        @infinite="infiniteHandler"
      >
        <div class="text-red" slot="no-more">No more blogs</div>
        <div class="text-red" slot="no-results">&nbsp;</div>
      </infinite-loading>
    </client-only>
  </div>
</template>
<script>
import LazyHydrate from 'vue-lazy-hydration';
const ArticleList = () => import('~/components/blog/article-list');
const BlogCarousel = () => import('~/components/blog/blog-carousel');
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'blog',
  transition: 'slide-right',
  components: {
    BlogCarousel,
    ArticleList,
    LazyHydrate,
    InfiniteLoading
  },

  data() {
    return {
      loading: false,
      articles: [],
      page: 1,
      lastPage: 0,
      isInit: true,
      infiniteId: +new Date(),
    };
  },

  async asyncData({ $http, params }) {
    try {
      const meta = await $http
        .$get(`metas/get-by-category/blog`)
        .then((response) => response.result);
      return { meta };
    } catch (err) {
      return { meta: {} };
    }
  },
  async fetch() {
    let articles = await this.$http.$get(`articles/all?page=${this.page}`);
    this.articles.push(...articles.result.data);
    this.lastPage = articles.result.last_page;
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(
        function() {
          this.fetchArticles()
            .then((response) => {
              if (response.result.data.length > 0) {
                this.lastPage = response.result.last_page;
                response.result.data.forEach((message) => {
                  this.articles.push(message);
                });
                if (this.page - 1 === this.lastPage) {
                  this.page = 1;
                  $state.complete();
                } else {
                  this.page += 1;
                }
                $state.loaded();
              } else {
                this.page = 1;
                $state.complete();
              }
            })
            .catch((e) => console.log(e));
        }.bind(this),
        50
      );
    },
    handleScrolledToBottom(isVisible) {
      if (!isVisible) {
        return;
      }
      if (this.page >= this.lastPage) {
        return;
      }
      this.page++;
      this.$fetch();
    },
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.metadescription,
        },
        { hid: 'og:title', name: 'og:title', content: this.meta.title },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.meta.metadescription,
        },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://nairobidrinks.co.ke/blog`,
        },
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
/* .component_container {
  padding-top: 12px;
  margin-bottom: 80px;
  padding-bottom: 30px;
}

.sidebar {
  background-color: #fff;
  padding: 8px;
  margin-top: 20px;
} */
</style>
