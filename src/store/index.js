import Vue from 'vue'
import Vuex from 'vuex'
import goodsOptions from './goods'
import orderOptions from './order'
import listOptions from './list'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    goodsAbout: goodsOptions,
    orderAbout: orderOptions,
    listAbout: listOptions
  }
})
