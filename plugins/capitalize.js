import Vue from 'vue'

Vue.filter('capitalize', function (val) {
  if (!val || val === '') return ''
  val.toString()
  return val.charAt(0).toUpperCase() + val.slice(1)
})

