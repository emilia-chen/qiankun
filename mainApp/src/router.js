/* 路由分配文件 */
import Vue from 'vue'
import Router from 'vue-router'

// 使用路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/aaa',
      name: '/aaa',
      component: () => import('./views/main.vue'),
    },
    // 登录
    {
      path: '/login',
      name: '/bbb',
      component: () => import('./views/index.vue'),
    }
  ]
})