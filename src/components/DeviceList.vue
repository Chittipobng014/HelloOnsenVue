<template>       
    <v-ons-list-item>
        <div class="left">{{name}}</div>
        <div class="center"><v-ons-button @click="switcing(id)">{{switcher}}</v-ons-button></div>
        <div class="right"><v-ons-button @click="connectTo(id)">{{state}}</v-ons-button></div>
    </v-ons-list-item>        
</template>

<script>

export default {    
    name: "deviceList",
    props: ["name", "id"],
    data(){
        return{
            state: 'Connect',
            switcher: false
        }
    },
    methods:{
        connectTo: function(id){
            ble.isConnected(id, (is) =>{
                    ble.disconnect(id, (success) =>{
                        console.log(JSON.stringify(success));
                        this.state = 'Connect'                                       
                    }), (error) =>{
                        console.log(JSON.stringify(error));              
                    };
                }, (isnt) =>{
                    ble.connect(id, (peripheral) =>{
                        console.log(JSON.stringify(peripheral));
                        this.state = 'Disconnect'                                        
                    }), (error) =>{
                        console.log(JSON.stringify(error));              
                    };
                });
        },
        /*switcing: (id) =>{
            $.each(data.characteristics, function (i, j) {
                if (j.properties == "Notify") {
                    ble.startNotification(device_id, j.service, j.characteristic, function (buffer) {
                        var data = bytesToString(buffer);
                        var render = 'Value: ' + data;
                        $('#value').html(render);
                    }, function (error) {
                    console.log(error);
                    });
                } else if (j.properties == "Write") {
                    console.log(JSON.stringify(j));
                    page.querySelector('#on').onclick = function () {
                        var data = stringToBytes("ON");
                        ble.write(device_id, j.service, j.characteristic, data, function () {
                            ons.notification.alert("Success");
                        }, function () {
                            ons.notification.alert("Fail");
                        });
                    }
                }
            })    
        }*/
    }
};
</script>
