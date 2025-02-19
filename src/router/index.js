import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ContactUs from '@/components/ContactUs.vue'
import AboutUs from '@/components/AboutUs.vue'
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
    path:'/AboutUs',
    component: AboutUs
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
