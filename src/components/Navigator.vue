<template>
<v-ons-page>
    <v-ons-toolbar class="home-toolbar">
      <div class="left">
                
      </div>
      <div class="center titleColor">{{ msg }}</div>
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
import HomePage from './HomePage'

export default {
  name: "Scan",
  data() {
    return {
      msg: "Select Box",
      pageStack: [],
      devices: []
    };
  },
  methods: {
    pushPage(device) {
      this.pageStack.push(device);
    },
      
  },
  components:{
    HomePage
  },
  computed: {
    scanResult: function(){
      var result = this.$store.getters.scanResult;
      return result
    },
    selectedDevice : function(){
      var result = this.$store.getters.selectedDevice
      return result
    },
    mainPage: function(){
      var result = this.$store.getters.mainPage
      return result
    }
  },
  mounted: function(){
    console.log(JSON.stringify(HomePage))   
    console.log(JSON.stringify(this.mainPage));
    this.pageStack.push(this.mainPage)
     
  }
};
</script>

<style>
.toolbar {    
    background: #4F4C49;
}
.titleColor{
    color: #FFFFFF;
    font-size: 24px    
}
</style>
