<template>
  <v-ons-page id="app">
    <scan-page @created="deviceData"></scan-page>
  </v-ons-page>
</template>

<script>
import HomePage from './components/HomePage'
import MenuPage from './components/MenuPage'
import ScanPage from './components/ScanPage'

export default {
  name: 'app',
  computed: {
    menuIsOpen: {
      get () {
        return this.$store.state.splitter.open
      },
      set (newValue) {
        this.$store.commit('splitter/toggle', newValue)
      }
    }
  },
  components: {
    HomePage,
    MenuPage,
    ScanPage
  },
  data(){
    return {
      devices: []
    }
  },
  methods: {
    deviceData: function() {            
                this.devices = [];
                ble.startScan([], (res) => {
                var displayName;
                if (res.name) {
                    displayName = res.name;
                }
                else {
                    displayName = res.id;
                }
                this.devices.push({displayName: displayName, device_id: res.id});
                console.log(this.devices);                
                this.$store.commit('scanResult', this.devices);
                }, function (error) {
                console.log(JSON.stringify(error));
                });     
                setTimeout(function () {
                ble.stopScan(
                    function () { },
                    function () { console.log("stopScan failed"); }
                );
            }, 10000);
       },
  },
  created: function(){
    this.$ons.ready( () => {
      //this.deviceData();
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>
