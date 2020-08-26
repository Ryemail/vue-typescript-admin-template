<template>
    <section class="detail">
        <el-page-header @back="$router.back()" content="详情页面"> </el-page-header>
        <div class="flex">
            <div class="a"></div>
            <div class="flex-1">
                <div class="dd">
                    <p v-for="item in 100" :key="item">{{ item }}</p>
                </div>
            </div>
            <div class="b"></div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Detail extends Vue {}
</script>

<style lang="less" scoped>
.flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
    background: beige;
    .flex-1 {
        flex: 1;
        overflow: hidden;
    }
    .a {
        height: 30px;
    }
    .b {
        height: 54px;
    }
    .dd {
        height: 100%;
        background: blueviolet;
        overflow: auto;
    }
}
</style>
