import Vue from 'vue'

Vue.filter('shorten', function (v) {
  return v.substring(0, 50) + '...see more'
})
