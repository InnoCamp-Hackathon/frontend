import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/scss/main.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import VueGeolocation from "vue-browser-geolocation/src";

Vue.config.productionTip = false
Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDoAxMYoIKqueiV6-M6cRTqA7RuwxkmrPs'
    },
    installComponents: true
})
new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
