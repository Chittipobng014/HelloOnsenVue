<template>
    <v-ons-page id="hello">
        <v-ons-toolbar>
            <div class="center">
                {{title}}
            </div>
            <div class="right">
                <v-ons-toolbar-button @click="scan()">
                    <div style="font-size: 20px;">
                        Scan
                    </div>
                </v-ons-toolbar-button>
            </div>
        </v-ons-toolbar>

        <v-ons-list>
            <v-ons-list-header>Nearby Devices</v-ons-list-header>
                <v-ons-list-item modifier="chevron" v-for="device in devices" :key="device.device_id">
                    <div class="left">{{device.displayName}}</div>
                    <div class="right"><v-ons-button @click="connectTo(device.device_id)">Connect</v-ons-button></div>
                </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>

<script>
export default {
    name: 'hello',
    data(){
        return{
            title: 'SmartBox V0.1',
            devices: null
        }
    },
    methods:{
        scan:function(){
            var promise1 = new Promise(function(resolve, reject) {
                var array = [];
                var device;
                ble.startScan([], function (res) {
                console.log(JSON.stringify(res));
                var displayName;
                if (res.name) {
                    displayName = res.name;
                }
                else {
                    displayName = res.id;
                }
                device = {displayName: displayName, device_id: res.id};
                array.push(device);
                console.log(JSON.stringify(device));
                }, function (error) {
                    console.log(JSON.stringify(error));
                });            
                resolve(array);
            });

            promise1.then(function(val){
                setDevices(val)
            })
            
            setTimeout(function () {
                ble.stopScan(
                    function () { console.log("Scan complete"); },
                    function () { console.log("stopScan failed"); }
                );
            }, 35000);
        },
        connectTo:function(device_id){
            console.log("Connecting...");
            ble.connect(device_id, function (data) {
                ble.isConnected(device_id, function () {
                console.log("Peripheral is connected");
            }, function () {
                console.log("Peripheral is *not* connected");
            }
        );    
        }, function (err) {
            console.error('error connecting to device')
        });
        },
        setDevices:function(obj){
            this.devices = obj;
        }
    }
}
</script>

<style>
.alignC{
    text-align: center;
}
</style>
