<template>
    <section class="dom-search clear design-item">
        <van-search
            v-model="params.keywords"
            :shape="params.shape"
            :input-align="params.align"
            :background="params.background"
            placeholder="请输入搜索关键词"
        />
        <div class="del" v-if="data.data.active" @click="del">删除</div>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { DesignEditor } from '@/types/design';

@Component
export default class DomSearch extends Vue {
    @Prop({ type: Object, default: () => ({}) }) data!: DesignEditor;

    get params() {
        return this.data.data.params;
    }

    private del() {
        this.$emit('del', this.data['$index']);
    }
}
</script>

<style lang="less"></style>
