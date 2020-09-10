<template>
    <section class="dom-announcement clear design-item">
        <van-notice-bar
            :scrollable="!!params.scrollable"
            :wrapable="!!params.wrapable"
            :color="params.color"
            :background="params.background"
            :text="params.text"
            :mode="params.mode"
            :left-icon="params.icon ? params.icon : 'volume-o'"
            :style="{ height: params.height + 'px' }"
        >
            <template #left-icon> </template>
        </van-notice-bar>
        <!-- <div class="flex notice-wrap flex-item-center" :style="{ padding: `${params.marginY}px 0` }">
            <img v-if="params.icon" class="notice-icon" :src="params.icon" />
            <div :style="{ color: `${params.color}` }" class="notice-text">{{ params.text }}</div>
        </div> -->
        <div class="del" v-if="data.data.active" @click="del">删除</div>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { AnnouncementProps, DesignEditor } from '@/types/design';

@Component
export default class DomAnnouncement extends Vue {
    @Prop({ type: Object, default: () => ({}) }) data!: DesignEditor<AnnouncementProps>;

    get params() {
        return this.data.data.params;
    }

    private del() {
        this.$emit('del', this.data['$index']);
    }
}
</script>

<style lang="less" scoped>
.notice-wrap {
    min-height: 20px;
    line-height: 20px;
}
.notice-icon {
    width: 20px;
    height: 20px;
    padding-right: 10px;
    object-fit: cover;
}
.notice-text {
    flex: 1;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    animation: 10s wordsLoop linear infinite normal;
}

@keyframes wordsLoop {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}

@keyframes verticalLoop {
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(-100%);
    }
}
</style>
