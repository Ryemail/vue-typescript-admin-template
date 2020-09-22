import Vue from 'vue';
import DomNotify from './index.vue';

const NotifyConstructor = Vue.extend(DomNotify);

let seed = 1;

const Notify = (options: any) => {
    const id = 'dom-notice-' + seed++;

    const instance = new NotifyConstructor({
        data: options,
    });

    console.log(options, ';ddddd');

    instance.id = id;
    instance.$mount();
    document.body.appendChild(instance.$el);
    instance.visible = true;
    instance.dom = instance.$el;
    instance.dom.style.zIndex = seed + 1001; // 后插入的Notice组件z-index加一，保证能盖在之前的上面
    return instance;
};

export default Notify;
