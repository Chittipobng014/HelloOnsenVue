<template>
<v-ons-page>
    <v-ons-toolbar class="home-toolbar">
      <div class="left">        
      </div>
      <div class="center">{{ msg }}</div>
      <div class="right"><scan-button @emitDevices="devicesResult"></scan-button></div>
    </v-ons-toolbar>
  <v-ons-navigator swipeable
    :page-stack="pageStack"
    @push-page="pushPage"
  >
  </v-ons-navigator>
</v-ons-page>
</template>

<script>
import DeviceLists from "./DeviceLists";
import DeviceDetail from "./DeviceDetail";
import ScanButton from './ScanButton'

export default {
  name: "Scan",
  data() {
    return {
      msg: "Scan",
      pageStack: []
    };
  },
  methods: {
    pushPage(device) {
      this.pageStack.push(device);
    },
    devicesResult(devices){  
      this.$store.commit('scanResult', devices);
      this.pageStack.push(DeviceLists)     
    }
  },
  components:{
    ScanButton
  },
  computed: {
    scanResult: function(){
      var result = this.$store.getters.scanResult;
      return result
    },
    selectedDevice : function(){
      var result = this.$store.getters.selectedDevice
      return result
    }
  }
};
</script>
