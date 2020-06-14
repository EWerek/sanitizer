import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import LoadScript from 'vue-plugin-load-script';
import router from "./router";
import VueAnalytics from 'vue-analytics';


Vue.use(LoadScript);
Vue.use(VueAnalytics, {
  id: 'UA-169380404-1',
  router
});



Vue.config.productionTip = true

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
