<template>
    <footer class="ry-footer">footer</footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="less">
.ry-footer {
    text-align: center;
    height: 60px;
    line-height: 60px;
}
</style>
