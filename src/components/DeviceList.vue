<template>
        <v-ons-list>
            <v-ons-list-header>Nearby Devices</v-ons-list-header>
                <v-ons-list-item modifier="chevron" v-for="device in devices" :key="device.device_id">
                    <div class="left">{{device.displayName}}</div>
                    <div class="right"><v-ons-button @click="connectTo(device.device_id)">Connect</v-ons-button></div>
                </v-ons-list-item>
        </v-ons-list>
</template>

<script>
export default {
    name: 'deviceList',
    data(){
        return{
            devices: []
        }
    },
    methods:{
        
    }
}
</script>
