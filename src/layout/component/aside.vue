<template>
    <el-menu
        default-active="1-4-1"
        background-color="#3E3E69"
        text-color="#C3C3DB"
        class="ry-aside"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
    >
        <el-scrollbar class="ry-aside-scroll">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>

            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-scrollbar>
    </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Aside extends Vue {
    isCollapse = false;

    handleOpen(key: string, keyPath: string) {
        console.log(key, keyPath);
    }

    handleClose(key: string, keyPath: string) {
        console.log(key, keyPath);
    }
}
</script>

<style lang="less" scoped>
.ry-aside {
    width: 200px;
    height: 100vh;
    overflow: hidden;

    /deep/ .el-menu-item {
        background: #2f2f55 !important;
        &.is-active {
            background: #61c5c1 !important;
            color: #fff !important;
        }
    }
    .ry-aside-scroll {
        height: 100%;
        /deep/ .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    }
}
</style>
