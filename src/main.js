import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
// Vue.prototype.$http = axios; // 将axios引入原型
// axios.defaults.baseURL = 'http://127.0.0.1:3333';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

