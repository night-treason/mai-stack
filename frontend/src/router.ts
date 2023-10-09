import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import DisplayProducts from './views/DisplayProducts.vue'
import DisplayOrders from './views/DisplayOrders.vue'
import DisplayCart from './views/DisplayCart.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/products' },
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
  {
    path: '/cart',
    name: 'DisplayCart',
    component: DisplayCart
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
