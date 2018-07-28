<template>
    <v-ons-card>
        <v-ons-row>
            <v-ons-col style="text-align: center">
                <div class="title" style="font: 24px solid black">
                    {{name}}
                </div>
            </v-ons-col>
        </v-ons-row>
        <v-ons-row class="marginBottom5px">
            <div>
                Password : <v-ons-input type="password" placeholder="Input the password" v-model="password"></v-ons-input>
            </div>            
        </v-ons-row>
        <v-ons-row class="marginBottom5px">
            <div>
                Re-Password : <v-ons-input type="password" placeholder="Re-Password" v-model="re_password"></v-ons-input>
            </div>            
        </v-ons-row>
        <v-ons-row class="marginBottom5px">
            <div>
                Telephone No. : <v-ons-input placeholder="Telephone Number" v-model="tel"></v-ons-input>
            </div>
        </v-ons-row>
        <v-ons-row style="text-align: center">
            <v-ons-col></v-ons-col>
            <v-ons-col>
                <v-ons-button @click="register(id)">Register</v-ons-button>
            </v-ons-col>
            <v-ons-col>
                <v-ons-button @click="clear()">Cancel</v-ons-button>
            </v-ons-col>
            <v-ons-col></v-ons-col>
        </v-ons-row>
    </v-ons-card>
</template>


<script>
export default {
    name: 'device-manager',
    props: ['name', 'id'],
    data(){
        return {
            password: '',
            re_password: '',
            tel: '',
        }
    },
    methods:{
        register: function(id) {
            //password validate                        
            if (this.password === this.re_password) {
                var arr = JSON.stringify(this.deviceList);
                if (arr == '[]') {// if first register
                    this.$store.commit("deviceList", {device_id : id,   password : this.password,   tel : this.tel});
                    console.log('First Init');                    
                }else{
                    var exist;
                    for (let i = 0; i < this.deviceList.length; i++) {
                        if (this.deviceList[i].device_id == id) {
                            exist = true;
                            break;
                        } else{
                            exist = false;
                        }                        
                    }
                    if (exist == false) {
                        this.$store.commit("deviceList", {device_id : id,   password : this.password,   tel : this.tel});
                    }else{
                        console.log('exist');                        
                    }
                } 
            }else{
                console.log("Password doesn't match");                
            }
            this.saveToStorage(this.deviceList);
            console.log(window.localStorage.getItem('devices'));                           
        },
        clear: function(){
            this.password = '';
            this.re_password = '';
            this.tel = '';
            console.log('Clear!');
            
        },
        saveToStorage: function(devices){
            var storage = window.localStorage;
            var get = JSON.parse(storage.getItem('device'));

            if (get) {
                for (let i = 0; i < get.length; i++) {
                    if(get.device_id[i] == devices[i].device_id){
                        console.log('exist');                      
                    } else{
                        var value = JSON.stringify(devices[i]);                    
                        storage.setItem('devices', value);
                    }                
                }
            } else{
                var value = JSON.stringify(devices);                    
                storage.setItem('devices', value); 
            }      
        }
    },
    computed:{
        deviceList: function() {
            var result = this.$store.getters.deviceList;
            return result;
        }
    }    
}
</script>

<style>
.marginBottom5px{
    margin-bottom: 5px
}
</style>
