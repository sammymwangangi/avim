<template>
  <div>
    <fa v-for="(n,key) in maxStars"
       :icon="n <= value ? ['fas','star'] : ['far','star']"
       :style="getStyle(n)"
       @click="$emit('input', n)" :key="`n-${key}`"></fa>
  </div>
</template>
<script>
export default {
  name: 'Rating',
  props: {
    value: { default: 0},
    maxStars: {type: Number, default: 5},
    starredColor: {type: String, default: "orange"},
    blankColor: {type: String, default: "darkgrey"}
  },
  data() {
    return {}
  },
  methods: {
    getStyle(n) {
      return {
        color: n <= this.value ? this.starredColor : this.blankColor
      }
    }
  }
}
</script>

<style>
/* // floating action button */
.floating_action {
  z-index: 2000;
  position: fixed;
  top: 80%;
  right: 0;
  background-color: transparent;
  color: #fff;
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
  background-color: #E64A19;
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 10px 4px 4px;
  margin-top: -3px;
  font-size: 22px;
}

.floating_action a {
  color: #fff;
  text-decoration: none;
}


</style>
