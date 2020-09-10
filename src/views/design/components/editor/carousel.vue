<template>
    <section class="dom-editor-carousel font-12">
        <div class="design-editor-group clear flex flex-item-center">
            <label class="editor-label">指示点形状</label>
            <el-radio-group class="design-editor-content" v-model="data.data.shape">
                <el-radio label="round">圆形</el-radio>
                <el-radio label="rect">长方形</el-radio>
            </el-radio-group>
        </div>
        <div class="design-editor-group clear">
            <label class="editor-label ">指示点颜色</label>
            <el-color-picker class="design-editor-content" v-model="data.data.color"></el-color-picker>
        </div>
        <div class="design-editor-group clear">
            <label class="editor-label">切换时间</label>
            <div class="design-editor-content">
                <el-input
                    type="text"
                    v-digit
                    class="c-input"
                    placeholder="请输入切换时间"
                    v-model="data.data.interval"
                />
                <p class="font-12 color-666" style="line-height:24px">
                    轮播图自动切换的间隔时间，单位：毫秒
                </p>
            </div>
        </div>
        <ul class="img-list">
            <li class="img-list-item clear" v-for="(item, key) in data.data.list" :key="key">
                <div class="design-editor-group clear">
                    <label class="editor-label">图片</label>
                    <div class="design-editor-content">
                        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
                            <img class="editor-img" :src="item.img" alt="" />
                            <div class="img-size">建议尺寸750x360</div>
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

interface CarouselProps {
    $index: number;
    data: {
        list: { url: string; img: string }[];
        interval: number;
        color: string;
        shape: 'round' | '';
        position: 'in' | 'out' | 'none';
    };
}

@Component
export default class DomEditorCarousel extends Vue {
    @Prop({
        type: Object,
        default: () => ({}),
    })
    data!: CarouselProps;

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
</style>
