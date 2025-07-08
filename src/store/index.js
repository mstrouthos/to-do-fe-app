import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks
    }
  },
  
  plugins: [createPersistedState()]
})

export default store