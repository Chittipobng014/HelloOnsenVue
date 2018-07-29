import Vue from 'vue'
import Router from 'vue-router'
import AdminModule from './components/AdminModule'
import Navigator from './components/Navigator'

Vue.use(Router)

export default new Router({
    routers: [
        {
            path: '/',
            name: 'Admin',
            component: AdminModule
        },
        {
            path: '/user',
            name: 'User',
            component: Navigator
        }
    ]

})