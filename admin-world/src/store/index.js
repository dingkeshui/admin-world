import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import app from './modules/layout'
import layout from './modules/layout'
import user from './modules/user'

export default new Vuex.Store({
  modules:{
    layout,
    user,
    app
  }
});