import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import echarts from "echarts";

Vue.prototype.$echarts = echarts;

// 引入 DataV
import dataV from '@jiaminghi/data-view';

import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles

import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import 'boxicons/css/boxicons.min.css'

// 全局注入
Vue.use(dataV);
Vue.use(Vuesax);

new Vue({
  render: h => h(App),
}).$mount('#app')


import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        i18n: vuexI18n.store
    }
});

