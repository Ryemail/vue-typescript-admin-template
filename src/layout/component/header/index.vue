<template>
    <header class="dom-header">
        <ry-hamburger :is-active="sidebar.opened" class="hamburger-container " @toggleClick="toggleSideBar" />
        <el-dropdown trigger="click" class="dom-header-left">
            <span class="el-dropdown-link"> 阮书垚<i class="el-icon-caret-bottom el-icon--right"></i> </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="out" class="clearfix" @click.native="logout">
                    退出
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { storeApp } from '@/store/modules/app';

import RyHamburger from './hamburger.vue';

@Component({ components: { RyHamburger } })
export default class Header extends Vue {
    get sidebar() {
        return storeApp.sidebar;
    }

    toggleSideBar() {
        storeApp.toggleSideBar();
    }

    async logout() {
        await this.$store.dispatch('user/logout');
        this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }
}
</script>

<style lang="less">
.dom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    height: 60px;
    width: calc(100% - 200px);
    transition: width 0.28s;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .el-dropdown-link {
        cursor: pointer;
    }
    .dom-header-left {
        padding: 0 16px;
    }

    .hamburger-container {
        line-height: 60px;
        height: 100%;
        cursor: pointer;
        transition: background 0.3s;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            background: rgba(0, 0, 0, 0.025);
        }
    }
}
</style>
