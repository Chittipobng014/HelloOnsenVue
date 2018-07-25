import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scanResult: [
      {displayName: "1", device_id: "001"},
      {displayName: "2", device_id: "002"},
      {displayName: "3", device_id: "003"},
      {displayName: "4", device_id: "004"},
      {displayName: "5", device_id: "005"},
      {displayName: "6", device_id: "006"},
      {displayName: "7", device_id: "007"},
      {displayName: "8", device_id: "008"},
      {displayName: "9", device_id: "009"},
      {displayName: "10", device_id: "010"},
      {displayName: "11", device_id: "011"},
      {displayName: "12", device_id: "012"},
      {displayName: "13", device_id: "013"},
      {displayName: "14", device_id: "014"},
      {displayName: "15", device_id: "015"},
      {displayName: "16", device_id: "016"},
      {displayName: "17", device_id: "017"},
      {displayName: "18", device_id: "018"},
      {displayName: "19", device_id: "019"},
    ],
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
