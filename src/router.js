import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Login from '@/components/Login'
// import DataGrid from '@/components/DataGrid'
import Tutorial from '@/views/VueDemo.vue'
import ServerStatus from '@/views/ComponentDemo.vue'
import UserApp from '@/views/User.vue'
import Quote from '@/views/Quote.vue'
import Forms from '@/views/Forms.vue'
import Directives from '@/views/Directives.vue'
import Mixins from '@/views/Mixins.vue'
import Routers from '@/views/Routers.vue'
import routerApp from './components/RouterApp/User'


Vue.use(Router)

export default new Router({
    mode: "history",
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
            path: '/inputForms',
            name: 'inputForms',
            component: Forms
        },
        {
            path: '/directives',
            name: 'directives',
            component: Directives
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
            path: '/mixins',
            name: 'mixins',
            component: Mixins
        },
        {
            path: '/routers',
            name: 'routersApp',
            component: Routers
        },
        {
            path: '/routers/:id',
            name: 'routers',
            component: routerApp
        },
        {
            path: '/',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})