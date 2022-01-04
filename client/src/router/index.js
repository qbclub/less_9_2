import Vue from 'vue'
import VueRouter from 'vue-router'

import Feed from '../components/feed.vue'
import Upload from '../components/upload.vue'
Vue.use(VueRouter)

const routes = [

  { path: "/feed", component: Feed },
  { path: "/", component: Upload }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
