// vue构造函数
import Vue from "vue";
// App组件（以.vue结尾的文件都是组件）
import App from "./App.vue";
// 路由对象
// import Vue from "vue";
import Vant from "vant";
import router from "./router";
import axios from "axios";
Vue.use(Vant);
// 绑定到原型
Vue.prototype.$axios = axios;
//添加基路径
axios.defaults.baseURL = "http://hmtoutiao-api.atlansic.com";
// 上线环境是否提示信息(忽略)
Vue.config.productionTip = false;

// 创建一个根实例
// .$mount('#app') 相当于el配置，指定id为app的元素作为模板
new Vue({
  // 路由对象
  router,
  // 加载第一个子组件，最底层的组件，（写法是固定的）
  render: h => h(App)
}).$mount("#app");
