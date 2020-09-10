import './styles/index.less';
import '../theme/index.css';

import ElementUI from 'element-ui';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { NoticeBar, Icon, Search, Swipe, SwipeItem } from 'vant';

Vue.use(NoticeBar)
    .use(Icon)
    .use(Search)
    .use(Swipe)
    .use(SwipeItem);

import './permission';

import '@/components';

import '@/directive';

import '../mock';

Vue.config.productionTip = false;

// Vue.prototype._=

Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
