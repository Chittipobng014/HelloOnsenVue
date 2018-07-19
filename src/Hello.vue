<template>
    <v-ons-page id="hello">
        <v-ons-toolbar>
            <div class="center">
                {{title}}
            </div>
            <div class="right">
                <scan-button @emitDevices="devicesResult"></scan-button>
            </div>
        </v-ons-toolbar>
        <v-ons-list>
            <v-ons-list-header>Nearby Devices</v-ons-list-header>
            <device-list 
            v-for="data in deviceList" 
            v-bind:key="data.device_id"
            v-bind:id="data.device_id"
            v-bind:name="data.displayName"            
            ></device-list>
        </v-ons-list>
    </v-ons-page>
</template>

<script>
import ScanButton from './components/ScanButton'
import DeviceList from './components/DeviceList'

export default {
    name: 'hello',
    data(){
        return{
            deviceList: []
        }
    },
    methods:{
        devicesResult(data){
            this.deviceList = data.slice();
            console.log('Hello' + JSON.stringify(this.deviceList));            
        }
    },
    components:{
        ScanButton,
        DeviceList
    }
}
</script>

<style>
.alignC{
    text-align: center;
}
</style>
