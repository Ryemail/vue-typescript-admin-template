<template>
    <section class="design-image clear design-item">
        <img src="@/assets/image/img.png" />
        <div class="del" @click="del">删除</div>
    </section>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import DelMixin from '@/views/design/mixins/del';

@Component
export default class DomImage extends Mixins(DelMixin) {}
</script>

<style lang="less" scoped></style>
