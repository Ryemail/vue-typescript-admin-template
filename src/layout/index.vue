<template>
    <section class="dom-container" :class="classObj">
        <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />

        <dom-aside :show-logo="settings.logo" />

        <!-- <el-scrollbar style="height:100%"> -->
        <main class="dom-main">
            <dom-header />

            <div class="dom-main-view">
                <transition name="fade-transform" mode="out-in">
                    <router-view :key="key" />
                </transition>
            </div>

            <dom-footer v-if="settings.footer" />
        </main>
        <!-- </el-scrollbar> -->
    </section>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { DomFooter, DomHeader, DomAside } from './component';
import settings from '@/settings';
import { storeApp } from '@/store/modules/app';
import ResizeHandler from './mixin/resizeHandler';

@Component({
    components: {
        DomFooter,
        DomHeader,
        DomAside,
    },
})
export default class Layout extends Mixins(ResizeHandler) {
    get key() {
        return this.$route.path;
    }
    get settings() {
        return settings;
    }
    get sidebar() {
        return storeApp.sidebar;
    }
    get device() {
        return storeApp.device;
    }

    get classObj() {
        return {
            containerActive: !this.sidebar.opened,
            mobile: this.device === 'mobile',
        };
    }

    private handleClickOutside() {
        storeApp.closeSideBar({ withoutAnimation: false });
    }
}
</script>

<style lang="less">
.dom-container {
    height: 100vh;
    width: 100%;
    position: relative;
    // .el-scrollbar {
    //     height: 100%;
    // }

    // .el-scrollbar__wrap {
    //     overflow-x: hidden;
    //     margin-bottom: 0 !important;
    // }

    // .el-scrollbar__bar.is-horizontal {
    //     height: 0;
    // }
    .dom-main {
        margin-left: 200px;
        position: relative;
        min-height: 100%;
        transition: margin-left 0.28s;
    }
    .dom-main-view {
        padding: 80px 20px 20px;
    }
    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }

    &.mobile {
        .dom-aside {
            transition: transform 0.28s, -webkit-transform 0.28s;
            width: 200px !important;
        }
        .dom-main {
            margin-left: 0;
        }

        .dom-header {
            width: 100%;
        }
    }

    &.containerActive {
        .dom-main {
            margin-left: 56px;
        }
        .dom-aside {
            width: 56px;
        }
        .dom-header {
            width: calc(100% - 56px);
        }
        &.mobile {
            .dom-aside {
                position: fixed;
                top: 0;
                transform: translate3d(-200px, 0, 0);
                transition-duration: 0.3s;
            }
            .dom-main {
                margin-left: 0;
            }
            .dom-header {
                width: 100%;
            }
        }
    }
}
</style>
