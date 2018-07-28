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
            if (this.password === this.re_password) {
                console.log('id:' + id + ', password: ' + this.password + ', re: ' + this.re_password + ', tel: ' + this.tel);
            var obj = {
                id : id,
                password : this.password,
                tel : this.tel
            }
           
            }else{
                console.log("Password doesn't match");                
            }
            
        },
        clear: function(){
            this.password = '';
            this.re_password = '';
            this.tel = '';
            console.log('Clear!');
            
        }
    }
}
</script>

<style>
.marginBottom5px{
    margin-bottom: 5px
}
</style>
