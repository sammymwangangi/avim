<template>
  <div>
    <div>
      <b-carousel
        v-if="carousels && carousels.length > 1"
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          id="carousel-item"
          v-for="carousel in carousels"
          :key="carousel._id"
          :caption="carousel.caption"
          :text="carousel.details"
          :img-src="`${carousel.image_url}`"
        >
          <template #img>
            <img
              class="d-block"
              :src="`${carousel.image_url}`"
              alt="Nairobi Drinks"
              height="270"
              width="600"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
      <b-carousel
        v-else
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          id="carousel-item"
          v-for="carousel in carousels"
          :key="carousel._id"
          :caption="carousel.caption"
          :text="carousel.details"
          :img-src="`${carousel.image_url}`"
        >
          <template #img>
            <img
              class="d-block"
              :src="`${carousel.image_url}`"
              alt="Nairobi Drinks"
              height="270"
              width="600"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import { vueWindowSizeMixin } from 'vue-window-size';

export default {
  mixins: [vueWindowSizeMixin],
  props: {
    carousels: {
      required: true,
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style>
@media screen and (min-width: 769px) {
  #carousel-item {
    height: 270px;
  }
  #carousel-item img {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 270px;
    width: 100%;
  }
  #carousel-1 {
    position: relative;
    top: 80px;
    overflow: hidden;
  }
  .carousel-indicators li {
    background-color: #ff1f1f;
  }
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  #carousel-1 {
    position: relative;
    top: 80px;
    overflow: hidden;
  }
  #carousel-item img {
    height: auto;
    width: 100%;
  }
  .carousel-indicators li {
    background-color: #ff1f1f;
  }
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
  }
}

@media screen and (min-width: 481px) and (max-width: 575px) {
  #carousel-1 {
    position: relative;
    top: 80px;
    overflow: hidden;
  }
  #carousel-item img {
    height: auto;
    width: 100%;
  }
  .carousel-indicators li {
    background-color: #ff1f1f;
  }
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f00' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
  }
}

@media screen and (max-width: 481px) {
  #carousel-item img {
    height: auto;
    width: 100%;
  }
  #carousel-1 {
    position: relative;
    top: 110px;
    overflow: hidden;
  }
}
</style>
