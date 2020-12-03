import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    redirect: {
      path: '/'
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import ( /* webpackChunkName: "Order" */ "../views/Order" )
  },
  {
    path: '/booking',
    name: 'booking',
    component: () => import ( /* webpackChunkName: "Booking" */ "../views/Booking" )
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import ( /* webpackChunkName: "Blogs" */ "../views/Blogs" )
  },
  {
    path: '/about',
    name: 'about',
    component: () => import ( /* webpackChunkName: "About" */ "../views/About" )
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import ( /* webpackChunkName: "Contact" */ "../views/Contact" )
  },
  {
    path: '/termsandconditions',
    name: 'termsandconditions',
    component: () => import ( /* webpackChunkName: "Terms" */ "../views/TermsAndConditions" )
  },
  {
    path: '/privacypolicy',
    name: 'privacypolicy',
    component: () => import ( /* webpackChunkName: "privacypolicy" */ "../views/PrivacyPolicy" )
  },
  {
    path: '/cakes',
    name: 'cakes',
    component: () => import ( /* webpackChunkName: "Cakes" */ "../views/Order/Cakes" )
  },
  {
    path: '/bouqets',
    name: 'bouqets',
    component: () => import ( /* webpackChunkName: "Bouqets" */ "../views/Order/Bouqets" )
  },
  {
    path: '/lightings',
    name: 'lightings',
    component: () => import ( /* webpackChunkName: "Lightings" */ "../views/Order/Lightings" )
  },
  {
    path: '/handmadegifts',
    name: 'handmadegifts',
    component: () => import ( /* webpackChunkName: "Lightings" */ "../views/Order/HandMadeGifts" )
  },
  {
    path: '/partyplaces',
    name: 'partyplaces',
    component: () => import ( /* webpackChunkName: "partyplaces" */ "../views/Booking/PartyPlaces" )
  },
  {
    path: '/partyplans',
    name: 'partyplans',
    component: () => import ( /* webpackChunkName: "partyplans" */ "../views/Booking/PartyPlans" )
  },
  {
    path: '/speakerspage',
    name: 'speakerspage',
    component: () => import ( /* webpackChunkName: "SpeakersPage" */ "../views/Booking/SpeakersPage" )
  },
  {
    path: '/login',
    name: 'login',
    component: () => import ( /* webpackChunkName: "login" */ "../views/User/Login" )
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import ( /* webpackChunkName: "signup" */ "../views/User/Signup" )
  },
  {
    path: '/myorders',
    name: 'myorders',
    component: () => import ( /* webpackChunkName: "myorders" */ "../views/User/MyOrders" )
  },
  {
    path: '/mybookings',
    name: 'mybookings',
    component: () => import ( /* webpackChunkName: "mybookings" */ "../views/User/MyBookings" )
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
