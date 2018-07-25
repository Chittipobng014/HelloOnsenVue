<!--<template id="main">       
    <v-ons-list-item @click="selectDevice(peripheral)">
        <div class="left">{{name}}</div>
        <div class="right"><v-ons-button @click="connectTo(id)">{{state}}</v-ons-button></div>
    </v-ons-list-item>        
</template> -->

<template>
         <v-ons-button class="center box" @click="selectDevice(peripheral)">
             <div>{{name}}</div>
         </v-ons-button>
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
            this.$store.commit('selectedDevice', device);
            this.$emit('toLists', 'push');
            /*ble.isConnected(device.id, (is) => {
                this.$store.commit('selectedDevice', device);
                this.$emit('toLists', 'push');
            }, (isnt) => {

            })*/
           
        },        
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather');

.box{
    margin: auto;
    width: 300px;
    height: 200px;
    background-color: azure;
    color: black;
    border-radius: 0px;
    border: 1px solid gray;
    margin: 1px;
    font-family: 'Merriweather', serif;
    font-size: 35px
}
.center{
    text-align: center
}
</style>
