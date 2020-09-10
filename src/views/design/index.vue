<template>
    <section class="design">
        <!-- 组件库 -->
        <design-nav @toggle="toggle" />

        <!-- 手机容器 -->
        <div class="design-phone-wrap">
            <!-- <dom-title /> -->
            <el-scrollbar ref="scorll">
                <draggable
                    class="list-group clear"
                    animation="200"
                    :list="components"
                    @choose="onChoose"
                    :move="onMove"
                >
                    <!-- <transition-group type="transition" :name="'flip-list'"> -->
                    <component
                        v-for="(ele, index) in components"
                        :data="{ data: ele, $index: index }"
                        :key="ele.name + '-' + index"
                        :is="ele.name"
                        :class="['design-item', activeIndex === index ? 'selected' : '']"
                        @del="delComponent(index)"
                        @mouseover.native="onChoose({ oldIndex: index, type: 'over' })"
                        @mouseleave.native="onChoose({ oldIndex: index, type: 'leave' })"
                    />
                    <!-- </transition-group> -->
                </draggable>
            </el-scrollbar>
        </div>

        <!-- 组件库编辑 -->
        <div :class="['design-editor', !components.length ? 'no-border' : '']" v-if="components.length">
            <template v-for="(ele, index) in components">
                <div v-if="index === activeIndex" :key="index">
                    <div class="design-title">{{ ele.title }}</div>
                    <div class="design-editor-component">
                        <component :data="{ data: ele.params, $index: index }" :is="ele.editor" />
                    </div>
                </div>
            </template>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import draggable, { DraggedContext } from 'vuedraggable';

import * as Designs from './components';
import { DesginModule, DesignNavItem } from '@/types/design';
import { storeDesign } from '@/store/modules/design';

const files = require.context('./components/editor', false, /\.vue$/);
const editors: { [key: string]: Vue } = {};

files.keys().forEach(item => {
    const component = files(item).default;
    editors[component.name] = component;
});

console.log(editors);

@Component({
    components: {
        ...Designs,
        ...editors,
        draggable,
    },
})
export default class Design extends Vue {
    components = storeDesign.components; //组件列表

    isDragging = false;

    activeIndex = 0; // 选中组件的索引

    // 点击添加组件库
    private toggle(data: DesignNavItem) {
        this.components.push({ active: false, ...data });
    }

    // 删除组件
    private delComponent(index: number) {
        this.components.splice(index, 1);
    }

    // 元素点击
    private onChoose({ oldIndex, type }: { oldIndex: number; type: string }) {
        if (type == 'choose') {
            this.activeIndex = oldIndex;
        }

        this.components.forEach((item, index) => {
            item.active = index === oldIndex;
        });

        // if (type === 'over') {
        //     this.components[oldIndex].active = true;
        // }
        // if (type === 'leave') {
        //     this.components[oldIndex].active = false;
        // }
    }

    private onMove({ draggedContext }: { draggedContext: DraggedContext<DesginModule> }) {
        if (draggedContext.element.name === 'DomTitle') return false;

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
        min-width: 377px;
        border-radius: 3px;
        box-shadow: 0 3px 10px #dcdcdc;
        border: 1px solid #ddd;
        margin: 0 auto;

        /deep/ .el-scrollbar {
            height: 646px;
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
        min-width: 400px;
        height: auto;
        min-height: 100px;
        padding: 15px 10px;
        border: 1px solid #ddd;
        margin-left: 15px;
        box-sizing: border-box;
        &.no-border {
            border: 0;
        }
    }
    .checked {
        opacity: 1;
    }
}
</style>
