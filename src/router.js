import Vue from 'vue'
import Router from 'vue-router'
import AdminModule from '@/components/AdminModule'
import ScanPage from '@/components/ScanPage'

Vue.use(Router)

export default new Router({
    routers: [
        {
            path: '/admin',
            name: 'Admin',
            component: AdminModule
        },
        {
            path: '/user',
            name: 'User',
            component: ScanPage
        }
    ]

})