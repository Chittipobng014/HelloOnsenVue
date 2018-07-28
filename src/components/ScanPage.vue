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
  },
  mounted: function(){
    this.pageStack.push(DeviceLists);
    console.log(JSON.stringify(this.scanResult))    
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
