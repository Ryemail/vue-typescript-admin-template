<template>
    <section class="ry-container">
        <ry-aside />

        <main class="ry-main">
            <ry-header />

            <router-view class="ry-main-view"></router-view>

            <ry-footer />
        </main>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { ryFooter, ryHeader, ryAside } from './component';

@Component({
    components: {
        ryFooter,
        ryHeader,
        ryAside,
    },
})
export default class Layout extends Vue {}
</script>

<style lang="less">
.ry-container {
    display: flex;
    height: 100vh;
    overflow: hidden;
    .ry-main {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .ry-main-view {
        flex: 1;
    }
}
</style>
