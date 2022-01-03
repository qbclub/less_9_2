import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import Register from '../components/register.vue'
import Login from '../components/login.vue'
import Feed from '../components/feed.vue'
import Upload from '../components/upload.vue'
Vue.use(VueRouter)

const routes = [
  { path: "/", component: Index },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/feed", component: Feed },
  { path: "/upload", component: Upload }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
