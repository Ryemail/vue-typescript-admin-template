<template>
    <section class="dom-cascader-menu">
        {{ nodes }}
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DomCascaderMenu extends Vue {
    @Prop({ type: Object, default: () => ({}) }) nodes!: object;

    @Prop({ type: Number, default: 0 }) index!: number;

    active = 0;

    created() {
        console.log(this.nodes);
    }
}
</script>

<style lang="less" scoped>
.dom-cascader-menu {
    padding: 0 10px;
}
</style>
