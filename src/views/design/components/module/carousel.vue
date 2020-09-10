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
import { Component, Vue, Prop } from 'vue-property-decorator';

import { DesignEditor } from '@/types/design';

@Component
export default class DomCarousel extends Vue {
    @Prop({ type: Number, default: 160 }) height!: number;
    @Prop({ type: Object, default: () => ({}) }) data!: DesignEditor;

    bannerList = [require('@/assets/image/gril.png')];

    get params() {
        return this.data.data.params;
    }

    private del() {
        this.$emit('del', this.data['$index']);
    }
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
