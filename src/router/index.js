import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '../views/InicioView.vue'
import AnimaisView from '../views/AnimaisView.vue'
import CuidadosView from '../views/CuidadosView.vue'

const router = createRouter({
    history: createWebHistory(),

    router: [
        {
            path: "/",
            name: "inicio",
            component: InicioView
        },
        {

        },
        {
            
        }
    ]
})