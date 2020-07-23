import Vue from 'vue'
import App from './App'
import 'iview/dist/styles/iview.css'
import router from './router'
import util from './util/'
import storage from './util/storage'

Vue.config.productionTip = false;

Vue.prototype.$storage = storage;
Vue.use(util);
import countTo from 'vue-count-to';
Vue.component('count-to',countTo);

// 登录逻辑处理
router.beforeEach(({meta, path}, from, next) => {
    //true用户已登录， false用户未登录
    let isLogin = sessionStorage.getItem('isLoginde');
    isLogin = true;
    if (!isLogin && path !== '/login') {
        //登记需要访问的URL
        sessionStorage.setItem('lastPage',path);
        return next({ path: '/login' })
    }
    if (isLogin && path == '/login') {
        return next({ path: '/' })
    }
    next()
});
// 登录逻辑处理

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
