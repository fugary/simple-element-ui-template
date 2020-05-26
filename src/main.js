import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ElementUI的js和css
import ElementUI from 'element-ui'
// 样式配置
import './assets/css/main.scss'
// 配置ElementUI
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
