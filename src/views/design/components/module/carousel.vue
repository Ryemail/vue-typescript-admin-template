<template>
    <section class="design-carousel  design-item">
        <van-swipe
            :class="[params.position === 'out' ? 'custom-swipe' : '']"
            @change="onChange"
            :autoplay="params.interval"
            :height="params.height"
            :show-indicators="params.position !== 'none'"
        >
            <van-swipe-item v-for="(item, index) in params.list" :key="index">
                <a :href="item.url ? item.url : 'javascript:;'">
                    <img :src="item.img" class="design-carousel-item" />
                </a>
            </van-swipe-item>
            <template #indicator>
                <div class="custom-indicator" :class="[params.position]">
                    <span
                        v-for="(item, index) in params.list"
                        :style="{ background: current === index ? params.color : '' }"
                        :key="index"
                        :class="['indicator-item', params.shape]"
                    ></span>
                </div>
            </template>
        </van-swipe>
        <div class="del" v-if="data.data.active" @click="del">删除</div>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { CarouselProps, DesignEditor } from '@/types/design';

@Component
export default class DomCarousel extends Vue {
    @Prop({ type: Object, default: () => ({}) }) data!: DesignEditor<CarouselProps>;

    current = 0;

    get params() {
        return this.data.data.params;
    }

    private del() {
        this.$emit('del', this.data['$index']);
    }

    onChange(index: number) {
        console.log(index);
        this.current = index;
    }
}
</script>

<style lang="less" scoped>
.carousel-container {
    width: 100%;
    transition: transform 0.4s ease-in-out;
}
.custom-swipe {
    padding-bottom: 30px;
    .custom-indicator {
        bottom: 9px;
    }
}

.design-carousel-item {
    height: 100%;
    object-fit: cover;
}
.in {
    bottom: 10px;
}

.custom-indicator {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    .indicator-item {
        display: inline-block;
        width: 6px;
        height: 6px;
        background: #ebedf0;
        margin: 0 4px;
        &.round {
            border-radius: 50%;
        }
        &.rect {
            border-radius: 4px;
            width: 20px;
            height: 2px;
        }
    }
}
</style>
