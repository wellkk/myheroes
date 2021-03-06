// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/base.css'
import App from './App'
// 引入公共组件面包屑
import CusBread from '@/components/cusBread.vue'
import router from './router'
import moment from 'moment'
import HttpServer from './components/http.js'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(HttpServer)
/* eslint-disable no-new */
Vue.filter('fmtdate',(v) => {
  return moment(v).format('YYYY-MM-DD')
});
// 导入全局组件 - 面包屑  第一个参数是组件名
Vue.component(CusBread.name,CusBread);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
