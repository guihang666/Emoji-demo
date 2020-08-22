import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/textarea',
      name: 'textarea',
      component: () => import('./views/Textarea.vue')
    },
  ]
})