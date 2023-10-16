import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
