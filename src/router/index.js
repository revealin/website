import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ReportAdmin from '../components/ReportAdmin.vue'
import UserAdmin from "../components/UserAdmin";
import Statistiques from "../components/StatsAdmin";
import store from '@/store/index.js'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin/users',
    name: 'adminUser',
    component: UserAdmin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/statistiques',
    name: 'Statistiques',
    component: Statistiques,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin/reports',
    name: 'Reports',
    component: ReportAdmin,
    meta: {
      requiresAuth: true
    }
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})
export default router
