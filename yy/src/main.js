import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//配置axios拦截器效果
import axios from "./utils/request";
Vue.prototype.$axios = axios;//把axios挂载到原型上去

//配置elementUI的基本信息
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入ecahrts
import *as echarts from 'echarts'
Vue.prototype.$echarts=echarts

// 时间过滤器
Vue.filter("fdate",(val)=>{
  let date=new Date(val)
  return date.toLocaleString().replace(/\//g,"-").replace(/(上午|下午)/,"")
})

// 增加导航守卫
router.beforeEach((to,from,next)=>{
  console.log(to);
  // 如果不是登录页面，在判断token值
  if(to.path!="/admin/login"){
    // token值不存在的情况下
    if(!localStorage.getItem("token")){
      next("/admin/login");// 直接去登录页面
    }
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
