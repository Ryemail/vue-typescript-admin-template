import Vue from 'vue';
import RyTable from './table.vue';

const components = [RyTable];

components.forEach(component => {
    Vue.component(component.name, component);
});
