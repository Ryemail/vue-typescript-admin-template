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
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-success="onAddSuccess"
                    :before-upload="onAddBeforeUpload"
                >
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
import { VideoProps } from '@/types/design';
import { storeDesign } from '@/store/modules/design';

import defaultImg from '@/assets/image/default.png';

@Component
export default class DomEditorVideo extends Vue {
    @Prop({ type: Object, default: () => ({}) }) data!: { data: VideoProps } & { $index: number };

    defaultImg = defaultImg;

    @Watch('data', { deep: true, immediate: true })
    onForm() {
        console.log(this.data);
        storeDesign.updateCompoent(this.data);
    }

    // 添加一个
    private onAddSuccess(response: Response, file: File) {
        console.log(response, file);
    }

    // 上传之前
    private onAddBeforeUpload(file: File) {
        console.log(URL.createObjectURL(file), 'file');
        this.data.data.poster =
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599742186346&di=744dbb274d9fe1c67ef3341bb6896f77&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408';
    }
}
</script>

<style lang="less" scoped>
@import url('./style');

.el-slider {
    width: 62%;
}
</style>
