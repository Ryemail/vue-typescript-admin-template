<template>
    <section class="dom-editor-search clear font-12">
        <div class="design-editor-group clear">
            <label class="editor-label">背景颜色</label>
            <el-color-picker class="design-editor-content" v-model="data.data.background"></el-color-picker>
        </div>
        <div class="design-editor-group clear font-12">
            <label class="editor-label">文字提示</label>
            <el-input
                type="text"
                class="c-input design-editor-content"
                placeholder="请输入关键字进行搜索"
                v-model="data.data.keywords"
            />
        </div>
        <div class="design-editor-group clear">
            <label class="editor-label">搜索框样式</label>
            <div class="design-editor-content">
                <el-radio-group v-model="data.data.shape">
                    <el-radio label="square">方形</el-radio>
                    <el-radio label="round">圆角</el-radio>
                </el-radio-group>
            </div>
        </div>
        <div class="design-editor-group clear">
            <label class="editor-label">文字对齐</label>
            <div class="design-editor-content">
                <el-radio-group v-model="data.data.align">
                    <el-radio label="left">居左</el-radio>
                    <el-radio label="center">居中</el-radio>
                    <el-radio label="right">居右</el-radio>
                </el-radio-group>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import { storeDesign } from '@/store/modules/design';

import { SearchProps } from '@/types/design';

@Component
export default class DomEditorSearch extends Vue {
    @Prop({
        type: Object,
        default: () => ({}),
    })
    data!: { data: SearchProps } & { $index: number };

    @Watch('data', { deep: true, immediate: true })
    onForm() {
        storeDesign.updateCompoent(this.data);
    }
}
</script>

<style lang="less"></style>
