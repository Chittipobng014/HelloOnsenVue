<template>
  <v-ons-page>
    <v-ons-row style="height: 100vh">
      <v-ons-col width="50%">
        <div style="width: 100%; height: 100%; background-color: #ffc533; position: relative" @click="menuTo('start')">
          <v-ons-ripple
            color="rgba(64, 64, 64, 1)"
            background="rgba(64, 64, 64, 0.4)"
          >
            <v-ons-row style="height: 100vh">
              <v-ons-col class="center">
                <div style="font-size: 9vw; color: #404040; font-family: 'Merriweather', serif;">Start</div>
                <div><div><img style="width: 24vw;  height: 24vh; " src="../assets/start.png" alt=""></div></div>
              </v-ons-col>
            </v-ons-row>          
          </v-ons-ripple>
        </div>
      </v-ons-col>
      <v-ons-col width="50%">
        <div style="width: 100%; height: 100%; background-color: #404040; position: relative" @click="menuTo('admin')">
          <v-ons-ripple
            color="rgba(255, 197, 51, 1)"
            background="rgba(255, 197, 51, 0.4)"
          >
            <v-ons-row style="height: 100vh;">              
              <v-ons-col class="center">
                <div style="font-size: 9vw; color: #dbdbdb; font-family: 'Merriweather', serif;">Setting</div>
                <div><img style="width: 24vw;  height: 24vh" src="../assets/admin.png" alt=""></div>
              </v-ons-col>
            </v-ons-row>
          </v-ons-ripple>
        </div>
      </v-ons-col>
    </v-ons-row>
  </v-ons-page>
</template>


<script>
import AdminModule from './AdminModule'
import DeviceLists from './DeviceLists'
export default {
  name: 'home',
  data () {
    return {
     
    }
  },
  methods: {
      menuTo: function(page){
        if (page == 'admin') {
          this.$store.commit('mainPage', AdminModule)                
        }else if (page == 'start') {
          this.$store.commit('mainPage', DeviceLists)         
        }
      }
  },
  computed:{
    mainPage: function(){
      return this.$store.getters.mainPage
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather');
.center{
  text-align: center;
  margin: auto;
}
</style>

