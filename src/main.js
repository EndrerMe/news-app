// Vendors
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueGeolocation from 'vue-browser-geolocation';
import VueMoment from 'vue-moment';
// Main Component
import App from './App.vue'
// Router Component
import routes from './routes';
// Fonts
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Bootstrap
import BootstrapVue from 'bootstrap-vue'
// Bootstrap Style
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


library.add(faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueGeolocation);
Vue.use(BootstrapVue);
Vue.use(VueMoment);
const router = new VueRouter({routes})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
