/* 路由分配文件 */
import Vue from 'vue'
import Router from 'vue-router'

// 使用路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/second',
      name: 'second',
      component: () => import('./views/second.vue'),
    },
    {
      path: '/app2',
      name: 'app2',
      component: resolve => require(["@/views/main"], resolve)
    }
    
  ]
})