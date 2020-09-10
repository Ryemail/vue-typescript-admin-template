<template>
    <section class="design-image clear design-item">
        <img v-for="(item, key) in imgList" :key="key" :src="item" />

        <div class="del" v-if="data.data.active" @click="del">删除</div>
        {{ data.data.params }}
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import defaultImg from '@/assets/image/default.png';
import { DesignEditor } from '@/types/design';

@Component
export default class DomImage extends Vue {
    @Prop({ type: Array, default: () => [defaultImg, defaultImg] })
    imgList!: string[];
    @Prop({ type: Object, default: () => ({}) }) data!: DesignEditor;

    get params() {
        return this.data.data.params;
    }

    private del() {
        this.$emit('del', this.data['$index']);
    }
}
</script>

<style lang="less" scoped></style>
