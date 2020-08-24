import Vue from 'vue';
import DomTable from './table.vue';
import DomIcon from './icon.vue';
import DomForm from './form.vue';
import DomDialog from './dialog.vue';

const components = [DomTable, DomIcon, DomForm, DomDialog];

components.forEach(component => {
    Vue.component(component.name, component);
});
