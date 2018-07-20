import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scanResult: [],
    selectedDevice: []
  },
  getters: {
    scanResult: state => state.scanResult,
    selectedDevice: state => state.selectedDevice
  },
  mutations: {
    scanResult: (state, payload) => {
      state.scanResult = payload;
    },
    selectedDevice: (state, payload) => {
      state.selectedDevice = payload;
    }
  }
})
