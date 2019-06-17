import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('./views/Error.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
    },
    {
      path: '/user/:id',
      name: 'user-info',
      component: () => import('./views/UserInfo.vue'),
      props: true,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/LoginPage.vue'),
      props: true,
    },
    {
      path: '/404',
      name: 'not-found',
      component: () => import('./views/NotFound.vue'),
    },
    {
      path: '*',
      redirect: '/404',
    },
  ]
})
