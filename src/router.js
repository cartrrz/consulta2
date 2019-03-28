import Vue from 'vue'
import Router from 'vue-router'
import consulta from './views/consulta.vue'
import mostrarmilitante from './views/mostrarmilitante.vue'
import crearmilitante from './views/crearmilitante.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'consulta',
      component: consulta
    },
    {
      path: '/militante/:id',
      name: 'mostrarmilitante',
      component: mostrarmilitante,
      props: true
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: crearmilitante
    }
  ]
})
