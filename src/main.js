import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from'./routes.js'


Vue.use(VueRouter);

const router=new VueRouter({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
    }
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

