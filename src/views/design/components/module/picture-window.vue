<template>
    <section class="picture-window clear design-item">
        <img src="@/assets/image/gril.png" />
        <div class="del" @click="del">删除</div>
    </section>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator';

import DelMixin from '@/views/design/mixins/del';

@Component
export default class DomPictureWindow extends Mixins(DelMixin) {}
</script>

<style lang="less" scoped></style>
