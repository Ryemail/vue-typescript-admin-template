<template>
    <section class="design-phone-title no-drag">{{ asyncTitle }}</section>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { DesginComponent } from '@/types/design';

interface DesignProps extends DesginComponent {
    $index: number;
}

@Component
export default class DomTitle extends Vue {
    // @Prop({ type: Object, default: () => ({}) }) data!: DesignProps;

    asyncTitle = '页面设计';

    // @Watch('data', { deep: true, immediate: true })
    // onData(val: DesignProps) {
    //     console.log(val, 'dd');
    //     this.asyncTitle = val.nav.title;
    // }
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
