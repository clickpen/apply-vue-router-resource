import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Home from './components/Home.vue';
import Usermsg from './components/Usermsg';
import Translate from './components/Translate.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter({
  routes: [
    {path: "/", component: Home},
    {path: "/usermsg", component: Usermsg},
    {path: "/translate", component: Translate}
  ],
  mode: "history"
});

new Vue({
  router,
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
});
