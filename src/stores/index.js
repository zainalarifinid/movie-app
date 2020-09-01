import Vue from 'vue';
import Vuex from 'vuex';

import MovieModule from './Movie';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    MovieModule
  }
});
