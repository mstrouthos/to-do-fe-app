import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faHome, faTrash, faPlus, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false;

library.add(faUser, faHome, faTrash, faPlus, faEdit, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app');