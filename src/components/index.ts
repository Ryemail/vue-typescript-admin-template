import Vue from 'vue';
import DomTable from './table.vue';
import DomIcon from './icon.vue';

const components = [DomTable, DomIcon];

components.forEach(component => {
    Vue.component(component.name, component);
});
