import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Frank from "./components/Frank.vue";
import Test from './components/Test.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Frank},
        {path:'/xxx',component:Test}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
