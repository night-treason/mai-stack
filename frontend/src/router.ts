import { createRouter, createWebHistory } from 'vue-router'
import DisplayProducts from './views/DisplayProducts.vue'
import DisplayOrders from './views/DisplayOrders.vue'

const routes = [
  {
    path: '/products',
    name: 'DisplayProducts',
    component: DisplayProducts
  },
  {
    path: '/orders',
    name: 'DisplayOrders',
    component: DisplayOrders
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
