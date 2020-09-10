<template>
    <section class="design-phone-title no-drag">{{ data.data.title }}</section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import { DesignEditor } from '@/types/design';

@Component
export default class DomTitle extends Vue {
    @Prop({ type: Object, default: () => ({}) })
    data!: DesignEditor<{ title: string }>;

    get params() {
        return this.data.data.params;
    }

    private del() {
        this.$emit('del', this.data['$index']);
    }
}
</script>

<style lang="less" scoped>
.design-phone-title {
    height: 66px;
    line-height: 88px;
    font-size: 14px;
    white-space: nowrap;
    text-align: center;
    background: url('~@/assets/image/phone-top-black.png') center center / contain no-repeat rgb(255, 255, 255);
}
</style>
