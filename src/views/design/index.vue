<template>
    <section class="design">
        <!-- 组件库 -->
        <design-nav @toggle="toggle" />

        <!-- 手机容器 -->
        <div class="design-phone-wrap">
            <div class="design-phone-title">页面设计</div>
            <el-scrollbar ref="scorll">
                <!--   @start="isDragging = true"
                    @end="isDragging = false" -->
                <draggable class="list-group" :list="components" :options="dragOptions" :move="onMove" @start="onStart">
                    <transition-group type="transition" :name="'flip-list'">
                        <component
                            v-for="(ele, index) in components"
                            :data="{ data: ele, $index: index }"
                            :key="ele + '-' + index"
                            :is="ele"
                            @del="delComponent(index)"
                            class="design-item"
                        />
                    </transition-group>
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
import { DesignNavItem } from '@/types/design';

@Component({
    components: {
        ...Designs,
        draggable,
    },
})
export default class Design extends Vue {
    components: string[] = []; // 组件列表

    isDragging = false;

    editor: DesignNavItem | null = null; // 组件库编辑

    dragOptions = {
        ghostClass: 'selected',
    };

    // 点击添加组件库
    private toggle(data: DesignNavItem) {
        this.editor = data;
        this.components.push(data.name);
    }

    // 删除组件
    private delComponent(index: number) {
        this.components.splice(index, 1);
    }

    private onStart(event: Event) {
        console.log(event);
    }

    private onMove({ relatedContext, draggedContext }: any) {
        console.log(relatedContext, draggedContext);
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed;
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
        .design-phone-title {
            height: 66px;
            line-height: 88px;
            font-size: 14px;
            white-space: nowrap;
            text-align: center;
            background: url('~@/assets/image/phone-top-black.png') center center / contain no-repeat rgb(255, 255, 255);
        }
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
}
</style>
