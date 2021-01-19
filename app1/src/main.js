import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./public-path";
import routes from "./router";

Vue.config.productionTip = false;

// 声明变量管理vue及路由实例
let router = null;
let instance = null;

// 导出子应用生命周期 挂载前
export async function bootstrap(props = {}) {
  console.log('从父应用继承的数据1',props);
  
  Array.isArray(props.fns) && props.fns.map(i => {
    Vue.prototype[i.name] = i[i.name]
  });
}

// 导出子应用生命周期 挂载前 挂载后
export async function mount() {
  
  router = new VueRouter({
    base: '/app1',//window.__POWERED_BY_QIANKUN__ ? "/app1" : "/",
   // mode: "history",
    routes: routes.options.routes
  });
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
  //console.log('mountmountmount');
  console.log('this',router)
  console.log('window.__POWERED_BY_QIANKUN__',window.__POWERED_BY_QIANKUN__ );
   console.log('localStorage.a',localStorage.a);

}

// 导出子应用生命周期 挂载前 卸载后
export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}

// 单独开发环境
window.__POWERED_BY_QIANKUN__ || mount();