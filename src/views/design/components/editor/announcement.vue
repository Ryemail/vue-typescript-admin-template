<template>
    <section class="dom-editor-announcement font-12">
        <div class="design-editor-group flex flex-item-center clear">
            <label class="editor-label">公告栏高度</label>
            <div class="design-editor-content flex flex-item-center">
                <el-slider v-model="data.data.height" :max="100" :min="36" height="4"></el-slider>
                <span class="padding-l-20">{{ data.data.height }}px (像素)</span>
            </div>
        </div>
        <div class="design-editor-group flex flex-item-center clear">
            <label class="editor-label">通知栏模式</label>
            <div class="design-editor-content">
                <el-radio-group v-model="data.data.mode">
                    <el-radio label="link">link</el-radio>
                    <el-radio label="closeable">closeable</el-radio>
                    <el-radio label="none">none</el-radio>
                </el-radio-group>
            </div>
        </div>
        <div class="design-editor-group flex flex-item-center clear">
            <label class="editor-label">行数</label>
            <div class="design-editor-content">
                <el-radio-group v-model="data.data.wrapable">
                    <el-radio :label="0">一行</el-radio>
                    <el-radio :label="1">多行</el-radio>
                </el-radio-group>
            </div>
        </div>
        <div class="design-editor-group flex flex-item-center clear">
            <label class="editor-label">是否滚动</label>
            <div class="design-editor-content">
                <el-radio-group v-model="data.data.scrollable">
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="0">否</el-radio>
                </el-radio-group>
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
                    <van-icon
                        class="editor-img"
                        size="32"
                        :color="data.data.color"
                        :name="data.data.icon ? data.data.icon : 'volume-o'"
                    />
                    <div class="color-999">建议尺寸：32×32</div>
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
    onForm() {
        storeDesign.updateCompoent({ ...this.data });
    }

    // 添加一个
    private onAddSuccess(response: Response, file: File) {
        console.log(response, file);
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
    /deep/ .el-upload.el-upload--text {
        text-align: left;
    }
}
.el-slider {
    width: 62%;
}
</style>
