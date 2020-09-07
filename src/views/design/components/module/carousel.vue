<template>
    <section class="design-carousel clear design-item">
        <div>
            <div class="">
                <img class="drag-item-gril" src="@/assets/image/gril.png" />
            </div>
        </div>
        <div class="del" @click="del">删除</div>
    </section>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import DelMixin from '@/views/design/mixins/del';

@Component
export default class DomCarousel extends Mixins(DelMixin) {}
</script>

<style lang="less" scoped></style>
