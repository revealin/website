import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ReportAdmin from '../components/ReportAdmin.vue'
import UserAdmin from "../components/UserAdmin"
import Statistiques from "../components/StatsAdmin"
import BannedUsers from "../components/BannedUser"
import NotFound from  "../components/NotFound"
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
    },
  },
  {
    path: '/admin/Bannissements',
    name: 'Banned',
    component: BannedUsers,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
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
});
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/404');
  } else {
    next();
  }
});

export default router
