import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import echarts from "echarts";

Vue.prototype.$echarts = echarts;

// 引入 DataV
import dataV from '@jiaminghi/data-view';
// 全局注入
Vue.use(dataV);

new Vue({
  render: h => h(App),
}).$mount('#app')
