<template>
    <div class="dom-cascader-panel flex">
        <dom-cascader-menu :option="menus" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import DomCascaderMenu from './cascader-menu.vue';
import { CascaderOption } from '@/types/components/cascader-panel';
import Store from './store';

@Component({
    components: {
        DomCascaderMenu,
    },
})
export default class DomCascaderPanel extends Vue {
    @Prop({ type: Array, default: () => [] }) options!: CascaderOption[];

    menus: CascaderOption[] = [];

    @Watch('options', { deep: true, immediate: true })
    initStore() {
        this.init();
    }
    init() {
        const { options } = this;

        const store = new Store(options);

        this.menus = store.getNodes();
    }
}
</script>

<style lang="less" scoped></style>
