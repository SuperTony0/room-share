import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login.vue'
import dashboard from '../views/dashboard.vue'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: login
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: dashboard
        }
    ]
})