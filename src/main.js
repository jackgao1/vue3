import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import { get,post } from './axios/http'
Vue.prototype.$get = get;
Vue.prototype.$post = post; 
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
