<template>
    <v-ons-page>
        <device-manager
          v-for="data in scanResult"
          v-bind:key="data.device_id"
          v-bind:id="data.device_id"
          v-bind:name="data.displayName"
        ></device-manager>
    </v-ons-page>
</template>


<script>
import DeviceManager from './DeviceManager'


export default {
  name: "main_page",
  data() {
    return {
      id: "",
      password: "",
      telNo: "",
      devices: []
    };
  },
  methods: {
    deviceData: function() {
      this.devices = [];
      ble.startScan(
        [],
        res => {
          var displayName;
          if (res.name) {
            displayName = res.name;
          } else {
            displayName = res.id;
          }
          this.devices.push({ displayName: displayName, device_id: res.id });
          console.log(this.devices);
          this.$store.commit("scanResult", this.devices);
        },
        function(error) {
          console.log(JSON.stringify(error));
        }
      );
      setTimeout(function() {
        ble.stopScan(
          function() {},
          function() {
            console.log("stopScan failed");
          }
        );
      }, 10000);
    },
    register: (id) => {
        this.id = id;
        console.log(this.password);
        console.log(this.telNo);
        console.log(this.id);
        this.password = "";
        this.telNo = ""; 
    }
  },
  computed: {
    scanResult: function() {
      var result = this.$store.getters.scanResult;
      return result;
    }
  },
  mounted: function() {
    this.$ons.ready(() => {
      //this.deviceData();
    });
  },
  components:{
    DeviceManager
  }
};
</script>


<style>
</style>
