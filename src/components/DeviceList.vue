<template id="main">       
    <v-ons-list-item @click="selectDevice(peripheral)">
        <div class="left">{{name}}</div>
        <div class="right"><v-ons-button @click="connectTo(id)">{{state}}</v-ons-button></div>
    </v-ons-list-item>        
</template>

<script>

export default {    
    name: "deviceList",
    template: '#main',
    props: ["name", "id"],
    data(){
        return{
            state: 'Connect',
            switcher: false,
            peripheral: null
        }
    },
    methods:{
        connectTo: function(id){
            ble.isConnected(id, (is) =>{
                    ble.disconnect(id, (success) =>{
                        this.peripheral = null;
                        console.log(JSON.stringify(this.peripheral));
                        this.state = 'Connect';                                     
                    }), (error) =>{
                        console.log(JSON.stringify(error));              
                    };
                }, (isnt) =>{
                    ble.connect(id, (peripheral) =>{
                        this.peripheral = peripheral;
                        console.log(JSON.stringify(this.peripheral));
                        this.state = 'Disconnect'        ;                                
                    }), (error) =>{
                        console.log(JSON.stringify(error));              
                    };
                });
        },
        selectDevice(device) {
            ble.isConnected(device.id, (is) => {
                this.$store.commit('selectedDevice', device);
                this.$emit('toLists', 'push');
            }, (isnt) => {

            })
           
        },        
    }
};
</script>
