import Vue from 'vue';
import App from './App.vue';
import plugins from './plugins';
import router from './router';
import store from './store';

// 加载全局样式文件
import '@/assets/css/index.less';
// 加载icon-font组件所需的样式文件
import '@/assets/icon/index.css';

Vue.use(plugins);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
