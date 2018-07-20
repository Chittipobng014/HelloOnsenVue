<template>
  <v-ons-page>    
    <v-ons-list-title>Devices</v-ons-list-title>
    <v-ons-list>      
      <device-list
        v-for="data in scanResult" 
        v-bind:key="data.device_id"
        v-bind:id="data.device_id"
        v-bind:name="data.displayName"
        @toLists="push"   
      ></device-list>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
import DeviceList from './DeviceList'
import DeviceDetail from './DeviceDetail'

export default {
  name: "DeviceLists",
  data() {
    return {
      devices: []
    };
  },
  methods: {
    push(data){
      this.$emit('push-page', DeviceDetail)
    }
  },
  computed: {
    scanResult: function(){
      var result = this.$store.getters.scanResult;
      return result;
    }
  },
  components: {
    DeviceList
  }
};
</script>
