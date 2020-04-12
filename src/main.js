import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'

import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://app.weiotchina.cn:9080/'
// 配置拦截器
axios.interceptors.request.use(config=>{
  config.headers.authorization = window.sessionStorage.getItem('token');
  // console.log(config);
  return config;
});

// axios.interceptors.request.use(config => {
//   config.headers.Authorization = window.sessionStorage.getItem('item');
  //必须returnconfig
  // console.log(config);
//   return config;
// })
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
