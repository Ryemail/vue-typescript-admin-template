<template>
    <header class="ry-header">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link"> 阮书垚<i class="el-icon-caret-bottom el-icon--right"></i> </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="clearfix">
                    退出
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </header>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="less">
.ry-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
    background-color: #fff;
    padding: 0 16px;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .el-dropdown-link {
        cursor: pointer;
    }
}
</style>
