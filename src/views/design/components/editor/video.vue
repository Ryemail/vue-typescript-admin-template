<template>
    <section class="dom-editor-video font-12">
        <div class="design-editor-group flex flex-item-center clear">
            <label class="editor-label">上下边距</label>
            <div class="design-editor-content flex flex-item-center">
                <el-slider v-model="data.data.marginY" :max="50" height="4"></el-slider>
                <span class="padding-l-20">{{ data.data.marginY }}px (像素)</span>
            </div>
        </div>
        <div class="design-editor-group flex flex-item-center clear">
            <label class="editor-label">视频高度</label>
            <div class="design-editor-content flex flex-item-center ">
                <el-slider v-model="data.data.height" :max="200"></el-slider>
                <span class="padding-l-20">{{ data.data.height }}px (像素)</span>
            </div>
        </div>
        <div class="design-editor-group clear">
            <label class="editor-label">视频封面</label>
            <div class="design-editor-content">
                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
                    <img class="editor-img" :src="data.data.poster ? data.data.poster : defaultImg" />
                </el-upload>
            </div>
        </div>
        <div class="design-editor-group clear">
            <label class="editor-label">视频链接</label>
            <el-input type="text" class="c-input design-editor-content" v-model="data.data.url" />
        </div>

        <div class="design-editor-group clear">
            <label class="editor-label">自动播放</label>
            <div class="design-editor-content">
                <el-radio-group v-model="data.data.auto">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="0">否</el-radio>
                </el-radio-group>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import { storeDesign } from '@/store/modules/design';

import defaultImg from '@/assets/image/default.png';

interface VideoProps {
    $index: number;
    data: {
        url: string;
        poster: string;
        height: number;
        marginY: number;
        auto: number;
    };
}

@Component
export default class DomEditorVideo extends Vue {
    @Prop({
        type: Object,
        default: () => ({}),
    })
    data!: VideoProps;

    defaultImg = defaultImg;

    @Watch('data', { deep: true, immediate: true })
    onForm(value: object) {
        storeDesign.updateCompoent(this.data);
    }
}
</script>

<style lang="less" scoped>
@import url('./style');

.el-slider {
    width: 62%;
}
</style>
