import Vue from 'vue';

import DomDialog from './dialog.vue';
import DomForm from './form.vue';
import DomIcon from './icon.vue';
import DomTable from './table.vue';
import DomInputp from './inputp.vue';
import DomInput from './input.vue';
import DomCascaderPanel from './cascader-panel/cascader-panel.vue';

const components = [DomDialog, DomForm, DomIcon, DomTable, DomInputp, DomInput, DomCascaderPanel];

components.forEach(component => {
    Vue.component(component.name, component);
});

// const files = require.context('@/components', false, /\.vue$/);

// files.keys().forEach(item => {
//     const component = files(item).default;

//     Vue.component(component.name, component);
// });
