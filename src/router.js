import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Login from '@/components/Login'
// import DataGrid from '@/components/DataGrid'
import Tutorial from '@/views/VueDemo.vue'
import ServerStatus from '@/views/ComponentDemo.vue'
import UserApp from '@/views/User.vue'
import Quote from '@/views/Quote.vue'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: Login
        // },
        // {
        //     path: '/approvedApplications',
        //     name: 'approvedApplications',
        //     component: DataGrid
        // },
        {
            path: '/userApps',
            name: 'userApps',
            component: UserApp
        },
        {
            path: '/serverStatus',
            name: 'serverStatus',
            component: ServerStatus
        },
        {
            path: '/tutorial',
            name: 'tutorial',
            component: Tutorial
        },
        {
            path: '/quote',
            name: 'quote',
            component: Quote
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})