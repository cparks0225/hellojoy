import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () =>
        import(/* webpackChunkName: 'login' */ './views/Login.vue')
    },
    {
      path: '/questions/:id',
      name: 'Questions',
      component: () =>
        import(/* webpackChunkName: 'questions' */ './views/Questions.vue')
    },
    {
      path: '/summary',
      name: 'Summary',
      component: () =>
        import(/* webpackChunkName: 'summary' */ './views/Summary.vue')
    }
  ]
})
