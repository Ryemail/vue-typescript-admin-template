<template>
    <footer class="dom-footer">footer</footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="less">
.dom-footer {
    text-align: center;
    height: 60px;
    line-height: 60px;
}
</style>
