import Vue from 'vue'
import App from './App.vue'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

// Mixins
import './mixins/helpers'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
