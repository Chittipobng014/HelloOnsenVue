<template>
  <v-ons-page id="app">
    <navigator></navigator>
  </v-ons-page>
</template>

<script>
import Navigator from './components/Navigator'
import AdminModule from './components/AdminModule'
import HomePage from './components/HomePage'

export default {
  name: 'app',
  components: {
    Navigator,
    AdminModule,
    HomePage
  },
}
</script>

