// Vendors
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueGeolocation from 'vue-browser-geolocation';
import VueMoment from 'vue-moment';
import VueDraggableResizable from 'vue-draggable-resizable'
import Autocomplete from '@trevoreyre/autocomplete-vue'
import { CoolSelectPlugin } from 'vue-cool-select'
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
// styles
import '@trevoreyre/autocomplete-vue/dist/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import 'vue-cool-select/dist/themes/bootstrap.css'
import 'vue-cool-select/dist/themes/material-design.css'

 
library.add(faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.use(CoolSelectPlugin);

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueGeolocation);
Vue.use(BootstrapVue);
Vue.use(VueMoment);
Vue.use(Autocomplete)
const router = new VueRouter({routes})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
