<template>
  <v-ons-page>
    <v-ons-row>
      <v-ons-col>
        Passcode
      </v-ons-col>
    </v-ons-row>
    <v-ons-row>
      <v-ons-col>
        <v-ons-card class="pin">
          <v-ons-row style="margin-top: 30px">
            <v-ons-col>
              <v-ons-button class="pinButton" @click="press(1)">
                1
              </v-ons-button>
            </v-ons-col>
            <v-ons-col>
              <v-ons-button class="pinButton" @click="press(2)">
                2
              </v-ons-button>
              </v-ons-col>
            <v-ons-col>
              <v-ons-button class="pinButton" @click="press(3)">
                3
              </v-ons-button>
            </v-ons-col>
          </v-ons-row>
          <v-ons-row style="margin-top: 50px">
            <v-ons-col>
              <v-ons-button class="pinButton" @click="press(4)">
                4
              </v-ons-button>
            </v-ons-col>
            <v-ons-col>
              <v-ons-button class="pinButton" @click="press(5)">
                5
              </v-ons-button>
            </v-ons-col>
            <v-ons-col>
              <v-ons-button class="pinButton" @click="press(6)">
                6
              </v-ons-button>
            </v-ons-col>
          </v-ons-row>
          <v-ons-row style="margin-top: 50px">
            <v-ons-col
            ><v-ons-button class="pinButton" @click="press(7)">
                7
              </v-ons-button>
            </v-ons-col>
            <v-ons-col>
              <v-ons-button class="pinButton" @click="press(8)">
                8
              </v-ons-button>
            </v-ons-col>
            <v-ons-col>
              <v-ons-button class="pinButton" @click="press(9)">
                9
              </v-ons-button>
            </v-ons-col>
          </v-ons-row>
          <v-ons-row style="margin-top: 50px">
            <v-ons-col></v-ons-col>
            <v-ons-col>
              <v-ons-button class="pinButton" @click="press(0)">
                0
              </v-ons-button>
            </v-ons-col>
            <v-ons-col></v-ons-col>
          </v-ons-row>
        </v-ons-card>
      </v-ons-col>
    </v-ons-row>
  </v-ons-page>
</template>

<script>
import bluetooth from './../js/bluetooth'

export default {
  name: "DeviceDetail",
  data() {
    return {
      msg: "Device Detail",      
    };
  },
  methods: {
    press(key) {
      console.log(key);      
    }
  },
  computed: {
    selectedDevice: function(){
      var result = this.$store.getters.selectedDevice;
      return result
    }
  },
  components:{

  }
};
</script>

<style>
.pin{
  text-align: center;
  width: 450px;
  height: 560px;
}
.pinButton{
  margin: auto;
  border-radius: 50%;
  width: 75px;
  height: 75px;
}
</style>
