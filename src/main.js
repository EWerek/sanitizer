import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import LoadScript from 'vue-plugin-load-script';
import router from "./router";

Vue.use(LoadScript);



Vue.config.productionTip = true

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
