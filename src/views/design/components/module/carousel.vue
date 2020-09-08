<template>
    <section class="design-carousel clear design-item">
        <div class="carousel-container" ref="carousel" :style="{ height: `${height}px` }">
            <div class="carousel-track">
                <img v-for="(item, key) in bannerList" :key="key" :src="item" class="design-carousel-item" />
            </div>
        </div>
        <div class="del" v-if="data.data.active" @click="del">删除</div>
    </section>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import DelMixin from '@/views/design/mixins/del';

@Component
export default class DomCarousel extends Mixins(DelMixin) {
    @Prop({ type: Number, default: 160 }) height!: number;

    bannerList = [require('@/assets/image/gril.png')];
}
</script>

<style lang="less" scoped>
.carousel-container {
    width: 100%;
    transition: transform 0.4s ease-in-out;
    .carousel-track {
        display: flex;
        height: 100%;
        overflow: hidden;
    }
}

.design-carousel-item {
    height: 100%;
    object-fit: cover;
}
</style>
