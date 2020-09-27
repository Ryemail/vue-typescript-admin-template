<template>
    <section class="dom-cascader-wrap flex" :style="wrapStyle">
        <el-scrollbar class="dom-cascader-menu" v-for="(meun, key) in meuns" :key="key" style="height:100%">
            <ul class="dom-cascader-menu-list">
                <li class="dom-cascader-item" v-for="(node, index) in meun" :key="index">
                    <el-checkbox v-model="node.checked" @click.native="multipleClick(key, node.checked)"></el-checkbox>
                    <span :class="['dom-cascader-label', node.checked && 'primary-color']" @click="onClick(node, key)">
                        {{ node.label }}
                    </span>
                    <i v-if="node.children" :class="['el-icon-arrow-right', node.checked && 'primary-color']"></i>
                </li>
            </ul>
        </el-scrollbar>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { CascaderOption } from '@/types/components/cascader-panel';
import { clone } from 'mathjs';

@Component
export default class DomCascaderPanel extends Vue {
    @Prop({ type: Array, default: () => [] }) options!: CascaderOption[];

    @Prop({ type: Object, default: () => ({ height: '200px' }) }) wrapStyle!: object;

    meuns: CascaderOption[][] = [];

    @Watch('options', { immediate: true, deep: true })
    onNodes(value: CascaderOption[]) {
        this.meuns = [clone(value)];
    }

    private onClick(node: CascaderOption, index: number) {
        if (node.children) {
            this.meuns.splice(index + 1, this.meuns.length, node.children);
        } else {
            this.meuns.splice(index + 1, this.meuns.length);
        }
    }

    private multipleClick(key: number, checked: boolean) {
        //
        const index = key + 1;

        if (this.meuns[index]) {
            const items: (CascaderOption & { checked?: boolean })[] = this.meuns[index];

            items.forEach(item => (item.checked = !checked));
        }
    }
}
</script>

<style lang="less" scoped>
.dom-cascader-wrap {
    width: 100%;
    border: solid 1px #e4e7ed;
    border-radius: 4px;
    font-size: 14px;
    .dom-cascader-menu {
        height: 100%;
        min-width: 180px;
        box-sizing: border-box;
        .dom-cascader-menu-list {
            padding: 6px 0;
            line-height: 34px;
        }
        .dom-cascader-item {
            position: relative;
            display: flex;
            align-items: center;
            padding: 0 10px 0 20px;
            box-sizing: border-box;
            cursor: pointer;
            // .el-icon-arrow-right {
            //     position: absolute;
            //     right: 10px;
            // }
        }
        .dom-cascader-label {
            flex: 1;
            padding: 0 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        &:not(:last-child) {
            border-right: solid 1px #e4e7ed;
        }
    }
    /deep/ .el-scrollbar {
        .el-scrollbar__wrap {
            overflow-x: hidden;
        }
        .el-scrollbar__bar.is-horizontal {
            display: none;
        }
    }
}
</style>
