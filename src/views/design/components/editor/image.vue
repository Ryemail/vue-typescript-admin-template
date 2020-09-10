<template>
    <section class="dom-editor-img font-12">
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

interface ImageProps {
    $index: number;
    data: {
        list: { url: string; img: string }[];
        marginX: number;
        marginY: number;
        background: string; // 指示点颜色
    };
}

@Component
export default class DomEditorImage extends Vue {
    @Prop({ type: Object, default: () => ({}) }) data!: ImageProps;

    @Watch('data', { deep: true, immediate: true })
    onForm(value: object) {
        console.log(value, 'image');
        storeDesign.updateCompoent(this.data);
    }

    private delImg(index: number) {
        this.data.data.list.splice(index, 1);
    }
}
</script>

<style lang="less" scoped>
@import url('./style');
.el-slider {
    width: 62%;
}
</style>
