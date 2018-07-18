<template>
    <v-ons-page id="hello">
        <v-ons-toolbar>
            <div class="center">
                {{title}}
            </div>
            <div class="right">
                <scan-button></scan-button>
            </div>
        </v-ons-toolbar>
    </v-ons-page>
</template>

<script>
import ScanButton from './component/ScanButton'

export default {
    name: 'hello',
    methods:{

    },
    components:{
        ScanButton
    }
}
</script>

<style>
.alignC{
    text-align: center;
}
</style>
