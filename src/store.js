import Vue from 'vue'
import Vuex from 'vuex'
import HomePage from './components/HomePage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scanResult: [
      {displayName: "Beetle Box No.1" , device_id: "1"},
      {displayName: "Beetle Box No.2" , device_id: "2"},
      {displayName: "Beetle Box No.3" , device_id: "3"},
      {displayName: "Beetle Box No.4" , device_id: "4"},
      {displayName: "Beetle Box No.5" , device_id: "5"},
    ],
    selectedDevice: [],
    deviceList: [
      {displayName: "Beetle Box No.1" , device_id: "1"},
      {displayName: "Beetle Box No.2" , device_id: "2"},
      {displayName: "Beetle Box No.3" , device_id: "3"},
      {displayName: "Beetle Box No.4" , device_id: "4"},
      {displayName: "Beetle Box No.5" , device_id: "5"},
    ],
    mainPage: HomePage
    
  },
  getters: {
    scanResult: state => state.scanResult,
    selectedDevice: state => state.selectedDevice,
    deviceList: state => state.deviceList,
    mainPage: state => state.mainPage
  },
  mutations: {
    scanResult: (state, payload) => {
      state.scanResult = payload;
    },
    selectedDevice: (state, payload) => {
      state.selectedDevice = payload;
    },
    deviceList: (state, payload) => {
      state.deviceList.push(payload)
    },
    mainPage: (state, payload) => {
      state.mainPage = payload
    }
  }
})
