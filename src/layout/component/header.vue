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
}
</style>
