<template>
    <v-ons-button @click="deviceData">Scan</v-ons-button>
</template>

<script>
export default {
    name:'scanButton',
    data(){
        var data = []
        return{
            devices: data,
            flag: false
        }
    },
    methods:{
       deviceData:function(){
                this.devices = [];
                ble.startScan([], (res) => {
                console.log("scanning");
                var device = [];
                var displayName;
                if (res.name) {
                    displayName = res.name;
                }
                else {
                    displayName = res.id;
                }
                this.devices.push({displayName: displayName, device_id: res.id});
                this.$emit('emitDevices', this.devices)
                }, function (error) {
                console.log(JSON.stringify(error));
                });     
                setTimeout(function () {
                ble.stopScan(
                    function () { console.log("Scan complete"); },
                    function () { console.log("stopScan failed"); }
                );
            }, 10000);
       },      
    },
     computed:{

    }
}
</script>
