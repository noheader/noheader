import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css'
const app=createApp(App);
// 配置路由
import router from "./router/index";
import store from './store/index';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus).use(Vant);
// 全局配置axios
import axios from "axios";
app.config.globalProperties.$axios=axios;
app.use(store).use(router).mount('#app');
