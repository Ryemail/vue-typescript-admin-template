import Vue from 'vue';
import DomTable from './table.vue';

const components = [DomTable];

components.forEach(component => {
    Vue.component(component.name, component);
});
