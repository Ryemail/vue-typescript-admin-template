<template>
    <section class="design">
        <!-- 组件库 -->
        <design-nav @toggle="toggle" />

        <!-- 手机容器 -->
        <div class="design-phone-wrap">
            <el-scrollbar ref="scorll">
                <!-- <dom-title /> -->
                <draggable class="list-group" animation="200" :list="components" @choose="onChoose" :move="onMove">
                    <!-- <transition-group type="transition" :name="'flip-list'"> -->

                    <component
                        v-for="(ele, index) in components"
                        :data="{ data: ele, $index: index }"
                        :key="ele.nav.name + '-' + index"
                        :is="ele.nav.name"
                        :class="['design-item', ele.active ? 'selected' : '']"
                        @del="delComponent(index)"
                        @mouseover.native="onChoose({ oldIndex: index, type: 'over' })"
                    />
                    <!-- </transition-group> -->
                </draggable>
            </el-scrollbar>
        </div>

        <!-- 组件库编辑 -->
        <div class="design-editor" v-if="editor">
            <div class="design-title">{{ editor.title }}</div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import draggable from 'vuedraggable';

import * as Designs from './components';
import { DesginComponent, DesignNavItem } from '@/types/design';

@Component({
    components: {
        ...Designs,
        draggable,
    },
})
export default class Design extends Vue {
    components: DesginComponent[] = [
        {
            active: false,
            nav: {
                name: 'DomTitle',
                icon: '',
                title: '页面设计',
            },
        },
    ]; // 组件列表

    isDragging = false;

    editor: DesignNavItem | null = null; // 组件库编辑

    // 点击添加组件库
    private toggle(data: DesignNavItem) {
        this.editor = data;
        this.components.push({
            active: false,
            nav: data,
        });
    }

    // 删除组件
    private delComponent(index: number) {
        this.editor = null;
        this.components.splice(index, 1);
    }

    // 元素点击
    private onChoose({ oldIndex, type }: { oldIndex: number; type: string }) {
        if (type == 'choose') {
            this.editor = this.components[oldIndex].nav;
        }

        this.components.forEach((item, index) => {
            item.active = index === oldIndex;
        });
    }

    private onMove(event: any) {
        console.log(event.draggedContext.element.nav.name);
        if (event.draggedContext.element.nav.name === 'DomTitle') return false;

        return true;
    }
}
</script>

<style lang="less" scoped>
@import url('./style');

.design {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .design-phone-wrap {
        width: 377px;
        border-radius: 3px;
        box-shadow: 0 3px 10px #dcdcdc;
        border: 1px solid #ddd;
        margin: 0 auto;

        /deep/ .el-scrollbar {
            height: 580px;
            .el-scrollbar__wrap {
                overflow-x: hidden;
            }
        }
    }

    .flip-list-move {
        transition: transform 0.5s;
    }

    .drag-wrap {
        margin-right: 10px;
    }

    .design-editor {
        width: 400px;
        height: auto;
        min-height: 100px;
        padding: 15px 10px;
        border: 1px solid #ddd;
        margin-left: 15px;
    }
    .checked {
        opacity: 1;
    }
}
</style>
