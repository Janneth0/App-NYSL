import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('../views/Location.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import('../views/Rules.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/info-team',
    name: 'Info-Team',
    // component: () => import('../components/InfoTime.vue')
    
    component: () => import('../views/Info-Team.vue')
    // component: () => import('../components/InfoTeam.vue')

  },
  {
    path: '/info-time',
    name: 'Info-Time',
    // component: () => import('../components/InfoTime.vue')
    component: () => import('../views/Info-Time.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/user',
    name: 'Users',
    component: () => import('../views/User.vue')
  },
  {
    path: '/userinfo',
    name: 'UserInfo',
    component: () => import('../components/UserInfo.vue')
  },
  {
    path: '/chatroom/:id',
    name: 'Chatroom',
    component: () => import('../components/Chat.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
