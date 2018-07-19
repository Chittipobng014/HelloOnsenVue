<template>       
    <v-ons-list-item>
        <div class="left">{{name}}</div>
        <div class="right"><v-ons-button @click="connectTo(id)">{{state}}</v-ons-button></div>
    </v-ons-list-item>        
</template>

<script>

export default {    
    name: "deviceList",
    props: ["name", "id"],
    data(){
        return{
            state: 'Connect'
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
        }
    }
};
</script>
