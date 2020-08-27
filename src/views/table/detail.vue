<template>
    <section class="detail">
        <el-page-header @back="$router.back()" content="详情页面"> </el-page-header>
        <div class="flex">
            <!--  -->
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
}
</style>
