<template>
  <div class="container-fluid blog_carousel">
    <b-row>
      <b-col class="carousel tw-text-center">
        <div class="headers">
          <h1 class="tw-text-red-600">Nairobi Drinks Blog - Let's Talk About Alcohol</h1>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'blogCarousel',
};
</script>

<style scoped>

.headers {
  margin-top: 10%;
  margin-bottom: 4rem;
  font-family: roboto, serif;
}

@media screen and (min-width: 769px) {
}

@media (min-width: 576px) and (max-width: 768px) {
  .blog_carousel {
    position: relative;
    top: 80px;
    overflow: hidden;
  }
}

@media screen and (min-width: 481px) and (max-width: 575px) {
  .blog_carousel {
    position: relative;
    top: 80px;
    overflow: hidden;
  }
}

@media screen and (max-width: 481px) {
  .blog_carousel {
    position: relative;
    top: 80px;
    overflow: hidden;
  }
  .headers {
    margin-bottom: 6rem;
  }
}
</style>
