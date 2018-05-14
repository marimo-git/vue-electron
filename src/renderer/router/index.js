import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },

    // 以下を追加
    {
      path: '/next',
      name: 'next-page',
      component: require('@/components/Next').default
    },
    // 以上を追加

    {
      path: '*',
      redirect: '/'
    }
  ]
})
