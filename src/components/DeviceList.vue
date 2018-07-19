<template id="main">
  <v-ons-navigator swipeable
    :page-stack="pageStack"
    @push-page="pageStack.push($event)"
  ></v-ons-navigator>
</template>

<template id="page1">       
    <v-ons-list-item modifier="chevron">
        <div class="left">Name: {{name}}</div>
        <div class="right" @click="push"><v-ons-button @click="connectTo(id)">{{state}}</v-ons-button></div>
    </v-ons-list-item>        
</template>

<template id="page2">
    
</template>


<script>
const page1 = {
    key: 'page1',
    template: '#page1',
    props: {
        name:{
            type: String,
            required: true 
        },
        id:{
            type: String,
            required: true 
        }
    },
    data(){
        return{
            state: 'Connect',
            device_id: this.id
        }
    },
    methods: {
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
        push:() => {
            this.$emit('push-page', {
                page2,
                onsNavigatorProps:{
                    id: this.device_id
                }
            });
        }
    }
}

const page2 = {
    key: 'page2',
    template: '#page2',
    props: {
        id: {
            type: String,
            required: true
        }
    }
}

export default {
    
    name: "deviceList",
    template: '#main',
    props: ["name", "id"],
    data(){
        return{
            pageStack: [{
                            page1,
                            onsNavigatorProps:{
                                id: this.id,
                                name: this.name
                            } 
                        }]
        }
    }
};
</script>
