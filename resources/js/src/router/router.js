import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/templateHome.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            props: true
        },
    ]
})

export default router
