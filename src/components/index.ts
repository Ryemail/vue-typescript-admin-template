import Vue from 'vue';

const files = require.context('@/components', false, /\.vue$/);

files.keys().forEach(item => {
    const component = files(item).default;

    Vue.component(component.name, component);
});
