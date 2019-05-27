import Vue from 'vue'
import Vuex from 'vuex'
import errorLog from './modules/errorLog'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    errorLog
  },
  getters
})

export default store
