<template>
  <v-ons-page id="app">
    <admin-module></admin-module>
  </v-ons-page>
</template>

<script>
import ScanPage from './components/ScanPage'
import AdminModule from './components/AdminModule'

export default {
  name: 'app',
  components: {
    ScanPage,
    AdminModule
  },
}
</script>

