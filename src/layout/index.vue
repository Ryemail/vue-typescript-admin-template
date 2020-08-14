<template>
    <section class="ry-layout">
        <ry-header />

        <router-view />

        <ry-footer />

        <ry-aside />
    </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { ryFooter, ryHeader, ryAside } from './component';

@Component({ components: { ryFooter, ryHeader, ryAside } })
export default class Layout extends Vue {}
</script>

<style lang="less"></style>
