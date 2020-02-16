import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    todos
  }
});


// entry point for vuex
// combine modules here, and add modules to the Vuex store.