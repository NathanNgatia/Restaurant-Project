import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ContactUs from '@/components/ContactUs.vue'
import About from '@/components/About.vue'
import Feedback from '@/components/Feedback.vue'
import Booking from '@/components/Booking.vue'
import Menu from '@/components/Menu.vue'
import Order from '@/components/Order.vue'
import Restaurantlist from '@/components/Restaurantlist.vue'



const routes = [
  {
    path:'/',
    component: HomePage
  },
  
  {
    path:'/About',
    component: About
  },

  {
    path:'/Menu',
    component: Menu
  },

  {
    path:'/Contact',
    component: ContactUs
  },

  {
    path:'/Order',
    component: Order
  },

  {
    path:'/RestaurantList',
    component: Restaurantlist
  },
  
  {
    path:'/Booking',
    component: Booking
  },

  {
    path:'/Feedback',
    component: Feedback
  },
  
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
