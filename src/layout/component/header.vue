<template>
    <header class="ry-header">header</header>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="less">
.ry-header {
    height: 60px;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
