import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash, faPlus, faEdit, faCheck, faList, faSpinner, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)

Vue.config.productionTip = false;

library.add(
  faCheck,
  faEdit,
  faFloppyDisk,
  faList,
  faPlus,
  faSpinner,
  faTrash, 
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');