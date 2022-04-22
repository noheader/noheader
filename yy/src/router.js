import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: "/admin/login"
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/admin/login',
      name: 'login',
      component: () => import('./views/admin/login.vue')
    },
    {
      path: '/admin/home',
      name: 'admin_home',
      component: () => import('./views/admin/home.vue'),
      children:[
        {
          path: '/admin/roles',
          name: 'admin_roles',
          component: () => import('./views/admin/roles.vue'),
        }
      ]
    }
  ]
})
