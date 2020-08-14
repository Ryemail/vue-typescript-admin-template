<template>
    <section class="ry-container">
        <ry-header />

        <main class="ry-main">
            <ry-aside />
            <router-view class="ry-main-view" />
        </main>

        <ry-footer />
    </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { ryFooter, ryHeader, ryAside } from './component';

@Component({ components: { ryFooter, ryHeader, ryAside } })
export default class Layout extends Vue {}
</script>

<style lang="less">
.ry-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .ry-main {
        display: flex;
        flex: 1;
    }
    .ry-main-view {
        flex: 1;
    }
}
</style>
