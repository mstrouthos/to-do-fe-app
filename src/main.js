import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash, faPlus, faEdit, faCheck, faList, faSpinner } from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false;

library.add(faTrash, faPlus, faEdit, faCheck, faList, faSpinner)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app');