import Vue from 'vue'
import App from './App.vue'

//components
import login from './component/login.vue'
import Dashboard from './component/dashboard.vue'

//imports
import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'

Vue.use(VueResouce);
Vue.use(VueRouter);

Vue.http.options.credentials = true;
const router = new VueRouter({
  routes:[
    {
      name: 'LogIn',
      path: '/',
      component: login
    },
    {
      name: 'Dashboard',
      path: '/home',
      component: Dashboard
    },
    // {
    //   name: 'PerfilRestaurante',
    //   path: '/restaurante',
    //   component: perfilRestaurante
    // }
  ]
});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
