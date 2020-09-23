<template>
    <div class="dom-cascader-panel flex">
        <dom-cascader-menu
            ref="menu"
            tag="ul"
            v-for="(menu, index) in menus"
            :index="index"
            :key="index"
            :nodes="menu"
        />
    </div>
</template>

<script lang="ts">
import { date } from '@/utils';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import DomCascaderMenu from './cascader-menu.vue';

@Component({
    components: {
        DomCascaderMenu,
    },
})
export default class DomCascaderPanel extends Vue {
    @Prop({ type: Array, default: () => [] }) options!: object[];

    menus: object[] = [];

    @Watch('options', { deep: true, immediate: true })
    initStore() {
        this.init();
    }
    init() {
        const { options } = this;
        this.menus = options;
    }
}
</script>

<style lang="less" scoped></style>
