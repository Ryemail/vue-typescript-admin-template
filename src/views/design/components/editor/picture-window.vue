<template>
    <section class="dom-editor-picture font-12">
        <div class="design-editor-group flex flex-item-center clear">
            <label class="editor-label">上下边距</label>
            <div class="design-editor-content flex flex-item-center">
                <el-slider v-model="data.data.marginY" :max="50" height="4"></el-slider>
                <span class="padding-l-20">{{ data.data.marginY }}px (像素)</span>
            </div>
        </div>
        <div class="design-editor-group flex flex-item-center clear">
            <label class="editor-label">左右边距</label>
            <div class="design-editor-content flex flex-item-center ">
                <el-slider v-model="data.data.marginX" :max="50"></el-slider>
                <span class="padding-l-20">{{ data.data.marginX }}px (像素)</span>
            </div>
        </div>
        <div class="design-editor-group clear">
            <label class="editor-label">背景颜色</label>
            <el-color-picker class="design-editor-content" v-model="data.data.background"></el-color-picker>
        </div>
        <div class="design-editor-group radio-group clear">
            <label class="editor-label">布局方式</label>
            <div class="design-editor-content">
                <el-radio-group v-model="data.data.layout">
                    <el-radio label="column-2">堆积两列</el-radio>
                    <el-radio label="column-3">堆积三列</el-radio>
                    <el-radio label="column-4">堆积四列</el-radio>
                    <el-radio label="showcase">橱窗样式</el-radio>
                </el-radio-group>
                <div class="color-999" style="line-height:initial">
                    请确保所有图片的尺寸/比例相同
                </div>
            </div>
        </div>
        <ul class="img-list">
            <li class="img-list-item clear" v-for="(item, key) in data.data.list" :key="key">
                <div class="design-editor-group clear">
                    <label class="editor-label">图片</label>
                    <div class="design-editor-content">
                        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
                            <img class="editor-img" :src="item.img" alt="" />
                        </el-upload>
                    </div>
                </div>

                <div class="design-editor-group clear">
                    <label class="editor-label">链接地址</label>
                    <el-input type="text" class="c-input design-editor-content" v-model="item.url" />
                </div>

                <i class="iconfont icon-clear" @click="delImg(key)"></i>
            </li>
        </ul>

        <button class="design-add-btn">添加一个</button>
    </section>
</template>

<script lang="ts">
import { storeDesign } from '@/store/modules/design';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

interface PrctWindowProps {
    $index: number;
    data: {
        list: { url: string; img: string }[];
        marginX: number;
        marginY: number;
        layout: 'column-2' | 'column-3' | 'column-3' | 'showcase'; // 布局方式
        background: string; // 指示点颜色
    };
}

@Component
export default class DomEditorPictureWindow extends Vue {
    @Prop({
        type: Object,
        default: () => ({}),
    })
    data!: PrctWindowProps;

    @Watch('data', { deep: true, immediate: true })
    onForm(value: object) {
        storeDesign.updateCompoent(this.data);
    }

    private delImg(index: number) {
        this.data.data.list.splice(index, 1);
    }
}
</script>

<style lang="less" scoped>
@import url('./style');
.dom-editor-picture {
    .radio-group {
        .editor-label {
            line-height: initial;
        }
        .el-radio {
            margin-bottom: 10px;
        }
    }
}
.el-slider {
    width: 62%;
}
</style>
