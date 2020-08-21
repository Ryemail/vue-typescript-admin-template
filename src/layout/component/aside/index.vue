<template>
    <div class="dom-aside">
        <ry-logo v-if="showLogo" :collapse="isCollapse" />
        <el-menu
            :class="{ 'logo-container': showLogo }"
            :default-active="$route.meta.name || $route.name"
            background-color="#3E3E69"
            text-color="#C3C3DB"
            :collapse="isCollapse"
            :collapse-transition="false"
            router
        >
            <el-scrollbar class="dom-aside-scroll">
                <dom-aside-item v-for="route in routes" :key="route.path" :item="route" />
            </el-scrollbar>
        </el-menu>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { storeUser } from '@/store/modules/user';
import { storeApp } from '@/store/modules/app';
import DomAsideItem from './aside-item.vue';
import RyLogo from './logo.vue';

@Component({ components: { DomAsideItem, RyLogo } })
export default class Aside extends Vue {
    @Prop({ type: Boolean, default: true }) showLogo!: boolean;

    get routes() {
        return storeUser.routes;
    }

    get isCollapse() {
        return storeApp.sidebar.opened;
    }

    created() {
        console.log(this.$route.meta.name);
    }
}
</script>

<style lang="less" scoped>
.dom-aside {
    width: 200px;
    height: 100%;
    overflow: hidden;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    transition: width 0.28s;
    /deep/ .el-menu {
        height: 100%;
        width: 100% !important;
        &.logo-container {
            height: calc(100% - 60px);
        }
        &.el-menu--collapse {
            .el-submenu__title {
                padding: 0 !important;
            }
            .sub-icon {
                margin: 0 16px !important;
            }
            .el-submenu__icon-arrow {
                display: none;
            }
            .el-tooltip {
                padding: 0 !important;
            }
        }
    }
    /deep/ .el-submenu {
        .el-menu-item {
            background: #2f2f55 !important;
        }
    }

    /deep/ .el-menu-item {
        &.is-active {
            background: #61c5c1 !important;
            color: #fff !important;
        }
    }
    // /deep/ .el-submenu > .el-submenu__title {
    //     padding: 0 !important;
    // }
    .dom-aside-scroll {
        height: 100%;
        /deep/ .el-scrollbar__wrap {
            overflow-x: hidden;
        }
        /deep/ .is-horizontal {
            display: none;
        }
    }
}
</style>
