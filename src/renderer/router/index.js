import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sample',
      component: require('@/pages/EBookSample').default
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: require('@/pages/Home').default
    // },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
