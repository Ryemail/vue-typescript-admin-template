<template>
    <section class="dom-video clear design-item">
        <div :style="{ padding: `${params.marginY}px 0` }">
            <video
                src="https://www.w3school.com.cn/i/movie.ogg"
                :height="params.height"
                :autoplay="!!params.auto"
                :poster="params.poster"
                class="design-video"
                controls="controls"
            >
                your browser does not support the video tag
            </video>
        </div>
        <div class="del" v-if="data.data.active" @click="del">删除</div>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { DesignEditor, VideoProps } from '@/types/design';

@Component
export default class DomVideo extends Vue {
    @Prop({ type: Object, default: () => ({}) }) data!: DesignEditor<VideoProps>;

    get params() {
        return this.data.data.params;
    }

    private del() {
        this.$emit('del', this.data['$index']);
    }
}
</script>

<style lang="less" scoped>
.design-video {
    object-fit: cover;
    width: 100%;
}
</style>
