<template>
    <section class="ry-container" :class="{ 'container-open-active': sidebar.opened }">
        <ry-aside :show-logo="settings.logo" />

        <main class="ry-main">
            <ry-header />

            <transition name="fade-transform" mode="out-in">
                <router-view :key="key" class="ry-main-view" />
            </transition>

            <ry-footer v-if="settings.footer" />
        </main>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ryFooter, ryHeader, ryAside } from './component';
import settings from '@/settings';
import { storeApp } from '@/store/modules/app';

@Component({
    components: {
        ryFooter,
        ryHeader,
        ryAside,
    },
})
export default class Layout extends Vue {
    get key() {
        return this.$route.path;
    }
    get settings() {
        return settings;
    }
    get sidebar() {
        return storeApp.sidebar;
    }
}
</script>

<style lang="less">
.ry-container {
    height: 100vh;
    width: 100%;
    position: relative;

    .ry-main {
        margin-left: 200px;
        position: relative;
        min-height: 100%;
    }
    .ry-main-view {
        padding: 80px 20px 20px;
    }

    &.container-open-active {
        .ry-main {
            margin-left: 56px;
        }
        .ry-aside {
            width: 56px;
        }
        .ry-header {
            width: calc(100% - 56px);
        }
    }
}
</style>
