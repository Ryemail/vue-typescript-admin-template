<template>
    <section class="design-image clear design-item">
        <img v-for="(item, key) in imgList" :key="key" :src="item" />

        <div class="del" v-if="data.data.active" @click="del">删除</div>
    </section>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import DelMixin from '@/views/design/mixins/del';
import defaultImg from '@/assets/image/default.png';

@Component
export default class DomImage extends Mixins(DelMixin) {
    @Prop({ type: Array, default: () => [defaultImg, defaultImg] })
    imgList!: string[];
}
</script>

<style lang="less" scoped></style>
