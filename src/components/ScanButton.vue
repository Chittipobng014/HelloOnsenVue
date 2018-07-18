<template>
    <v-ons-button >Scan</v-ons-button>
</template>

<script>
export default {
    name:'scanButton',
    data(){
        var data = []
        return{
            devices: data
        }
    },
    methods:{
       deviceData:function(){
           console.log(this.devices)
           ble.startScan([], function (res) {
                console.log(JSON.stringify(res));
                var device = [];
                var displayName;
                if (res.name) {
                    displayName = res.name;
                }
                else {
                    displayName = res.id;
                }
                this.devices.push({displayName: displayName, device_id: res.id});
                console.log(JSON.stringify(this.$data.devices));
                }, function (error) {
                console.log(JSON.stringify(error));
                });
       },
    }
}
</script>
