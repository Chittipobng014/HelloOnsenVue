<template>
  <v-ons-page>
    <div class="container">
      <div class="">
        <device-list
          v-for="data in deviceList" 
          v-bind:key="data.device_id"
          v-bind:id="data.device_id"
          v-bind:name="data.displayName"
          @toLists="push"   
        ></device-list>
      </div>   
    </div>    
  </v-ons-page>
</template>

<script>
import DeviceList from './DeviceList'
import DeviceDetail from './DeviceDetail'

export default {
  name: "DeviceLists",
  data() {
    return {
      devices: []
    };
  },
  methods: {
    push(data){
      this.$emit('push-page', DeviceDetail)
    }
  },
  computed: {
    deviceList: function(){
      var result = this.$store.getters.deviceList;
      return result;
    }
  },
  components: {
    DeviceList
  }
};
</script>

<style>
.page__background {
    background-color: #F0A536;
}
.flex{
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
  text-align: center;
  margin-top: 2px;
  justify-items: center;
}
.container{
  margin: 0 auto;
  padding-left: 79px;
  padding-right: 79px
}
</style>
