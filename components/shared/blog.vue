<template>
  <div class="floating_action">
    <span class="call">
      <span class="relative">
        <a :href="'/blog'">
          <fa
            :icon="['fab', 'blogger']"
            class="call-action"
            title="Blog"
            aria-hidden="true"
          ></fa>
        </a>
      </span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'FloatingActionBtn',

  data() {
    return {
      position: 0,
    };
  },
  methods: {
    handleScroll() {
      const position = window.scrollY;
      this.position = position;
      console.log('position', position);
    },
    created() {
      this.has_background = this.position > 70;
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  },
};
</script>

<style scoped>
/* // floating action button */
.floating_action {
  z-index: 2000;
  position: fixed;
  top: 94%;
  right: 0;
  background-color: transparent;
  color: #fff;
  /* padding: 4px; */
  border-radius: 100px;
  min-width: 95px;
  margin-right: -30px;
  min-height: 36px;
}
.relative {
  position: relative;
}
.call-action {
  text-align: center;

  border-radius: 100%;
  background-color: #f68f37;
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 6px 7px 4px;
  margin-top: -3px;
  font-size: 22px;
  /* border: 1px solid rgba(255,  255, 255, 0.2); */
}
.floating_action a {
  color: #fff;
  text-decoration: none;
}
/*@media screen and (min-width: 720px) {*/

/*  .floating_action{*/
/*    display: none;*/
/*    opacity: 0;*/
/*  }*/
/*}*/
</style>
