<template>
    <section class="dom-container" :class="{ 'container-open-active': sidebar.opened }">
        <dom-aside :show-logo="settings.logo" />

        <main class="dom-main">
            <dom-header />

            <transition name="fade-transform" mode="out-in">
                <router-view :key="key" class="dom-main-view" />
            </transition>

            <dom-footer v-if="settings.footer" />
        </main>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { DomFooter, DomHeader, DomAside } from './component';
import settings from '@/settings';
import { storeApp } from '@/store/modules/app';

@Component({
    components: {
        DomFooter,
        DomHeader,
        DomAside,
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
.dom-container {
    height: 100vh;
    width: 100%;
    position: relative;

    .dom-main {
        margin-left: 200px;
        position: relative;
        min-height: 100%;
    }
    .dom-main-view {
        padding: 80px 20px 20px;
    }

    &.container-open-active {
        .dom-main {
            margin-left: 56px;
        }
        .dom-aside {
            width: 56px;
        }
        .dom-header {
            width: calc(100% - 56px);
        }
    }
}
</style>
