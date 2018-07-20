<template>
  <v-ons-page>
      <v-ons-button @click="turnONOFF('ON')">ON</v-ons-button>
      <v-ons-button @click="turnONOFF('OFF')">OFF</v-ons-button>
  </v-ons-page>
</template>

<script>
import bluetooth from './../js/bluetooth'

export default {
  name: "DeviceDetail",
  data() {
    return {
      msg: "Device Detail",
    };
  },
  methods: {
    turnONOFF(cmd){
      bluetooth.turnONOFF(this.selectedDevice, cmd)
    }
  },
  computed: {
    selectedDevice: function(){
      var result = this.$store.getters.selectedDevice;
      return result
    }
  }
};
</script>
