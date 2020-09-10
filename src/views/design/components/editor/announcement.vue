<template>
    <section class="dom-editor-announcement font-12">
        <div class="design-editor-group flex flex-item-center clear">
            <label class="editor-label">上下边距</label>
            <div class="design-editor-content flex flex-item-center">
                <el-slider v-model="data.data.marginY" :max="50" height="4"></el-slider>
                <span class="padding-l-20">{{ data.data.marginY }}px (像素)</span>
            </div>
        </div>
        <div class="design-editor-group clear">
            <label class="editor-label">背景颜色</label>
            <el-color-picker class="design-editor-content" v-model="data.data.background"></el-color-picker>
        </div>
        <div class="design-editor-group clear">
            <label class="editor-label">文字颜色</label>
            <el-color-picker class="design-editor-content" v-model="data.data.color"></el-color-picker>
        </div>
        <div class="design-editor-group clear">
            <label class="editor-label">公告图标</label>
            <div class="design-editor-content">
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-success="onAddSuccess"
                    :before-upload="onAddBeforeUpload"
                >
                    <img class="editor-img" :src="data.data.icon ? data.data.icon : defaultImg" alt="" />
                    <span class="color-999">建议尺寸：32×32</span>
                </el-upload>
            </div>
        </div>
        <div class="design-editor-group clear">
            <label class="editor-label">公告内容</label>
            <el-input
                type="text"
                class="c-input design-editor-content"
                placeholder="请输入公告内容"
                v-model="data.data.text"
            />
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import { storeDesign } from '@/store/modules/design';

import defaultImg from '@/assets/image/default.png';
import { AnnouncementProps } from '@/types/design';

@Component
export default class DomEditorAnnouncement extends Vue {
    @Prop({ type: Object, default: () => ({}) }) data!: { data: AnnouncementProps } & { $index: number };

    defaultImg = defaultImg;

    @Watch('data', { deep: true, immediate: true })
    onForm(value: object) {
        storeDesign.updateCompoent({ ...this.data });
    }

    // 添加一个
    private onAddSuccess(response: Response, file: File) {
        // console.log(response, file);
    }

    // 上传之前
    private onAddBeforeUpload(file: File) {
        this.data.data.icon = URL.createObjectURL(file);
    }
}
</script>

<style lang="less" scoped>
@import url('./style');
.dom-editor-announcement {
    .editor-img {
        width: 32px;
        height: 32px;
    }
}
.el-slider {
    width: 62%;
}
</style>
