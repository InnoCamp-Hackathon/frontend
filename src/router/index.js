import Vue from 'vue'
import VueRouter from 'vue-router'
import MainScreen from "../views/MainScreen";
import ResultsPage from "../views/ResultsPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'MainScreen',
        component: MainScreen
    },
    {
        path: '/result',
        name: 'Result',
        component: ResultsPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
