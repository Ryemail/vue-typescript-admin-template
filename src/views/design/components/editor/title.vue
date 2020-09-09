<template>
    <section class="dom-editor-title">
        <div class="design-editor-group font-12">
            <label class="editor-label">页面标题</label>
            <el-input
                type="text"
                class="c-input design-editor-content"
                placeholder="请输入页面标题"
                v-model="data.data.title"
                maxlength="10"
                show-word-limit
            />
        </div>
    </section>
</template>

<script lang="ts">
import { storeDesign } from '@/store/modules/design';
import { DesignParams } from '@/types/design';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class DomEditorTitle extends Vue {
    @Prop({
        type: Object,
        default: () => ({
            data: { title: '' },
        }),
    })
    data!: DesignParams<{ title: string }>;

    @Watch('data', { deep: true })
    onForm(value: object) {
        storeDesign.updateCompoent(this.data);
    }
}
</script>

<style lang="less">
@import url('./style');
</style>
